<template>
  <div class="slider">
    <div
      class="slide"
      v-for="(item, index) in images"
      :key="index"
      :style="{ backgroundImage: `url(${item.src})` }"
      :class="{ active: index === currentIndex }"
    >
      <div class="dark-overlay"></div> <!-- Dark overlay added -->
      <div class="text-overlay">{{ item.text }}</div>
    </div>
    <button class="prev" @click="prevSlide">&lt;</button>
    <button class="next" @click="nextSlide">&gt;</button>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import image1 from "@/assets/images/kg_learning.jpg";
import image2 from "@/assets/images/artshow.jpg";
import image3 from "@/assets/images/upper_primary_excursion.jpg";
import image4 from "@/assets/images/fun1.jpeg";


const images = ref([
  { src: image1, text: "Welcome to Takoradi International School" },
  { src: image2, text: "Explore Our Campus" },
  { src: image3, text: "Join Our Community" },
  { src: image4, text: "Unleashing Fun and Learning Together" },
]);

const currentIndex = ref(0);
let interval;

const startSlideshow = () => {
  interval = setInterval(() => {
    currentIndex.value = (currentIndex.value + 1) % images.value.length;
  }, 30000); // Change slide every 30 seconds
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
}

.slide {
  position: absolute;
  top: 0;
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

/* Dark overlay added to darken the images */
.dark-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.4); /* Adjust darkness level here */
  z-index: 1;
}

.text-overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-size: 24px;
  font-style: italic;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-align: center;
  padding: 0 20px;
  z-index: 2;
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
  z-index: 3; /* Ensure buttons are on top of everything else */
}

.prev {
  left: 10px; /* Adjusted for better visibility */
}

.next {
  right: 10px; /* Adjusted for better visibility */
}

.slider:hover .prev {
  opacity: 1;
  transform: translateY(-50%) translateX(0); /* Adjust transform */
}

.slider:hover .next {
  opacity: 1;
  transform: translateY(-50%) translateX(0); /* Adjust transform */
}

button:hover {
  background-color: rgba(0, 0, 0, 0.7);
}

@media (min-width: 480px) {
  .text-overlay {
    font-size: 28px;
  }
}

@media (min-width: 768px) {
  .text-overlay {
    font-size: 32px;
  }
}

@media (min-width: 1024px) {
  .text-overlay {
    font-size: 36px;
  }
}

@media (min-width: 1280px) {
  .text-overlay {
    font-size: 44px;
  }
}
</style>
