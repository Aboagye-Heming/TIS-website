<template>
  <div class="news-updates">
    <h2 class="section-title">News and Updates</h2>
    <div class="container">
      <transition-group name="slide" tag="div" class="news-list">
        <div
          class="news-item"
          v-for="(item, index) in newsItems"
          :key="item.id"
          :class="{ active: index === currentIndex }"
        >
          <img :src="item.imageUrl" :alt="item.altText" class="news-image" />
          <div class="news-content">
            <h3 class="news-title">{{ item.title }}</h3>
            <p class="news-description">{{ item.description }}</p>
            <router-link :to="item.link" class="read-more">Read More</router-link>
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import fistPumpsImage from "@/assets/images/fistpumps.jpg";

const newsItems = ref([
  {
    id: 1,
    imageUrl: fistPumpsImage,
    altText: "News Image 1",
    title: "Exciting News Event 1",
    description: "This is a brief description of news event 1.",
    link: "/news/1",
  },
  {
    id: 2,
    imageUrl: fistPumpsImage,
    altText: "News Image 2",
    title: "Exciting News Event 2",
    description: "This is a brief description of news event 2.",
    link: "/news/2",
  },
  {
    id: 3,
    imageUrl: fistPumpsImage,
    altText: "News Image 3",
    title: "Exciting News Event 3",
    description: "This is a brief description of news event 3.",
    link: "/news/3",
  },
]);

const currentIndex = ref(0);
const intervalTime = 5000; // 5 seconds

setInterval(() => {
  currentIndex.value = (currentIndex.value + 1) % newsItems.value.length;
}, intervalTime);
</script>

<style scoped>
.news-updates {
  background-color: #f8f8f8;
  padding: 10px 0 40px 0;
  text-align: center;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  color: green;
  margin-bottom: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
}

.news-list {
  display: flex;
  overflow: hidden;
  width: 100%;
  max-width: 800px;
  position: relative;
  height: 250px; /* Adjust height to match image or content */
}

.news-item {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
  opacity: 0;
  transform: translateX(100%);
}

.news-item.active {
  opacity: 1;
  transform: translateX(0);
}

.news-image {
  width: 100%;
  height: auto;
  max-height: 200px;
  object-fit: cover;
}

.news-content {
  padding: 20px;
  text-align: center;
}

.news-title {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
}

.news-description {
  font-size: 16px;
  color: #666;
  margin-bottom: 15px;
}

.read-more {
  font-size: 16px;
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.read-more:hover {
  color: #1e7bb7;
}

@media (min-width: 768px) {
  .news-item {
    flex-direction: row;
  }

  .news-content {
    text-align: left;
  }

  .news-image {
    max-width: 300px;
  }
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.5s ease-in-out;
}

.slide-enter,
.slide-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
</style>
