<template>
    <div class="container">
      <header class="departments-header">
        <h1>{{ title }}</h1>
      </header>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from "vue";
  
  const { title } = defineProps({
    title: {
      type: String,
      required: true,
    },
  });
  </script>
  
  <style scoped>
  .departments-header {
    background-color: #84dd84;
    color: black;
    padding: 20px 0px;
    text-align: center;
    width: 100%;
    border-bottom: 2px solid #2c3e50;
  }
  </style>
  