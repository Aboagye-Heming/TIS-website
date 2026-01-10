<template>
  <section class="about-page">
    <div class="school-image-container">
      <img
        src="@/assets/images/staff.jpg"
        alt="School Building"
        class="school-image"
      />
      <div class="image-overlay">
        <h1 class="page-title">Management Team</h1>
        <div class="motto-text">Leading with Excellence</div>
      </div>
    </div>
    <div class="container">
      <section class="about-content">
        <div class="content-wrapper">
          <div class="content-block management-block">
            <h2>Management</h2>
            <p>
              The school is governed by a Board of Directors, which includes
              some members of the original project who are distinguished. The
              Board of Directors is responsible for decisions that relate to the
              school financially, legally and academically. Monitoring the
              school’s curriculum, academic standards and other administrative
              duties are carried out by the head teacher/principal, who is
              assisted by two sectional heads and coordinators.
            </p>
          </div>

          <!-- <div class="content-block leader-block">
            <div class="leader">
              <img
                src="@/assets/images/kg_arts.jpg"
                alt="Principal"
                class="leader-image"
              />
              <h3 class="leader-title">Head Teacher</h3>
            </div>
            <div class="leader">
              <img
                src="@/assets/images/kg_arts.jpg"
                alt="Sectional Coordinator"
                class="leader-image"
              />
              <h3 class="leader-title">Sectional Head (Upper and Secondary)</h3>
            </div>
            <div class="leader">
              <img
                src="@/assets/images/kg_arts.jpg"
                alt="Board Member"
                class="leader-image"
              />
              <h3 class="leader-title">Sectional Head (Primary)</h3>
            </div>
          </div> -->
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Management | TIS";
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
  flex-direction: column;
  gap: 40px;
}

.content-block {
  animation: fadeIn 1s ease-in-out;
  padding: 20px;
  border-radius: 8px;
  box-sizing: border-box;
  margin-bottom: 20px;
}

.content-block h2 {
  font-size: 30px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 10px;
  color: #2c3e50;
}

.management-block {
  background-color: #e3f2fd;
  font-size: 18px; /* Increased for readability */
  color: #333; /* Darker grey for better contrast */
  line-height: 2; /* Improved line spacing */
}

.leader-block {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.leader {
  text-align: center;
  max-width: 300px;
  flex: 1 1 300px;
}

.leader-image {
  width: 100%;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.5s ease;
}

.leader-image:hover {
  transform: scale(1.05);
}

.leader-title {
  margin-top: 10px;
  font-size: 24px;
  font-weight: bold;
  color: #2c3e50;
}

@media (max-width: 768px) {
  .about-content {
    padding: 20px 10px;
  }
  .content-wrapper {
    padding: 10px;
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

  .leader-block {
    flex-direction: column;
    gap: 30px;
  }

  .leader {
    max-width: 100%;
  }
}
</style>
