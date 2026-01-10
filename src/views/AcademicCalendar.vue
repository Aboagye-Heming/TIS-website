<template>
  <section class="calendar-page">
    <div class="page-image-container">
      <img
        src="@/assets/images/learning.jpg"
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
            <h2>Academic Calendar – Term 2 (2026)</h2>
            <p>
              Our academic calendar outlines key dates and events for the
              upcoming school year. Below are the important dates to take note
              of:
            </p>

            <!-- Dropdown for September Events -->

            <!-- Dropdown for January Events -->
            <div class="dropdown">
              <button
                class="dropdown-toggle"
                @click="toggleDropdown('january')"
              >
                January 2026 Events
              </button>
              <ul v-if="isDropdownOpen.january" class="dropdown-menu">
                <li v-for="event in eventsByMonth.january" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> -
                  <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for February Events -->
            <div class="dropdown">
              <button
                class="dropdown-toggle"
                @click="toggleDropdown('february')"
              >
                February 2026 Events
              </button>
              <ul v-if="isDropdownOpen.february" class="dropdown-menu">
                <li v-for="event in eventsByMonth.february" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> -
                  <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for March Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('march')">
                March 2026 Events
              </button>
              <ul v-if="isDropdownOpen.march" class="dropdown-menu">
                <li v-for="event in eventsByMonth.march" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> -
                  <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for April Events -->
            <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('april')">
                April 2026 Events
              </button>
              <ul v-if="isDropdownOpen.april" class="dropdown-menu">
                <li v-for="event in eventsByMonth.april" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> -
                  <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div>

            <!-- Dropdown for May Events -->
            <!-- <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('may')">
                May 2026 Events
              </button>
              <ul v-if="isDropdownOpen.may" class="dropdown-menu">
                <li v-for="event in eventsByMonth.may" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> -
                  <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div> -->

            <!-- Dropdown for June Events -->
            <!-- <div class="dropdown">
              <button class="dropdown-toggle" @click="toggleDropdown('june')">
                June 2026 Events
              </button>
              <ul v-if="isDropdownOpen.june" class="dropdown-menu">
                <li v-for="event in eventsByMonth.june" :key="event.date">
                  <span class="event-date">{{ event.date }}</span> -
                  <span class="event-name">{{ event.event }}</span>
                </li>
              </ul>
            </div> -->
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
  september: false,
  october: false,
  november: false,
  december: false,
  january: true,
  february: false,
  march: false,
  april: false,
  may: false,
  june: false,
});

// Event data categorized by month
const eventsByMonth = ref({
  january: [
    {
      date: "Friday, 2nd January",
      event: "IGCSE Year 11 Mock 1 Written Examinations Begin",
    },
    { date: "Friday, 16th January", event: "Parent / Teacher Consultations" },
    { date: "Friday, 30th January", event: "Free Dress Day" },
  ],

  february: [
    {
      date: "Monday, 2nd – Sunday, 8th February",
      event: "Storytelling Week (Theme: Soundtrack Your Story)",
    },
    {
      date: "Thursday, 5th February",
      event: "Primary School Parents & Guardians’ Evening",
    },
    {
      date: "Monday, 9th February",
      event: "Cambridge Checkpoint (Years 6 & 9) – Mock 1 Exams Begin",
    },
    {
      date: "Tuesday, 10th February",
      event:
        "Safer Internet Day (Theme: Smart Tech, Safe Choices – Responsible Use of AI)",
    },
    {
      date: "Thursday, 12th February",
      event: "Secondary School Parents & Guardians’ Evening",
    },
    { date: "Friday, 13th – Wednesday, 18th February", event: "Sports’ Week" },
    { date: "Thursday, 19th February", event: "Staff CPD (No School)" },
    {
      date: "Thursday, 19th – Monday, 23rd February",
      event: "Half-Term Break (School Closed)",
    },
    { date: "Friday, 27th February", event: "Free Dress Day" },
  ],

  march: [
    {
      date: "Monday, 2nd March",
      event: "IGCSE Year 11 Mock 2 Written Examinations Begin",
    },
    {
      date: "Thursday, 5th March",
      event: "World Book Day (Theme: Reading for Pleasure)",
    },
    {
      date: "Friday, 6th March",
      event: "Independence Day (Public Holiday – School Closed)",
    },
    {
      date: "Monday, 9th March",
      event: "Cambridge Checkpoint (Years 6 & 9) – Mock 2 Exams Begin",
    },
    { date: "Wednesday, 18th March", event: "World Poetry Day Launch" },
    { date: "Saturday, 21st March", event: "World Poetry Day Celebration" },
    { date: "Wednesday, 25th March", event: "Open Day" },
    {
      date: "Friday, 27th March",
      event: "International Day (Free Dress Day) – End of Term",
    },
  ],

  april: [{ date: "Monday, 13th April", event: "School Reopens for Term 3" }],
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
