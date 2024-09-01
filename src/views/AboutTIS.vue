<template>
  <section class="about-page">
    <div class="school-image-container">
      <img
        src="@/assets/images/staff.jpg"
        alt="School Building"
        class="school-image"
      />
      <div class="image-overlay">
        <h1 class="page-title">Motto</h1>
        <div class="motto-text">Unity in Diversity</div>
      </div>
    </div>
    <div class="container">
      <section class="about-content">
        <div class="content-wrapper">
          <div class="content-block beliefs-block">
            <h2>Statements of Beliefs</h2>
            <p>
              Takoradi International School believes that children are born with
              unique potentials that should be cultivated for holistic character
              and intellectual development.
            </p>
            <p>
              We recognize the crucial role parents play in the development of
              their child and believe it is essential to build a relationship
              based on mutuality, trustworthiness, and cooperation between our
              school and parents.
            </p>
            <p>
              We also believe in imparting to our children the knowledge to
              enable them to accept the ever-evolving world as an interdependent
              global community where each individual is recognized as an equal
              member of the human family.
            </p>
          </div>

          <div class="content-block mission-block">
            <h2>Mission Statement</h2>
            <p>
              As an international school, we work towards establishing a
              learning environment that demonstrates unity in diversity by
              honoring, stimulating, and challenging each pupil’s spiritual,
              social, physical, and intellectual capacity; nurturing them to
              develop healthy relationships of trust, respect, courtesy,
              tolerance, and honesty.
            </p>
            <p>
              We strive towards excellence by testing pupils’ creative and
              analytical thinking skills and their ability to transfer and apply
              these abilities to various situations.
            </p>
            <p>
              We inculcate in our pupils a spirit of service and a sense of
              global loyalty, encouraging them to see themselves as World
              Citizens and begin to take an active role in making an impact on
              our evolving global society.
            </p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue';

onMounted(() => {
  document.title = 'About TIS | TIS';
});
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

@keyframes titleFadeIn {
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin-top: 50px;
}

.school-image-container {
  position: relative;
  width: 100%;
}

.school-image {
  width: 100%;
  max-height: 500px;
  object-fit: cover;
  border-bottom: 5px solid #2c3e50;
  animation: fadeIn 1s ease-in-out;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.4);
  text-align: center;
}

.page-title {
  color: white;
  font-size: 48px;
  font-weight: bold;
  animation: titleFadeIn 1.5s ease-in-out;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  text-decoration: underline;
  margin-bottom: 10px;
}

.motto-text {
  color: white;
  font-size: 40px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.about-content {
  flex: 1;
  padding: 40px 0;
  background-color: white;
}

.content-wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
  background-color: white;
  color: #2c3e50;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-wrap: wrap;
  gap: 40px;
}

.content-block {
  flex: 1;
  min-width: 300px;
  animation: fadeIn 1s ease-in-out;
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
  font-size: 18px; /* Increased for readability */

  line-height: 1.6; /* Increased line height for better readability */
}

.content-block h2 {
  font-size: 30px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  color: #2c3e50;
}

.beliefs-block {
  background-color: #e3f2fd;
}

.mission-block {
  background-color: #f1f8e9;
}

.uniform-block {
  background-color: #fff3e0;
}

.uniform-image-wrapper {
  text-align: center;
  margin-top: 20px;
}

.uniform-image {
  width: 100%;
  max-width: 300px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
}

.uniform-image:hover {
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .about-content {
    padding: 20px 10px;
  }
  .content-wrapper {
    padding: 10px;
    flex-direction: column;
    align-items: center;
  }
  .content-block {
    width: 100%;
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
