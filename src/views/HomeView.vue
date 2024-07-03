<template>
  <SliderComponent />
  <div class="content">
    <WelcomeComponent />
    <NewsAndUpdates/>
  </div>
</template>

<script setup>
import SliderComponent from "@/components/sliderComponent.vue";
import WelcomeComponent from "@/components/WelcomeComponent.vue";
import NewsAndUpdates from "@/components/NewsAndUpdates.vue";
</script>
<style scoped>
.content {
  position: relative;
  z-index: 100;
  margin-top: 100vh;
}
</style>
