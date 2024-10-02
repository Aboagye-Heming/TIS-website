<template>
  <section class="news-details-page">
    <div v-if="newsItem" class="news-details-container">
      <img
        :src="getImageUrl(newsItem.image)"
        :alt="newsItem.title"
        class="news-details-image"
      />
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
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";

const newsItems = [
  {
    id: 1,
    title:
      "TIS Students Visit LOGOS Hope: A Journey of Learning and Inspiration",
    image: "staff.jpg",
    message:
      "TIS students recently had the unique opportunity to visit LOGOS Hope, the world’s largest floating book fair, during its stop at the local port. The students were welcomed aboard and immediately captivated by the vast collection of over 5,000 books, covering a wide range of topics including science, history, literature, and global cultures. LOGOS Hope’s mission of spreading knowledge and education through its extensive library resonated deeply with the students, who eagerly browsed the book collections, selecting titles that piqued their interest. \n\n" +
      "In addition to the book fair, the students participated in interactive workshops and engaged in discussions with the international crew members, gaining insights into life aboard a ship dedicated to education and cultural exchange. The experience broadened the students' understanding of global citizenship and inspired them to continue their pursuit of knowledge beyond the classroom. The visit to LOGOS Hope was not only an academic enrichment activity but also a cultural experience that left a lasting impression on both students and staff.",
  },
  {
    id: 2,
    title: "TIS Marks Safe and Health Week with Workshops and Activities",
    image: "staff.jpg",
    message:
      "TIS recently held its much-anticipated annual Safe and Health Week, a week-long event dedicated to promoting physical, mental, and emotional well-being among students and staff. The week was packed with a variety of activities including health screenings, fitness challenges, mental health workshops, and safety drills designed to equip the school community with vital knowledge on personal health and emergency preparedness. \n\n" +
      "Highlights of the event included guest lectures by healthcare professionals who spoke on topics ranging from nutrition and exercise to stress management and first aid. Students had the chance to participate in practical workshops, learning CPR techniques and the importance of fire safety. Fitness challenges and yoga sessions were also organized, encouraging students to stay active and maintain a balanced lifestyle. \n\n" +
      "The Safe and Health Week initiative reinforced the importance of well-being within the school community, providing students with essential tools and knowledge to maintain their health and safety. The event was a huge success and will continue to be a cornerstone of the school's commitment to nurturing well-rounded individuals.",
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
  newsItem.value = newsItems.find((item) => item.id === id);
});

function getImageUrl(imageName) {
  return new URL(`../assets/images/${imageName}`, import.meta.url).href;
}
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
