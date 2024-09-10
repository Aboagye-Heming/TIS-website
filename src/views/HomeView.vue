<template>
  <SliderComponent />
  <div class="content">
    <WelcomeComponent />
    <!-- <about/> -->
     <div class="main-content">
      <UpcomingEvents class="upcoming-events" />
      <NewsAndUpdates class="news-updates" />
    </div> 
  </div>
</template>

<script setup>
import SliderComponent from "@/components/sliderComponent.vue";
import WelcomeComponent from "@/components/WelcomeComponent.vue";
import { onMounted } from 'vue';


onMounted(() => {
  document.title = 'TIS | Unity in Diversity';
});
// import about from "@/views/AboutPage.vue";
import NewsAndUpdates from "@/components/NewsAndUpdates.vue";
import UpcomingEvents from "@/components/UpcomingEvents.vue";
</script>

<style scoped>
.content {
  position: relative;
  z-index: 100;
  margin-top: 100vh;
}

.main-content {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  /* gap: 20px; */
  background-color: #f8f8f8;
  padding-bottom: 20px;
  margin-top: -1px;
}

/* .news-updates,
.upcoming-events {
  flex: 1;
  margin: 10px;
} */

.news-updates {
  max-width: 68%;
}

.upcoming-events {
  max-width: 35%;
  padding-left: 150px;
}

@media (max-width: 768px) {
  .main-content {
    flex-direction: column;
    align-items: center;
    padding: 20px;
    gap: 20px;
  }

  .news-updates,
  .upcoming-events {
    max-width: 100%;
    padding: 0px;
  }
}
@media (min-width: 768px) {
  .upcoming-events {
    padding-left: 20px;
  }
}
@media (min-width: 960px) {
  .upcoming-events {
    padding-left: 150px;
  }
}
</style>
