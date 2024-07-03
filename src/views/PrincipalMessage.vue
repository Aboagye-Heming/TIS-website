<template>
  <section class="history-page">
    <HeaderTitle title="Principal's Message" />
    <div class="container">
      <section class="history-content">
        <div class="content-wrapper">
          <div class="history-images-container">
            <img
              src="@/assets/images/fistpumps.jpg"
              alt="Our History Image"
              class="history-image"
            />
            <img
              src="@/assets/images/fistpumps.jpg"
              alt="Our History Image"
              class="history-image"
            />
            <img
              src="@/assets/images/art_show.jpg"
              alt="Our History Image"
              class="history-image"
            />
          </div>
          <div class="history-text">
            <p>
              Our institution was founded in 1965 with the mission of providing
              quality education to students from all backgrounds. Over the
              decades, we have grown and evolved, adapting to the changing needs
              of our community and the world. Today, we are proud to be a leader
              in education, offering a diverse range of programs and services to
              help our students succeed.
            </p>
            <p>
              In the early years, our focus was on building a strong foundation
              in traditional academic disciplines. As the world changed, so did
              we. We embraced new technologies and teaching methods, integrating
              them into our curriculum to ensure that our students are prepared
              for the future.
            </p>
            <p>
              Throughout our history, we have remained committed to our core
              values of integrity, excellence, and community. We believe that
              education is not just about acquiring knowledge, but also about
              developing character and building a better world. Our alumni are a
              testament to this, as they go on to make significant contributions
              in their chosen fields and communities.
            </p>
            <p>
              As we look to the future, we are excited to continue our tradition
              of excellence and innovation. We invite you to join us on this
              journey, as we work together to create a brighter future for all.
            </p>
            <p>
              It was opened in 1998 as the Takoradi Learning Centre. It aimed at
              providing a high standard of international education, following a
              British educational-oriented programme. The school has since
              grown, changed its name to Takoradi International School, and is
              now providing education from kindergarten to senior secondary.
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import HeaderTitle from "@/components/HeaderTitle.vue";
</script>

<style scoped>
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.history-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin-top: 50px;
}

.history-header {
  background-color: #84dd84;
  color: black;
  padding: 20px;
  text-align: center;
  border-bottom: 2px solid #2c3e50;
}

.history-content {
  flex: 1;
  padding: 40px 0;
  background-color: white;
}

.content-wrapper {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}

.history-text {
  flex: 2;
  min-width: 250px;
  animation: fadeIn 1s ease-in-out;
}

.history-images-container {
  flex: 1;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 10px;
}

.history-image {
  width: 100%;
  height: 100%;
  border-radius: 100%;
  transition: transform 0.3s ease-in-out;
  animation: fadeIn 1s ease-in-out;
}

.history-image:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .history-content {
    padding: 20px 10px;
  }
  .content-wrapper {
    padding: 10px;
    flex-direction: column;
    align-items: center;
  }
  .history-images-container {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, auto);
  }
}
</style>
