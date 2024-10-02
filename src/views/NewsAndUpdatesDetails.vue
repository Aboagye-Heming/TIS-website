<template>
  <section class="news-details-page">
    <div v-if="newsItem" class="news-details-container">
      <div class="slider">
        <div
          class="slides"
          :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
        >
          <div
            v-for="(image, index) in getImageUrls(newsItem.images)"
            :key="index"
            class="slide"
          >
            <img
              :src="image"
              :alt="newsItem.title"
              class="news-details-image"
            />
          </div>
        </div>
        <button class="prev" @click="prevSlide">&#10094;</button>
        <button class="next" @click="nextSlide">&#10095;</button>
      </div>

      <div class="news-details-content">
        <h1 class="news-title">{{ newsItem.title }}</h1>
        <div v-html="formattedMessage" class="news-message"></div>
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

// Sample newsItems array with multiple images per news item
const newsItems = [
  {
    id: 1,
    title:
      "TIS Students Visit LOGOS Hope: A Journey of Learning and Inspiration",
    images: ["logosHope.jpg"],
    message:
      "TIS students recently had the unique opportunity to visit LOGOS Hope, the world’s largest floating book fair, during its stop at the local port.\n\n" +
      "The students were welcomed aboard and immediately captivated by the vast collection of over 5,000 books, covering a wide range of topics including science, history, literature, and global cultures.",
  },
  {
    id: 2,
    title: "TIS Marks Safe and Health Week with Workshops and Activities",
    images: ["staff.jpg", "healthWeek.jpg"],
    message:
      "TIS recently held its much-anticipated annual Safe and Health Week, a week-long event dedicated to promoting physical, mental, and emotional well-being among students and staff.\n\n" +
      "The week was packed with a variety of activities including health screenings, fitness challenges, mental health workshops, and safety drills designed to equip the school community with vital knowledge.",
  },
  {
    id: 3,
    title: "TIS Sports Team Wins Championship",
    images: ["sportsTeam.jpg"],
    message:
      "Congratulations to the TIS sports team for their victory in the inter-school championship! The team's hard work and dedication have truly paid off.",
  },
];

const route = useRoute();
const newsItem = ref(null);
const formattedMessage = ref("");
const currentSlide = ref(0);

onMounted(() => {
  const id = parseInt(route.params.id);
  newsItem.value = newsItems.find((item) => item.id === id);

  if (newsItem.value) {
    formattedMessage.value = formatMessageWithParagraphs(
      newsItem.value.message
    );
  }
});

// Format message with paragraph tags
function formatMessageWithParagraphs(message) {
  return message
    .split("\n\n")
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");
}

// Get image URLs
function getImageUrls(imageNames) {
  return imageNames.map(
    (imageName) =>
      new URL(`../assets/images/${imageName}`, import.meta.url).href
  );
}

// Slide Navigation Functions
function prevSlide() {
  currentSlide.value =
    (currentSlide.value - 1 + newsItem.value.images.length) %
    newsItem.value.images.length;
}

function nextSlide() {
  currentSlide.value = (currentSlide.value + 1) % newsItem.value.images.length;
}
</script>

<style scoped>
.news-details-page {
  padding: 40px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  min-height: 100vh;
  margin-top: 24px;
}

.news-details-container {
  max-width: 800px;
  margin: 0 auto;
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

/* Slider Styles */
.slider {
  position: relative;
  width: 100%;
  overflow: hidden;
  margin-bottom: 20px;
}

.slides {
  display: flex;
  transition: transform 0.5s ease-in-out;
}

.slide {
  min-width: 100%;
  transition: transform 0.5s ease-in-out;
}

.news-details-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 8px;
}

/* Navigation Buttons */
.prev,
.next {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  z-index: 10;
  border-radius: 50%;
}

.prev {
  left: 10px;
}

.next {
  right: 10px;
}

.news-title {
  font-size: 32px;
  color: #2c3e50;
  margin-bottom: 20px;
}

.news-message {
  font-size: 18px;
  line-height: 1.6;
  color: #2c3e50;
}

.news-message p {
  font-size: 18px;
  color: #555;
  margin-bottom: 16px;
}

.loading {
  text-align: center;
  font-size: 18px;
  color: #555;
}

/* Mobile-friendly Styles */
@media (max-width: 768px) {
  .news-details-page {
    padding: 20px;
  }

  .news-title {
    font-size: 24px; /* Reduced font size for smaller screens */
  }

  .news-message {
    font-size: 16px; /* Reduced font size for smaller screens */
  }

  .news-message p {
    font-size: 16px;
    margin-bottom: 12px; /* Reduced margin for smaller screens */
  }

  .prev, .next {
    padding: 8px; /* Slightly smaller button size for mobile */
  }
}

@media (max-width: 480px) {
  .news-title {
    font-size: 20px; /* Even smaller font size for very small screens */
  }

  .news-message {
    font-size: 14px; /* Reduced text size for very small screens */
  }

  .news-message p {
    font-size: 14px;
  }
}

</style>
