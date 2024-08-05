<template>
    <div v-if="visible" class="toast" :class="type">
      <p>{{ message }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, defineProps } from "vue";
  
  const props = defineProps({
    message: String,
    type: {
      type: String,
      default: "success",
    },
    duration: {
      type: Number,
      default: 3000,
    },
  });
  
  const visible = ref(true);
  
  watch(visible, (newVal) => {
    if (newVal) {
      setTimeout(() => {
        visible.value = false;
      }, props.duration);
    }
  });
  </script>
  
  <style scoped>
  .toast {
    position: fixed;
    top: 20px;
    left: 20px;
    padding: 15px;
    border-radius: 5px;
    color: #fff;
    opacity: 0.9;
    z-index: 1000;
    animation: fadeIn 3.70s ease, fadeOut 5.70s ease forwards;
  }
  
  .toast.success {
    background-color: #28a745;
  }
  .toast.error {
    background-color: #dc3545;
  }
  .toast.info {
    background-color: #17a2b8;
  }
  .toast.warning {
    background-color: #ffc107;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 0.9;
      transform: translateY(0);
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 0.9;
      transform: translateY(0);
    }
    to {
      opacity: 0;
      transform: translateY(-20px);
    }
  }
  </style>
  