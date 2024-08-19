<template>
  <section class="school-page">
    <div class="school-image-container">
      <img
        src="@/assets/images/staff.jpg"
        alt="School Building"
        class="school-image"
      />
      <div class="image-overlay">
        <h1 class="page-title">Educational Levels</h1>
      </div>
    </div>
    <div class="container">
      <section class="school-content">
        <div class="content-wrapper">
          <div class="content-block">
            <h2>Classification</h2>
            <p>The school consists of:</p>
            <ul>
              <li>Early Years Foundation Stage (Kindergarten 1 & 2)</li>
              <li>Lower Primary (Years 1 & 2)</li>
              <li>Upper Primary (Years 3, 4, 5 & 6)</li>
              <li>Lower Secondary (Years 7, 8 & 9)</li>
              <li>Upper Secondary (Years 10 & 11)</li>
            </ul>
            <p>
              Each division is supervised by dedicated coordinators who ensure
              their sections adhere to the school agenda.
            </p>
          </div>
          <div class="content-block">
            <h2>The Kindergarten and Lower Primary School</h2>
            <p>
              The goal of pre-school is to afford pupils a learning environment
              where they can learn through play to interact with peers, teachers
              and explore their environment. The early years foundation stage
              programme focuses on seven learning areas to develop a child
              holistically. These seven learning areas are further divided into
              three prime learning areas: Communication and Language; Personal,
              Social and Emotional Development (PSED); Physical Development and
              four specific areas of learning: Literacy, Mathematics,
              Understanding the world and expressive art and design, which
              ensures a solid foundational learning milestone of our pupils.
            </p>
            <p>
              At the end of Pre-school (Kindergarten 2), there is a transition
              to Key Stage One (Years 1 & 2), which is a two-year Cambridge
              Programme.
            </p>
          </div>

          <div class="content-block">
            <h2>Upper Primary School</h2>
            <p>
              Learners in Upper Primary (Year 3 to 6) start an exciting
              educational journey with a wide range of subjects. These include
              English Language, Mathematics, Science, Music, Art and Design,
              Global Perspectives and Physical Education in accordance with the
              Cambridge Primary Programme which provides a strong foundation for
              learners at the beginning of the schooling before progressing
              through the Cambridge Pathway in an age-appropriate way.
            </p>
            <p>
              By offering the Cambridge Primary programme, we provide a broad
              and balanced education for our learners, helping them to thrive
              throughout their schooling, work and life. Design and Technology,
              French, Computing, History and Geography are also included in the
              subject learners engage in, in accordance with the National
              Curriculum in England. At the end of primary school (Year 6),
              learners are assessed (tested) by Cambridge International. These
              external tests are marked by Cambridge International to give extra
              confidence in the feedback we receive and share with our parents.
            </p>
          </div>

          <div class="content-block">
            <h2>Secondary School</h2>
            <p>
              The Secondary School offers a five-year program leading to the
              IGCSE final examinations of Cambridge Assessment International
              Examinations (CAIE). The school is a fully registered partner
              school of the British Council, Ghana. Students are prepared to sit
              the Cambridge Checkpoint examinations in Year 9 (End of Key Stage
              3) in English, Mathematics and Science.
            </p>
            <p>
              Subjects in the Secondary Department are taught by specialist
              teachers who hold degrees in their specific subject in addition to
              a teaching qualification.
            </p>
            <p>
              The following academic subjects are taught as part of the IGCSE
              Examinations: English – First Language, Mathematics, Additional
              Mathematics, Physics, Biology, Chemistry, History, Geography,
              Business Studies, Food & Nutrition, Information and Communication
              Technology and French as an additional language.
            </p>
            <p>
              Art & Design, Music, Design & Technology, Physical Education and
              Swimming remain weekly fixtures on the timetable.
            </p>
          </div>
          <div class="content-block">
            <h2>School Schedule</h2>
            <p>
              The school opens at 7:45am and classes start at 8:00am for the
              Primary school. Secondary school pupils have tutor groups at
              7:55am, and lessons begin at 8:10am.
            </p>
            <div class="table-responsive">
              <table class="schedule-table">
                <thead>
                  <tr>
                    <th></th>
                    <th>From</th>
                    <th>To</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colspan="3"><strong>Kindergarten to Year 2</strong></td>
                  </tr>
                  <tr>
                    <td>Morning break</td>
                    <td>10:00</td>
                    <td>10:15</td>
                  </tr>
                  <tr>
                    <td>Lunch break</td>
                    <td>12:00</td>
                    <td>12:30</td>
                  </tr>
                  <tr>
                    <td>Home time</td>
                    <td>14:00</td>
                    <td>14:30</td>
                  </tr>
                  <tr>
                    <td colspan="3"><strong>Year 3 to Year 6</strong></td>
                  </tr>
                  <tr>
                    <td>Morning break</td>
                    <td>10:15</td>
                    <td>10:30</td>
                  </tr>
                  <tr>
                    <td>Lunch break</td>
                    <td>12:00</td>
                    <td>12:30</td>
                  </tr>
                  <tr>
                    <td>Home time</td>
                    <td>14:45</td>
                    <td></td>
                  </tr>
                  <tr>
                    <td colspan="3"><strong>Secondary School</strong></td>
                  </tr>
                  <tr>
                    <td>Morning break</td>
                    <td>09:50</td>
                    <td>10:10</td>
                  </tr>
                  <tr>
                    <td>Lunch break</td>
                    <td>11:50</td>
                    <td>12:30</td>
                  </tr>
                  <tr>
                    <td>Home time</td>
                    <td>15:00</td>
                    <td>15:40</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { onMounted } from "vue";

onMounted(() => {
  document.title = "Educational Levels | TIS ";
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

.school-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  background-color: #f3f4f6;
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

.school-content {
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

.content-block p,
.content-block ul {
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

.table-responsive {
  overflow-x: auto;
}

.schedule-table {
  width: 100%;
  border-collapse: collapse;
  margin: 20px 0;
}

.schedule-table th,
.schedule-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: center;
}

.schedule-table th {
  background-color: #f2f2f2;
  font-weight: bold;
}

.schedule-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .school-content {
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
