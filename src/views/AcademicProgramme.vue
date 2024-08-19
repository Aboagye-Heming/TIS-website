<template>
    <section class="academic-programme-page">
      <div class="page-image-container">
        <img
          src="@/assets/images/primary_graduation.jpg"
          alt="Academic Programme"
          class="page-image"
        />
        <div class="image-overlay">
          <h1 class="page-title">Academic Programme</h1>
        </div>
      </div>
      <div class="container">
        <section class="programme-content">
          <div class="content-wrapper">
            <div class="content-block">
              <h2>Academic Programme</h2>
              <p>
                Teaching at the Takoradi International School is in accordance with
                the Cambridge International programme (English, Mathematics, Science,
                Computing/ICT, Global Perspectives, Art & Design, Music and Physical
                Education) combined with the English National Curriculum (Geography,
                History, French and Design & Technology). The English language is
                employed as the language of instruction.
              </p>
              <p>
                Pupils sit the following Cambridge tests or examinations at these
                various levels:
              </p>
              <ul>
                <li>Progression tests - Years 3 to 6</li>
                <li>Primary Checkpoint - Year 6</li>
                <li>
                  Lower Secondary Checkpoint— In Year 9 students sit the Cambridge
                  Checkpoint examinations, which have a closer association with the
                  IGCSE.
                </li>
                <li>
                  Students in the Years 10 and 11 study rigorously for the
                  International General Certificate of Secondary Education (IGCSE) at
                  the end of Year 11.
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted } from "vue";

onMounted(() => {
  document.title = "Academic Programme | TIS ";
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
  
  .academic-programme-page {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f3f4f6;
    margin-top: 50px;
  }
  
  .page-image-container {
    position: relative;
    width: 100%;
  }
  
  .page-image {
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
    justify-content: center;
    align-items: center;
    background-color: rgba(0, 0, 0, 0.4);
  }
  
  .page-title {
    color: white;
    font-size: 48px;
    font-weight: bold;
    animation: titleFadeIn 1.5s ease-in-out;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  }
  
  .programme-content {
    flex: 1;
    padding: 40px 0;
    background-color: white;
  }
  
  .content-wrapper {
    max-width: 1000px;
    margin: 0 auto;
    padding: 20px;
    background-color: white;
    color: #333;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    display: grid;
    grid-template-columns: 1fr;
    gap: 20px;
  }
  
  .content-block {
    background-color: #fff;
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-in-out;
  }
  
  .content-block h2 {
    font-size: 24px;
    margin-bottom: 10px;
    color: #2c3e50;
  }
  
  .content-block p, .content-block ul {
    font-size: 16px;
    line-height: 1.6;
    color: #555;
  }
  
  .content-block ul {
    list-style-type: disc;
    padding-left: 20px;
  }
  
  .content-block ul li {
    margin-bottom: 5px;
  }
  
  @media (max-width: 768px) {
    .programme-content {
      padding: 20px 10px;
    }
    .content-wrapper {
      padding: 10px;
      grid-template-columns: 1fr;
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
  