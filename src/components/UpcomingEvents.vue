<template>
  <div class="upcoming-events">
    <div class="event-item">
      <h2 class="section-title">Upcoming Event</h2>
      <p class="event-date">{{ event.date }}</p>
      <h3 class="event-title">{{ event.title }}</h3>
      <p class="event-description">{{ event.description }}</p>
      <!-- <router-link :to="event.link" class="find-out-more"
        >Find out more »</router-link
      > -->
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const event = ref({
  date: "23rd November 2024",
  title: "Ophanage Drive: Bake Sale",
  description:
    "Free Dress Day",
  link: "/event-details",
});
</script>

<style scoped>
.upcoming-events {
  background-color: #f8f8f8;
  text-align: center;
  border-radius: 8px;
  max-width: 300px;
  margin: 0 auto;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
  color: #098044;
  margin-bottom: 20px;
}

.event-item {
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin: 0 auto;
}

.event-date {
  font-size: 16px;
  color: #666;
  margin-bottom: 10px;
}

.event-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  color: #2c3e50;
}

.event-description {
  font-size: 14px;
  color: #666;
  margin-bottom: 15px;
}

.find-out-more {
  font-size: 14px;
  color: #3498db;
  text-decoration: none;
  transition: color 0.3s ease-in-out;
}

.find-out-more:hover {
  color: #1e7bb7;
}

/* Tablet and Above */
@media (max-width: 768px) {
  .upcoming-events {
    max-width: 100%;
    padding: 20px;
  }

  .event-item {
    max-width: 100%;
    margin-bottom: 20px;
  }

  .section-title {
    font-size: 22px;
  }

  .event-date,
  .event-title,
  .event-description {
    font-size: 14px;
  }
}

/* Mobile Styles */
@media (max-width: 480px) {
  .section-title {
    font-size: 18px; /* Reduced font size for very small screens */
    margin-bottom: 15px;
  }

  .event-date {
    font-size: 14px; /* Adjusted for mobile readability */
    margin-bottom: 8px;
  }

  .event-title {
    font-size: 16px; /* Reduced for smaller screens */
    margin-bottom: 8px;
  }

  .event-description {
    font-size: 13px; /* Compact but legible */
    margin-bottom: 12px;
    line-height: 1.4;
  }

  .event-item {
    padding: 15px;
  }
}
</style>
