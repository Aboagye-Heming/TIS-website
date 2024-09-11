<template>
  <section class="calendar-page">
    <div class="page-image-container">
      <img
        src="@/assets/images/kg_learning.jpg"
        alt="Academic Calendar"
        class="page-image"
      />
      <div class="image-overlay">
        <h1 class="page-title">Academic Calendar & Events</h1>
      </div>
    </div>
    <div class="container">
      <section class="calendar-content">
        <div class="content-wrapper">
          <div class="content-block calendar-block">
            <h2>Academic Calendar for 2024-2025</h2>
            <p>
              Our academic calendar outlines key dates and events for the upcoming school year. Below are the important dates to take note of:
            </p>

            <!-- Term 1 -->
            <h3>Term 1</h3>
            <ul>
              <li>Re-Opening: September 2, 2024 (Monday)</li>
              <li>Vacating: December 13, 2024 (Friday)</li>
              <li>Half-Term Break: Monday, 21st October to Friday, 25th October</li>
            </ul>

            <!-- Term 2 -->
            <h3>Term 2</h3>
            <ul>
              <li>Re-Opening: January 6, 2025 (Monday)</li>
              <li>Vacating: March 28, 2025 (Friday)</li>
              <li>Half-Term Break: Thursday, 20th February to Monday, 24th February</li>
            </ul>

            <!-- Term 3 -->
            <h3>Term 3</h3>
            <ul>
              <li>Re-Opening: April 14, 2025 (Monday)</li>
              <li>Vacating: June 27, 2025 (Friday)</li>
              <li>Last Day for KG & Primary: Tuesday, 24th June 2025</li>
              <li>Last Day for Secondary: Wednesday, 25th June 2025</li>
              <li>Last Day for Teaching Staff: Friday, 27th June 2025</li>
            </ul>

            <!-- Dropdown for September Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('september')">
                September 2024 Events
              </button>
              <ul v-if="isDropdownOpen.september" class="dropdown-menu">
                <li v-for="event in eventsByMonth.september" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> - <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for October Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('october')">
                October 2024 Events
              </button>
              <ul v-if="isDropdownOpen.october" class="dropdown-menu">
                <li v-for="event in eventsByMonth.october" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> - <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for November Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('november')">
                November 2024 Events
              </button>
              <ul v-if="isDropdownOpen.november" class="dropdown-menu">
                <li v-for="event in eventsByMonth.november" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> - <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for December Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('december')">
                December 2024 Events
              </button>
              <ul v-if="isDropdownOpen.december" class="dropdown-menu">
                <li v-for="event in eventsByMonth.december" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> - <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for January Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('january')">
                January 2025 Events
              </button>
              <ul v-if="isDropdownOpen.january" class="dropdown-menu">
                <li v-for="event in eventsByMonth.january" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> - <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for February Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('february')">
                February 2025 Events
              </button>
              <ul v-if="isDropdownOpen.february" class="dropdown-menu">
                <li v-for="event in eventsByMonth.february" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> - <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for March Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('march')">
                March 2025 Events
              </button>
              <ul v-if="isDropdownOpen.march" class="dropdown-menu">
                <li v-for="event in eventsByMonth.march" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> - <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for April Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('april')">
                April 2025 Events
              </button>
              <ul v-if="isDropdownOpen.april" class="dropdown-menu">
                <li v-for="event in eventsByMonth.april" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> - <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for May Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('may')">
                May 2025 Events
              </button>
              <ul v-if="isDropdownOpen.may" class="dropdown-menu">
                <li v-for="event in eventsByMonth.may" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> - <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for June Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('june')">
                June 2025 Events
              </button>
              <ul v-if="isDropdownOpen.june" class="dropdown-menu">
                <li v-for="event in eventsByMonth.june" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> - <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from "vue";

// State to control dropdown visibility for each month
const isDropdownOpen = ref({
  september: true,
  october: false,
  november: false,
  december: false,
  january: false,
  february: false,
  march: false,
  april: false,
  may: false,
  june: false,
});

// Event data categorized by month
const eventsByMonth = ref({
  september: [
    { date: "Friday, 20th September", event: "Open House for Kindergarten and Primary School Parents/Guardians (Meet & Greet)" },
    { date: "Monday, 23rd September", event: "Kwame Nkrumah Memorial Day (Public Holiday) - School Closed" },
  ],
  october: [
    { date: "Friday, 4th October", event: "Commemoration of School’s 26th Anniversary / ‘World Smile Day’ (Free Dress Day)" },
    { date: "Monday, 7th October to Friday, 11th October", event: "Health & Safety Week – Social and Emotional Well-being" },
    { date: "Thursday, 10th October", event: "Parents’ Evening (Kindergarten & Primary School)" },
    { date: "Thursday, 17th October", event: "Parents’ Evening (Secondary School)" },
    { date: "Monday, 21st October", event: "Staff CPD (No School)" },
    { date: "Monday, 21st October to Friday, 25th October", event: "Half-term Break (School Closed)" },
  ],
  november: [
    { date: "Friday, 1st November", event: "End of First Term Exams Begin (Secondary School)" },
    { date: "Friday, 29th November", event: "Parents’ Day for Kindergarten and Primary Schools" },
  ],
  december: [
    { date: "Friday, 6th December", event: "Christmas Concert for Secondary School" },
    { date: "Wednesday, 11th December", event: "Christmas Concert for Kindergarten and Primary Schools" },
    { date: "Friday, 13th December", event: "End of Term 1 – Vacating Day" },
  ],
  january: [
    { date: "Monday, 6th January", event: "School Re-opens – Term 2 Begins" },
  ],
  february: [
    { date: "Thursday, 20th February", event: "Half-Term Break Begins" },
    { date: "Monday, 24th February", event: "Half-Term Break Ends" },
  ],
  march: [
    { date: "Friday, 28th March", event: "End of Term 2 – Vacating Day" },
  ],
  april: [
    { date: "Monday, 14th April", event: "School Re-opens – Term 3 Begins" },
  ],
  may: [
    { date: "Friday, 1st May", event: "Labour Day (Public Holiday) – School Closed" },
  ],
  june: [
    { date: "Friday, 27th June", event: "End of Term 3 – Vacating Day" },
  ],
});

function toggleDropdown(month) {
  isDropdownOpen.value[month] = !isDropdownOpen.value[month];
}

onMounted(() => {
  document.title = "Academic Calendar & Events | TIS";
});
</script>

<style scoped>
/* Same styling as before */
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
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
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
}

.content-block {
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  animation: fadeIn 1s ease-in-out;
}

.calendar-block {
  background-color: #fdf0d5;
}

.dropdown {
  margin-top: 20px;
}

.dropdown-toggle {
  background-color: #098044;
  color: white;
  padding: 12px 24px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.dropdown-toggle:hover {
  background-color: #086a3d;
}

.dropdown-menu {
  list-style-type: none;
  margin: 10px 0;
  padding: 0;
}

.dropdown-menu li {
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
}

.event-date {
  font-weight: bold;
}

.event-name {
  font-style: italic;
}
</style>
