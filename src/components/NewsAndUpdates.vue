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
          <img
            :src="getImageUrl(item.image)"
            :alt="item.title"
            class="news-image"
          />
          <div class="news-content">
            <h3 class="news-title">{{ item.title }}</h3>
            <p class="news-description">{{ item.message }}</p>
            <router-link :to="`/news-and-updates/${item.id}`" class="read-more"
              >Read More</router-link
            >
          </div>
        </div>
      </transition-group>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// Array of news items
const newsItems = ref([
  {
    id: 1,
    image: "logosHope.jpg",
    title:
      "TIS Students Visit Logos Hope Ship: A Journey of Learning and Inspiration",
    message:
      "TIS students recently had the unique opportunity to visit LOGOS Hope, the world’s largest floating book fair, during...",
  },
  // {
  //   id: 2,
  //   image: "staff.jpg",
  //   title: "TIS Marks Safe and Health Week with Workshops and Activities",
  //   message:
  //     "TIS celebrated Safe & Health Week with a series of interactive workshops, health screenings, and ...",
  // },
  // {
  //   id: 3,
  //   image: "staff.jpg",
  //   title: "TIS Sports Team Wins Championship",
  //   message:
  //     "Congratulations to the TIS sports team for their victory in the inter-school championship! The team's hard work and dedication have truly paid off...",
  // },
]);

const currentIndex = ref(0);
const intervalTime = 30000; // 30 seconds

setInterval(() => {
  currentIndex.value = (currentIndex.value + 1) % newsItems.value.length;
}, intervalTime);

// Function to dynamically resolve image paths
function getImageUrl(imageName) {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}
</script>

<style scoped>
.news-updates {
  background-color: #f8f8f8;
  text-align: center;
  width: 100%;
}

.section-title {
  font-size: 32px;
  font-weight: bold;
  color: #098044;
  margin-bottom: 0px;
  margin-top: 0px;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: start;
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
img{
  border-radius: 10px;
}
.news-content {
  padding: 20px;
  text-align: center;
}

.news-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
}

.news-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.read-more {
  font-size: 14px;
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
