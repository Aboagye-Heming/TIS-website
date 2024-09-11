<template>
    <section class="facilities-page">
      <div class="page-image-container">
        <img
          src="@/assets/images/sec_sports.jpg"
          alt="School Facilities"
          class="page-image"
        />
        <div class="image-overlay">
          <h1 class="page-title">Facilities</h1>
        </div>
      </div>
      <div class="container">
        <section class="facilities-content">
          <div class="content-wrapper">
            <div class="content-block facilities-block">
              <h2>Facilities</h2>
              <p>
                The School consists of two buildings located on the Ama Akroma Road in
                Takoradi. Apart from the school having spacious and well-equipped
                classrooms, there are specialized rooms including a science
                laboratory, a well-resourced library, a computer laboratory, an Art
                room situated beside a substantial sports and recreation field.
                Takoradi International School also has full access to a standard
                swimming pool located on the premises of a nearby three-star hotel.
                All classrooms are equipped with ceiling fans, air-conditioning units,
                projectors, and have adequate lighting.
              </p>
            </div>
  
            <div class="content-block supplies-block">
              <h2>Supplies</h2>
              <p>
                Textbooks covering all the subjects are given on loan to pupils. They
                are expected to take good care of them and return them at the end of
                the academic year. Stationery, mathematical sets, calculators and
                dictionaries are to be provided by individual pupils/students for
                their own use.
              </p>
            </div>
  
            <div class="content-block uniform-block">
              <h2>Uniform</h2>
              <p>
                The school provides a green and white uniform and supplies two
                uniforms per child every academic year. P.E uniforms are available on
                request but are supplied free to new entrants only.
              </p>
              <p>
                Our students and pupils are expected to present themselves in a neat
                and tidy fashion whilst engaging in school activities both on and off
                the school campus.
              </p>
            </div>
          </div>
        </section>
      </div>
    </section>
  </template>
  
  <script setup>
  import { onMounted } from "vue";

onMounted(() => {
  document.title = "Facilities | TIS ";
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
  
  .facilities-page {
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
  
  .facilities-content {
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
    border-radius: 8px;
    padding: 20px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    animation: fadeIn 1s ease-in-out;
  }
  
  .facilities-block {
    background-color: #e3f2fd;
  }
  
  .supplies-block {
    background-color: #e8f5e9;
  }
  
  .uniform-block {
    background-color: #fff3e0;
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
    .facilities-content {
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
  