<template>
    <section class="news-details-page">
      <div v-if="newsItem" class="news-details-container">
        <img :src="newsItem.image" :alt="newsItem.title" class="news-details-image" />
        <div class="news-details-content">
          <h1 class="news-title">{{ newsItem.title }}</h1>
          <p class="news-message">{{ newsItem.message }}</p>
        </div>
      </div>
      <div v-else class="loading">
        <p>Loading news details...</p>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted, ref } from 'vue';
  import { useRoute } from 'vue-router';
  
  // Sample news data, replace this with actual data source
  const newsItems = [
    {
      id: 1,
      title: "TIS Students Shine at Regional Science Fair",
      image: "staff.jpg",
      message:
        "TIS students showcased their innovative projects at the Regional Science Fair, winning several awards and recognitions for their outstanding work. The event was a testament to the creativity and hard work of the students, who presented a wide range of projects that impressed the judges. The students' achievements have brought pride to the school and have set a high standard for future participants.",
    },
    {
      id: 2,
      title: "TIS Hosts Annual Cultural Festival",
      image: "staff.jpg",
      message:
        "The annual cultural festival at TIS was a vibrant celebration of diversity, with students presenting traditional dances, music, and cuisine from various cultures. The event was a colorful display of heritage and unity, as students and staff alike participated in the festivities. The festival is one of the highlights of the school year and serves as an opportunity for the TIS community to come together and celebrate the rich cultural diversity within the school.",
    },
    {
      id: 3,
      title: "TIS Sports Team Wins Championship",
      image: "staff.jpg",
      message:
        "Congratulations to the TIS sports team for their victory in the inter-school championship! The team's hard work and dedication have truly paid off, as they emerged as the champions in a thrilling final match. The victory is a significant achievement for the team, which has trained tirelessly throughout the season. The entire school community is proud of the team's accomplishment and looks forward to more successes in the future.",
    },
  ];
  
  const route = useRoute();
  const newsItem = ref(null);
  
  onMounted(() => {
    const id = parseInt(route.params.id);
    newsItem.value = newsItems.find(item => item.id === id);
  });
  </script>
  
  <style scoped>
  .news-details-page {
    padding: 40px;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f9f9f9;
    min-height: 100vh;
  }
  
  .news-details-container {
    max-width: 800px;
    margin: 0 auto;
    background-color: #fff;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
  
  .news-details-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    object-fit: cover;
    margin-bottom: 20px;
  }
  
  .news-title {
    font-size: 32px;
    color: #2c3e50;
    margin-bottom: 20px;
  }
  
  .news-message {
    font-size: 18px;
    line-height: 1.6;
    color: #555;
  }
  
  .loading {
    text-align: center;
    font-size: 18px;
    color: #555;
  }
  </style>
  