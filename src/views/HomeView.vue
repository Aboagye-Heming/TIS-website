<template>
  <SliderComponent />
  <div class="content">

    <WelcomeComponent />
  </div>
</template>

<script setup>
import SliderComponent from "@/components/sliderComponent.vue";
import WelcomeComponent from "@/components/WelcomeComponent.vue";
</script>
<style scoped>
.content {
  position: relative;
  z-index: 100;
  margin-top: 100vh; 
}
</style>
