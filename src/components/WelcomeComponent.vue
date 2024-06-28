<template>
  <section class="welcome-section">
    <div class="container">
      <div class="row">
        <!-- Image Section -->
        <div class="col-sm-4 welcome-image-container">
          <img
            src="../assets/images/kg_arts.jpg"
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
        </div>
      </div>
      <!-- Recent Events Section -->
      <div class="recent-events">
        <div class="recent-events-headline">
          <h3>Gallery</h3>
        </div>
        <div class="recent-events-gallery">
          <div class="recent-event">
            <img
              src="../assets/images/kg_graduation.jpg"
              alt="Kindergarten Graduation"
              class="event-image"
            />
            <p class="event-subtitle">Kindergarten Graduation</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/santakids.jpg"
              alt="Kids with Santa"
              class="event-image"
            />
            <p class="event-subtitle">Santa day</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/sec_sports.jpg"
              alt="Secondary School Sports Event"
              class="event-image"
            />
            <p class="event-subtitle">Secondary School Sports Event</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/kg_kids_drone_shot.jpg"
              alt="Kindergarten Kids Drone Shot"
              class="event-image"
            />
            <p class="event-subtitle">Kindergarten Kids Drone Shot</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/fistpumps.jpg"
              alt="Fist Pumps Celebration"
              class="event-image"
            />
            <p class="event-subtitle">Fist Pumps Celebration</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/20240216_150432.jpg"
              alt="Outdoor Classroom Activity"
              class="event-image"
            />
            <p class="event-subtitle">Outdoor Activities</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/kg_learning.jpg"
              alt="Kindergarten Learning"
              class="event-image"
            />
            <p class="event-subtitle">Kindergarten Learning</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/audience.jpg"
              alt="School Event Audience"
              class="event-image"
            />
            <p class="event-subtitle">Students enjoying tiktok show</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/excursion_with_teacher.jpg"
              alt="Excursion with Teacher"
              class="event-image"
            />
            <p class="event-subtitle">Excursion with Teacher</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/grade_6_girls_graduation.jpg"
              alt="Grade 6 Girls Graduation"
              class="event-image"
            />
            <p class="event-subtitle">2024 Grade 6 Graduation (Ladies)</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/grade_6_graduation.jpg"
              alt="Grade 6 Graduation"
              class="event-image"
            />
            <p class="event-subtitle">2024 Grade 6 Graduation with class teachers</p>
          </div>
          <div class="recent-event">
            <img
              src="../assets/images/grade_6_boys_graduation.jpg"
              alt="Grade 6 Boys Graduation"
              class="event-image"
            />
            <p class="event-subtitle">2024 Grade 6 Graduation (Gentlemen)</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped>
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

@media (min-width: 576px) {
  .col-sm-4 {
    flex: 0 0 33.3333%;
    max-width: 33.3333%;
  }

  .col-sm-8 {
    flex: 0 0 66.6666%;
    max-width: 66.6666%;
  }
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
  color: green;
}

.welcome-headline h3 {
  font-size: 24px;
  font-weight: bold;
  margin: 0;
}

.welcome-content {
  font-size: 16px;
  color: #666;
}

.welcome-content p {
  margin: 0 0 10px;
}

.welcome-content a {
  color: #007bff;
  text-decoration: none;
}

.welcome-content a:hover {
  text-decoration: underline;
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
