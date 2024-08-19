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
              :src="newsItem.image"
              :alt="newsItem.title"
              class="news-image"
            />
            <div class="news-text">
              <h2>{{ newsItem.title }}</h2>
              <p class="news-message">
                {{ newsItem.message }}
              </p>
              <!-- <router-link
                :to="{ name: 'NewsDetails', params: { id: newsItem.id } }"
                class="read-more"
                >Read More</router-link
              > -->
              <!-- <a :href="newsItem.link" class="read-more">Read More</a> -->

            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.title = "News & Updates | TIS ";
});
const newsItems = [
  {
    id: 1, // Add unique ID
    title: "TIS Students Shine at Regional Science Fair",
    image: "staff.jpg",
    message:
      "TIS students showcased their innovative projects at the Regional Science Fair, winning several awards and recognitions for their outstanding work...",
    link: "#", // This will be replaced by the router-link
  },
  {
    id: 2, // Add unique ID
    title: "TIS Hosts Annual Cultural Festival",
    image: "staff.jpg",
    message:
      "The annual cultural festival at TIS was a vibrant celebration of diversity, with students presenting traditional dances, music, and cuisine from various cultures...",
    link: "#", // This will be replaced by the router-link
  },
  {
    id: 3, // Add unique ID
    title: "TIS Sports Team Wins Championship",
    image: "staff.jpg",
    message:
      "Congratulations to the TIS sports team for their victory in the inter-school championship! The team's hard work and dedication have truly paid off...",
    link: "#", // This will be replaced by the router-link
  },
];
</script>

<style scoped>
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  color: #333;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.news-item {
  display: flex;
  flex-direction: column;
  background-color: #e8f5e9; /* Light green background */
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.news-image {
  width: 100%;
  height: auto;
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

.news-item a.read-more {
  display: inline-block;
  margin-top: 10px;
  color: #007bff;
  text-decoration: none;
}

.news-item a.read-more:hover {
  text-decoration: underline;
}

@media (min-width: 768px) {
  .news-wrapper {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
  .page-title {
    font-size: 38px;
    margin-bottom: 10px;
  }

  .motto-text {
    font-size: 30px;
  }
}
</style>
