<template>
  <div class="gallery-page">
    <!-- <HeaderTitle title="Gallery" /> -->

    <div class="container">
      <div class="recent-events">
        <div class="recent-events-gallery">
          <div class="recent-event" v-for="event in events" :key="event.id">
            <img
              :src="event.imageUrl"
              :alt="event.altText"
              class="event-image"
            />
            <p class="event-subtitle">{{ event.title }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// import HeaderTitle from "@/components/HeaderTitle.vue";

// Import images
import artShowImage from "@/assets/images/art_show.jpg";
import fistPumpsImage from "@/assets/images/fistpumps.jpg";

const events = [
  {
    id: 1,
    imageUrl: artShowImage,
    altText: "Kindergarten Graduation",
    title: "Kindergarten Graduation",
  },
  {
    id: 2,
    imageUrl: artShowImage,
    altText: "Santa day",
    title: "Santa day",
  },
  {
    id: 3,
    imageUrl: artShowImage,
    altText: "Secondary School Sports Event",
    title: "Secondary School Sports Event",
  },
  {
    id: 4,
    imageUrl: artShowImage,
    altText: "Kindergarten Kids Drone Shot",
    title: "Kindergarten Kids Drone Shot",
  },
 
  {
    id: 6,
    imageUrl: artShowImage,
    altText: "Outdoor Classroom Activity",
    title: "Outdoor Classroom Activity",
  },
  {
    id: 7,
    imageUrl: artShowImage,
    altText: "Kindergarten Learning",
    title: "Kindergarten Learning",
  },
  {
    id: 8,
    imageUrl: artShowImage,
    altText: "Students enjoying TikTok show",
    title: "Students enjoying TikTok show",
  },
  {
    id: 9,
    imageUrl: artShowImage,
    altText: "Excursion with Teacher",
    title: "Excursion with Teacher",
  },
  {
    id: 10,
    imageUrl: artShowImage,
    altText: "2024 Grade 6 Graduation (Ladies)",
    title: "2024 Grade 6 Graduation (Ladies)",
  },
  {
    id: 11,
    imageUrl: artShowImage,
    altText: "2024 Grade 6 Graduation with class teachers",
    title: "2024 Grade 6 Graduation with class teachers",
  },
  {
    id: 5,
    imageUrl: fistPumpsImage,
    altText: "Fist Pumps Celebration",
    title: "Fist Pumps Celebration",
  },
  {
    id: 12,
    imageUrl: artShowImage,
    altText: "2024 Grade 6 Graduation (Gentlemen)",
    title: "2024 Grade 6 Graduation (Gentlemen)",
  },
  // Add more events as needed
];
</script>

<style scoped>
.gallery-page {
  background-color: #f8f8f8;
  padding: 40px 0;
  border-top: 1px solid #e7e7e7;
}

.recent-events {
  margin-top: 40px;
}

.recent-events-headline {
  margin-bottom: 20px;
  color: green;
  text-align: center;
}

.recent-events-headline h3 {
  font-size: 24px;
  font-weight: bold;
}

.recent-events-gallery {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}

.recent-event {
  flex: 1 1 30%;
  max-width: 30%;
  text-align: center;
  margin-bottom: 20px;
}

@media (max-width: 768px) {
  .recent-event {
    flex: 1 1 100%;
    max-width: 100%;
  }
}

.event-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.event-image:hover {
  transform: scale(1.05);
}

.event-subtitle {
  margin-top: 10px;
  font-size: 16px;
  color: #666;
}
</style>
constant = 12
hems = constant * 2