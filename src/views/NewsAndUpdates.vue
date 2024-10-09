<template>
  <section class="news-page">
    <div class="page-image-container">
      <img
        src="@/assets/images/santakids.jpg"
        alt="News and Updates"
        class="page-image"
      />
      <div class="image-overlay">
        <h1 class="page-title">News & Updates</h1>
      </div>
    </div>
    <div class="container">
      <section class="news-content">
        <div class="news-wrapper">
          <div
            v-for="(newsItem, index) in newsItems"
            :key="index"
            class="news-item"
          >
            <img
              :src="getImageUrl(newsItem.image)"
              :alt="newsItem.title"
              class="news-image"
            />
            <div class="news-text">
              <h2>{{ newsItem.title }}</h2>
              <p class="news-message">
                {{ newsItem.message }}
              </p>
              <button @click="navigateToDetails(newsItem.id)" class="read-more">
                Read More
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>
<script setup>
import { onMounted } from "vue";
import { useRouter } from "vue-router";

onMounted(() => {
  document.title = "News & Updates | TIS";
});

const newsItems = [
  {
    id: 1,
    image: "logosHope.jpg",
    title:
      "TIS Students Visit Logos Hope Ship: A Journey of Learning and Inspiration",
    message:
      "TIS students recently had the unique opportunity to visit LOGOS Hope, the world’s largest floating book fair, during...",
  },
  {
    id: 2,
    image: "smile.jpg",
    title: "Commemoration of School’s 26th Anniversary / ‘World Smile Day’",
    message:
      "On Friday, 4th October, TIS commemorated its 26th anniversary alongside ‘World Smile Day.’ Students participated in a... ",
  },
];

function getImageUrl(imageName) {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}

const router = useRouter();
function navigateToDetails(id) {
  router.push({ name: "News And Updates Details", params: { id } });
}
</script>
<style scoped>
/* General page and container styling */
.news-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f3f4f6;
  margin-top: 50px;
}

.page-image-container {
  position: relative;
  width: 100%;
}

.page-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-bottom: 5px solid #2c3e50;
}

.image-overlay {
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

.page-title {
  color: white;
  font-size: 48px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.news-content {
  flex: 1;
  padding: 40px 0;
  background-color: #f9f9f9;
}

.news-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* Single column on small screens */
  gap: 20px;
}

/* News item block styling */
.news-item {
  background-color: #e8f5e9;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.news-image {
  width: 100%;
  max-width: 300px; /* Limit width for consistency */
  max-height: 200px; /* Limit height to control image size */
  border-radius: 8px;
  object-fit: cover;
  margin-bottom: 15px;
}

.news-text {
  flex: 1;
}

.news-item h2 {
  font-size: 24px;
  margin-bottom: 10px;
  color: #2c3e50;
}

.news-item p.news-message {
  font-size: 16px;
  line-height: 1.6;
  color: #555;
}

.news-item .read-more {
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 16px;
  padding: 0;
}

.news-item .read-more:hover {
  text-decoration: underline;
}

/* Responsive layout for larger screens */
@media (min-width: 768px) {
  .news-wrapper {
    grid-template-columns: repeat(2, 1fr); /* 2 columns on medium screens */
    gap: 30px;
  }

  .page-title {
    font-size: 38px;
    margin-bottom: 10px;
  }
}

@media (min-width: 1024px) {
  .news-wrapper {
    grid-template-columns: repeat(3, 1fr); /* 3 columns on large screens */
    gap: 30px;
  }
}

@media (min-width: 1440px) {
  .news-wrapper {
    grid-template-columns: repeat(4, 1fr); /* 4 columns on extra large screens */
    gap: 30px;
  }
}
</style>

