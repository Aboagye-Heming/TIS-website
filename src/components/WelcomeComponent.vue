<template>
  <section class="welcome-section">
    <div class="container">
      <div class="row">
        <!-- Image Section -->
        <div class="col-sm-4 welcome-image-container">
          <img
            src="@/assets/images/exams3.jpeg"
            alt="School Image"
            class="welcome-image"
          />
        </div>
        <!-- Welcome Section -->
        <div class="col-sm-8 welcome-content-container">
          <div class="welcome-headline">
            <h3>Welcome to Takoradi International School</h3>
          </div>
          <div class="welcome-content">
            <p class="welcome-intro">
              We warmly welcome you to Takoradi International School where,
              following the Cambridge international and English National
              curricula, we aim to provide a high level of education, at an
              international standard, to children of all ethnic, cultural,
              national and religious backgrounds; ushering them into higher
              educational institutions the world over.
            </p>
            <p>
              From humble beginnings as the Takoradi Learning Centre in 1998,
              the school has grown and carved a niche for itself as an example
              of successful international education in the Western Region of
              Ghana. Now known as the Takoradi International School, we provide
              for pupils from Kindergarten to Year 6 and students from Year 7 to
              Year 11.
            </p>
          </div>
          <!-- <router-link to="/gallery" class="btn btn-primary">View Gallery</router-link> -->
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-family: "Arial", sans-serif; /* Consistent font family */
}

/* Welcome Section Styles */
.welcome-section {
  background-color: #f8f8f8;
  padding: 40px 0;
  border-top: 1px solid #e7e7e7;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.row {
  display: flex;
  flex-wrap: wrap;
}

.col-sm-4 {
  flex: 1 1 100%;
  max-width: 100%;
  margin-bottom: 20px;
}

.welcome-image-container {
  text-align: center;
  margin-bottom: 20px;
}

.welcome-image {
  width: 100%;
  max-width: 300px; /* adjust as needed */
  height: auto;
  border-radius: 8px;
  transition: transform 0.3s ease-in-out;
}

.welcome-image:hover {
  transform: scale(1.05);
}

.welcome-headline {
  margin-bottom: 20px;
  color: #098044;
}

.welcome-headline h3 {
  font-weight: bold;
  font-size: 32px;
  margin: 0;
}

.welcome-content {
  font-size: 18px; /* Increased for readability */
  color: #333; /* Darker grey for better contrast */
  line-height: 1.6; /* Improved line spacing */
}

.welcome-content p {
  margin: 0 0 15px;
}

.welcome-content a {
  color: #007bff;
  text-decoration: none;
}

.welcome-content a:hover {
  text-decoration: underline;
}

/* Tablet and Above */
@media (min-width: 768px) {
  .col-sm-4 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }

  .col-sm-8 {
    flex: 0 0 66.6666%;
    max-width: 66.6666%;
  }
}

/* Mobile-friendly Styles */
@media (max-width: 767px) {
  .welcome-section {
    padding: 20px 0;
  }

  .welcome-headline h3 {
    font-size: 24px; /* Reduced font size for smaller screens */
  }

  .welcome-content {
    font-size: 16px; /* Reduced font size for smaller screens */
    line-height: 1.5; /* Adjust line-height for smaller text */
  }

  .welcome-content p {
    margin-bottom: 10px; /* Reduced margin for tighter spacing */
  }

  .welcome-image {
    max-width: 100%; /* Make image responsive */
  }
}

@media (max-width: 480px) {
  .welcome-headline h3 {
    font-size: 20px; /* Even smaller font size for very small screens */
  }

  .welcome-content {
    font-size: 14px; /* Reduced text size for very small screens */
  }

  .welcome-content p {
    margin-bottom: 8px; /* Tighter margin for very small screens */
  }
}
</style>
