<template>
  <v-app>
    <v-main>
      <v-container class="text-center">
        <h1>Custom QR Code Scanner</h1>

        <!-- Nút để bắt đầu quét -->
        <v-btn color="primary" large @click="startScanning">
          Start Scanning
        </v-btn>

        <!-- Quét mã QR -->
        <qrcode-stream
          v-if="showScanner"
          @decode="onDecode"
          @init="onInit"
          :paused="paused"
          class="mt-4"
          :facingMode="'environment'"
          :enable-barcode="true"
          :formats="['qr_code', 'code_128']"
        ></qrcode-stream>

        <!-- Hiển thị kết quả quét -->
        <v-alert v-if="decodedText" type="success" class="mt-4">
          Decoded: {{ decodedText }}
        </v-alert>

        <!-- Hiển thị lỗi -->
        <v-alert v-if="errorMessage" type="error" class="mt-4">
          {{ errorMessage }}
        </v-alert>

        <!-- Nút Restart Scanner -->
        <v-btn class="mt-4" color="primary" @click="stopScanner">
          Stop Scanning
        </v-btn>
        <input
          type="file"
          @change="onFileChange"
          class="mt-4"
        />
        
        <!-- Hiển thị ảnh đã chọn -->
        <v-row justify="center">
      <v-col cols="12" md="8">
        <v-card>
          <v-card-title>Quay Video</v-card-title>
          <v-card-text>
            <!-- Video element để hiển thị stream từ camera -->
            <video ref="video" autoplay playsinline style="width: 100%; height: auto;" />

            <!-- Nút điều khiển -->
            <v-btn
              color="primary"
              class="mt-4"
              @click="openCamera"
              :disabled="cameraOpened"
            >
              Mở Camera
            </v-btn>
            <v-btn
              color="primary"
              class="mt-4"
              @click="startRecording"
              :disabled="!cameraOpened || isRecording"
            >
              Bắt đầu Quay
            </v-btn>
            <v-btn
              color="error"
              class="mt-4"
              @click="stopRecording"
              :disabled="!isRecording"
            >
              Dừng Quay
            </v-btn>
            <v-btn
              color="secondary"
              class="mt-4"
              @click="switchCamera"
            >
              Chuyển Camera
            </v-btn>
          </v-card-text>
          <v-card-actions>
            <v-btn color="success" @click="downloadVideo" v-if="videoBlob">
              Tải Video Xuống
            </v-btn>
          </v-card-actions>
          <StreamBarcodeReader @decode="onDecode1" @loaded="onLoaded"></StreamBarcodeReader>
          <p>{{ value }}</p>
        </v-card>
      </v-col>
    </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import { QrcodeStream } from "vue3-qrcode-reader";
import { StreamBarcodeReader } from "vue-barcode-reader";

export default {
  components: { QrcodeStream, StreamBarcodeReader },
  data() {
    return {
      decodedText: "",
      errorMessage: "",
      showScanner: false,
      paused: false,
      result: "",
    };
  },
  methods: {
    async openCamera() {
      try {
        // Yêu cầu quyền truy cập camera
        this.mediaStream = await navigator.mediaDevices.getUserMedia({
          video: true,
          audio: true,
        });

        // Gắn stream vào thẻ video
        const video = this.$refs.video;
        video.srcObject = this.mediaStream;

        this.cameraOpened = true;
      } catch (error) {
        console.error("Lỗi khi mở camera:", error);
        alert("Không thể mở camera. Vui lòng kiểm tra quyền truy cập.");
      }
    },
    async switchCamera() {
      try {
        // Đổi chế độ camera
        this.facingMode = this.facingMode === "user" ? "environment" : "user";

        // Dừng stream hiện tại
        if (this.mediaStream) {
          this.mediaStream.getTracks().forEach((track) => track.stop());
        }

        // Mở camera mới với chế độ đã đổi
        this.mediaStream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: this.facingMode },
          audio: true,
        });

        // Gắn stream mới vào thẻ video
        const video = this.$refs.video;
        video.srcObject = this.mediaStream;
      } catch (error) {
        console.error("Lỗi khi chuyển camera:", error);
      }
    },
    // Bắt đầu quét mã QR
    startScanning() {
      this.showScanner = true;
      this.errorMessage = "";
      this.decodedText = "";
    },
    // Khi quét thành công
    onDecode(decodedString) {
      this.decodedText = decodedString;
      this.errorMessage = "";
      this.paused = true; // Tạm dừng quét sau khi quét thành công
    },
    onDecode1 (result) { console.log(result)
      this.result = result
     } ,
    // Khi khởi tạo camera
    onInit(promise) {
      promise.catch(() => {
        this.errorMessage =
          "Unable to access camera. Please allow camera permissions or check your browser settings.";
      });
    },
    // Dừng quét mã QR
    stopScanner() {
      this.paused = false;
      this.decodedText = "";
      this.errorMessage = "";
    },
    startRecording() {
      if (!this.cameraOpened || !this.mediaStream) {
        alert("Vui lòng mở camera trước khi quay video.");
        return;
      }

      try {
        // Cấu hình MediaRecorder
        this.mediaRecorder = new MediaRecorder(this.mediaStream);
        const chunks = [];

        this.mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            chunks.push(event.data);
          }
        };

        this.mediaRecorder.onstop = () => {
          // Tạo Blob từ dữ liệu video
          this.videoBlob = new Blob(chunks, { type: "video/webm" });
        };

        this.mediaRecorder.start();
        this.isRecording = true;
      } catch (error) {
        console.error("Lỗi khi bắt đầu quay video:", error);
      }
    },

    onDataAvailable(event) {
      // Lưu lại các đoạn video đã quay
      this.recordedChunks.push(event.data);
    },

    onStopRecording() {
      // Khi quay xong, tạo videoBlob và tên file
      this.videoBlob = new Blob(this.recordedChunks, { type: "video/webm" });
      this.videoSrc = URL.createObjectURL(this.videoBlob);
      this.videoName = `video_${Date.now()}.webm`; // Tên video theo thời gian
    },

    stopRecording() {
      // Dừng quay video
      if (this.mediaRecorder && this.isRecording) {
        this.mediaRecorder.stop();
        this.isRecording = false;
      }
    },

    saveVideo() {
      // Lưu video vào máy người dùng
      if (this.videoBlob) {
        // saveAs(this.videoBlob, this.videoName);
      }
    },
  },
};
</script>

<style scoped>
@import "vuetify/dist/vuetify.min.css";
</style>
