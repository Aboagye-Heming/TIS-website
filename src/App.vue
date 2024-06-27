<template>
  <NavBar />
  <RouterView />
  <FooterBar />

</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/NavBar.vue";
import FooterBar from "@/components/FooterBar.vue";

</script>


<style scoped></style>
