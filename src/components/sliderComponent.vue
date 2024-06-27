<template>
  <div class="slider">
    <div
      class="slide"
      v-for="(image, index) in images"
      :key="index"
      :style="{ backgroundImage: `url(${image})` }"
      :class="{ active: index === currentIndex }"
      @click="goToSlide(index)"
    ></div>
    <button class="prev" @click="prevSlide">&lt;</button>
    <button class="next" @click="nextSlide">&gt;</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import image1 from "@/assets/images/artshow.jpg";
import image2 from "@/assets/images/kg_graduation.jpg";
import image3 from "@/assets/images/primary_graduation.jpg";

const images = ref([image1, image2, image3]);

const currentIndex = ref(0);
let interval;

const startSlideshow = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }, 30000); // Change slide every 3 seconds
};

const stopSlideshow = () => {
  clearInterval(interval);
};

const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + images.value.length) % images.value.length;
};

const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % images.value.length;
};

const goToSlide = (index) => {
  currentIndex.value = index;
};

onMounted(() => {
  startSlideshow();
});

onUnmounted(() => {
  stopSlideshow();
});
</script>

<style scoped>
.slider {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  z-index: -1;
  margin-bottom: 100px;
}

.slide {
  position: absolute;
  top: 50px;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  opacity: 0;
  transition: opacity 1s ease-in-out;
}

.slide.active {
  opacity: 1;
}

button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  opacity: 0;
  transition: opacity 0.5s, transform 0.5s;
}

.prev {
  left: -50px; /* Start from outside the view */
}

.next {
  right: -50px; /* Start from outside the view */
}

.slider:hover .prev {
  opacity: 1;
  transform: translateY(-50%) translateX(50px); /* Slide in from the left */
}

.slider:hover .next {
  opacity: 1;
  transform: translateY(-50%) translateX(-50px); /* Slide in from the right */
}

button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}
</style>
