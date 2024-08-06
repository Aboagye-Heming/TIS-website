<template>
    <section class="calendar-page">
      <div class="page-image-container">
        <img
          src="@/assets/images/kg_learning.jpg"
          alt="Academic Calendar"
          class="page-image"
        />
        <div class="image-overlay">
          <h1 class="page-title">Academic Calendar and Events</h1>
        </div>
      </div>
      <div class="container">
        <section class="calendar-content">
          <div class="content-wrapper">
            <div class="content-block calendar-block">
              <h2>Academic Calendar</h2>
              <p>
                Our academic calendar outlines key dates and events for the school year. Stay informed about important dates such as term start and end dates, holidays, exam schedules, and more.
              </p>
              <div class="calendar-item">
                <h3>Term Dates</h3>
                <ul>
                  <li><strong>Term 1:</strong> 4th September - 15th December</li>
                  <li><strong>Term 2:</strong> 8th January - 28th March</li>
                  <li><strong>Term 3:</strong> 15th April - 19th July</li>
                </ul>
              </div>
              <div class="calendar-item">
                <h3>Holidays</h3>
                <ul>
                  <li><strong>Christmas Break:</strong> 18th December - 5th January</li>
                  <li><strong>Easter Break:</strong> 1st April - 12th April</li>
                  <li><strong>Summer Break:</strong> 22nd July - 2nd September</li>
                </ul>
              </div>
            </div>
  
            <div class="content-block events-block">
              <h2>School Events</h2>
              <p>
                Throughout the year, we host a variety of events that enrich our students' educational experience. From sports days to cultural festivals, there's always something happening at Takoradi International School.
              </p>
              <div class="event-item">
                <h3>Science Fair</h3>
                <p>
                  Our annual Science Fair showcases the incredible projects and experiments conducted by our students. Join us on the 25th of March to celebrate their hard work and creativity.
                </p>
              </div>
              <div class="event-item">
                <h3>Sports Day</h3>
                <p>
                  Sports Day is a highlight of our school year, promoting teamwork and physical fitness. This year's event will be held on the 10th of June, featuring a variety of track and field events.
                </p>
              </div>
              <div class="event-item">
                <h3>Culture Day</h3>
                <p>
                  Celebrate the rich diversity of our school community at Culture Day on the 20th of November. Students will showcase their heritage through music, dance, food, and traditional attire.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  </template>
  
  <script setup>
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
  
  .calendar-page {
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
  
  .calendar-content {
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
  
  .calendar-block {
    background-color: #fff3e0;
  }
  
  .events-block {
    background-color: #e0f7fa;
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
  
  .calendar-item, .event-item {
    background-color: white;
    padding: 15px;
    margin-top: 15px;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .calendar-item h3, .event-item h3 {
    font-size: 20px;
    margin-bottom: 5px;
    color: #2c3e50;
  }
  
  @media (max-width: 768px) {
    .calendar-content {
      padding: 20px 10px;
    }
    .content-wrapper {
      padding: 10px;
      grid-template-columns: 1fr;
    }
  }
  </style>
  