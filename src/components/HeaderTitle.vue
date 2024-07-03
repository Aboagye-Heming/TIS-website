<template>
  <div class="container">
    <header
      class="departments-header"
      :style="{ backgroundImage: `url(${backgroundImage})` }"
    >
      <h1>{{ title }}</h1>
    </header>
  </div>
</template>

<script setup>
const { title, backgroundImage } = defineProps({
  title: {
    type: String,
    required: true,
  },
  backgroundImage: {
    type: String,
    required: true,
  },
});
</script>

<style scoped>
.departments-header {
  background-size: contain;
  background-position: center center;
  background-color: #84dd84;
  color: black;
  padding: 60px 0; /* Increase padding to make it larger */
  text-align: center;
  width: 100%;
  border-bottom: 2px solid #2c3e50;
  position: relative;
  overflow: hidden;
  animation: slide 10s linear infinite; /* Add animation */
}

@keyframes slide {
  0% {
    background-position: 0 0;
  }
  100% {
    background-position: -200% 0; /* Adjust for slide effect */
  }
}
</style>
