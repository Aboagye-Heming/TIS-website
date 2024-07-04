<template>

  <HeaderTitle title="Departments" />
  <section class="departments-page">
    <div class="container">
      <section class="departments-content">
        <nav class="departments-nav">
          <ul>
            <li
              v-for="(department, index) in departments"
              :key="index"
              @click="toggleDepartment(index)"
              :class="{ active: activeDepartment === index }"
            >
              <div class="department-header">
                {{ department.name }}
                <span class="toggle-icon">
                  {{ activeDepartment === index ? "-" : "+" }}
                </span>
              </div>
              <transition name="expand">
                <div
                  v-if="activeDepartment === index"
                  class="department-content"
                >
                  <ul>
                    <li v-for="item in department.items" :key="item">
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </transition>
            </li>
          </ul>
        </nav>
      </section>
    </div>
  </section>
</template>

<script setup>
import HeaderTitle from "@/components/HeaderTitle.vue";

import { ref } from "vue";

const departments = [
  {
    name: "Administration",
    items: [
      "Principal’s Office",
      "Sectional Vice Principal’s Offices",
      "Human Resources & Administration",
      "Security and Safety Assurance",
      "Finance",
      "Facilities",
      "IT Systems",
      "Guidance & Counseling",
      "Health and Wellness",
    ],
  },
  {
    name: "Infants School",
    items: ["Art", "ICT", "Music", "Physical Education and Sports"],
  },
  {
    name: "Junior School",
    items: [
      "Art",
      "ESL",
      "ICT",
      "Library",
      "Music",
      "Physical Education and Sports",
      "Science",
    ],
  },
  {
    name: "Secondary School",
    items: [
      "Art",
      "Biology",
      "Chemistry",
      "Physics",
      "English",
      "French",
      "ICT",
      "Library",
      "Mathematics",
      "Social Studies (History and Geography)",
      "Music",
      "Physical Education and Sports",
    ],
  },
];

const activeDepartment = ref(0);

function toggleDepartment(index) {
  activeDepartment.value = activeDepartment.value === index ? null : index;
}
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

.departments-page {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
  margin-top: 50px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 24px;
}

.departments-header {
  background-color: #84dd84;
  color: black;
  padding: 20px;
  text-align: center;
  width: 100%;
  border-bottom: 2px solid #2c3e50;
}

.departments-content {
  flex: 1;
  padding: 40px 0;
  background-color: white;
}

.departments-nav {
  flex: 1;
  padding-right: 20px;
  overflow-y: auto; /* Allow scrolling if the content is too long */
}

.departments-nav ul {
  list-style-type: none;
  padding: 0;
}

.departments-nav ul li {
  padding: 10px;
  cursor: pointer;
  background-color: #e0e0e0;
  margin-bottom: 5px;
  border-radius: 4px;
  transition: background-color 0.3s ease-in-out;
}

.departments-nav ul li:hover,
.departments-nav ul li.active {
  background-color: #84dd84;
  color: white;
}

.department-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.toggle-icon {
  font-size: 1.2em;
  margin-left: 10px;
}

.department-content {
  padding: 20px;
  background-color: #f1f1f1;
  border: 1px solid #ddd;
  margin-top: 10px;
  animation: fadeIn 1s ease-in-out;
}

.department-content ul {
  list-style-type: none;
  padding: 0;
  color: #333;
  max-width: 400px;
  text-align: left;
}

.department-content ul li {
  margin-bottom: 5px;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.expand-enter-active,
.expand-leave-active {
  transition: max-height 0.5s ease-in-out, opacity 0.5s ease-in-out;
}
.expand-enter,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
}

@media (max-width: 768px) {
  .departments-content {
    flex-direction: column;
  }
  .departments-nav {
    padding-right: 0;
    margin-bottom: 20px;
  }
}
</style>
