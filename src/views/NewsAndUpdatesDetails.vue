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
        <!-- <button class="prev" @click="prevSlide">&#10094;</button>
        <button class="next" @click="nextSlide">&#10095;</button> -->
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
const route = useRoute();
const newsItem = ref(null);
const formattedMessage = ref("");
const currentSlide = ref(0);
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
    images: ["smile.jpg"],
    title: "Commemoration of School’s 26th Anniversary / ‘World Smile Day’",
    message:
      "On Friday, 4th October, Takoradi International School celebrated its 26th anniversary, coinciding with ‘World Smile Day.’ The school organized a Free Dress Day where students were encouraged to wear yellow, symbolizing happiness and positivity. The day was filled with excitement as students exchanged thoughtful gifts with each other, fostering a sense of community and kindness. The celebration aimed to create an atmosphere of joy, while also reflecting on the school’s achievements and growth over the past 26 years. Various fun activities, including games and team-building exercises, were held to promote smiles and unity among the students, staff, and the wider school community.",
  },
  {
    id: 3,
    title: "TIS Observes Anti-Bullying Week: Choose Respect",
    images: ["oddSocks.jpg", "antiBullying2.jpg"],
    message:
      "Takoradi International School recently marked Anti-Bullying Week with the theme 'Choose Respect,' emphasizing the importance of fostering kindness, inclusivity, and mutual respect among students.\n\n" +
      "The week began with an engaging presentation during Monday's assembly to introduce the theme. Students were encouraged to wear odd socks to celebrate individuality and the value of respecting differences. Tuesday continued the odd socks celebration, with students and staff showcasing their creative and colorful choices.\n\n" +
      "Interactive workshops and role-playing sessions were held during the week, helping students learn to identify bullying behaviors, support peers, and report incidents effectively. A standout activity was the ‘Kindness Chain,’ where students wrote kind messages to one another, creating a vibrant display of positivity throughout the school.\n\n" +
      "On Friday, the week culminated with another powerful presentation, reinforcing the message of respect and unity. Students and staff dressed in pink and purple, symbolizing compassion and empathy, creating a visually impactful end to the week.\n\n" +
      'The event also featured a creative poster competition with the theme "Be a Buddy, Not a Bully," inspiring students to express their views on anti-bullying through art. Winning posters were displayed around the school to remind everyone of the value of compassion and respect.\n\n' +
      "As the week concluded, students signed an Anti-Bullying Pledge, committing to uphold a culture of kindness and empathy in their daily interactions. The pledge ceremony was a heartfelt moment, reinforcing the importance of standing together against bullying.\n\n" +
      "The success of Anti-Bullying Week at TIS underscores the school’s dedication to creating a safe and inclusive environment for all its students.",
  },

  {
    id: 4,
    title: "TIS Marks Safe and Health Week with Workshops and Activities",
    images: ["staff.jpg", "healthWeek.jpg"],
    message:
      "TIS recently held its much-anticipated annual Safe and Health Week, a week-long event dedicated to promoting physical, mental, and emotional well-being among students and staff.\n\n" +
      "The week was packed with a variety of activities including health screenings, fitness challenges, mental health workshops, and safety drills designed to equip the school community with vital knowledge.",
  },
];

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
  if (!Array.isArray(imageNames)) {
    return []; // Return an empty array if imageNames is not an array
  }
  return imageNames.map(
    (imageName) =>
      new URL(`../assets/images/${imageName}`, import.meta.url).href
  );
}

// Slide Navigation Functions
// function prevSlide() {
//   currentSlide.value =
//     (currentSlide.value - 1 + newsItem.value.images.length) %
//     newsItem.value.images.length;
// }

// function nextSlide() {
//   currentSlide.value = (currentSlide.value + 1) % newsItem.value.images.length;
// }
</script>

<style scoped>
.news-details-page {
  padding: 40px;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f9f9f9;
  /* min-height: 100vh; */
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
  max-width: 700px;
  max-height: 400px;
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

  .prev,
  .next {
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
