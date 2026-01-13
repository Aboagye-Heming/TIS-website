<template>
  <div class="image-title-container">
    <img :src="imageSrc" :alt="imgAlt" class="image" />
    <div class="overlay">
      <h1 class="title">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

// Props
const props = defineProps({
  imgSrc: {
    type: String,
    required: true,
  },
  imgAlt: {
    type: String,
    default: 'Image',
  },
  title: {
    type: String,
    required: true,
  },
});

// Use import.meta.glob to load images dynamically
const images = import.meta.glob('@/assets/images/*.jpg', { eager: true });

// Computed property to get the image source
const imageSrc = computed(() => {
  const path = `./${props.imgSrc}`;
  return images[path] ? images[path].default : ''; // Return the image URL or an empty string if not found
});
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@keyframes titleFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.image-title-container {
  position: relative;
  width: 100%;
  margin-top: 50px;
}

.image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-bottom: 5px solid #2c3e50;
  animation: fadeIn 1s ease-in-out;
  background-color: #d62727; /* Temporary background color to debug */

}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
}

.title {
  color: white;
  font-size: 48px;
  font-weight: bold;
  animation: titleFadeIn 1.5s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}
</style>
