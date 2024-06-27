<template>
  <div>
    <nav class="navbar">
      <div class="navbar-container">
        <router-link to="/" class="nav-logo">TIS</router-link>
        <div
          class="menu-icon"
          :class="{ active: isMenuOpen }"
          @click="toggleMenu"
        >
          <div class="bar"></div>
          <div class="bar"></div>
          <div class="bar"></div>
        </div>
        <ul :class="{ 'nav-menu active': isMenuOpen, 'nav-menu': !isMenuOpen }">
          <li class="nav-item" v-for="link in navLinks" :key="link.to">
            <router-link
              :to="link.to"
              class="nav-links"
              @click="closeMenu"
              :class="{ active: $route.path === link.to }"
              >{{ link.text }}</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";

const isMenuOpen = ref(false);

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About" },
  // { to: "/skills", text: "Skills" },
  // { to: "/projects", text: "Projects" },
  { to: "/contact", text: "Contact" },
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
}

function handleClickOutside(event) {
  if (isMenuOpen.value && !event.target.closest(".navbar-container")) {
    closeMenu();
  }
}

onMounted(() => {
  window.addEventListener("click", handleClickOutside);
});

onUnmounted(() => {
  window.removeEventListener("click", handleClickOutside);
});
</script>

<style scoped>
.navbar {
  background-color: #fff;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
}

.nav-logo {
  color: #84dd84;
  font-size: 24px;
  text-decoration: none;
  cursor: pointer;
}

.menu-icon {
  display: none;
  cursor: pointer;
  width: 30px;
  height: 20px;
  position: relative;
}

.bar {
  width: 100%;
  height: 2px;
  background-color: #84dd84;
  position: absolute;
  transition: transform 0.5s ease, opacity 0.5s ease;
}

.bar:nth-child(1) {
  top: 0;
}

.bar:nth-child(2) {
  top: 8px;
}

.bar:nth-child(3) {
  top: 16px;
}

.menu-icon.active .bar:nth-child(1) {
  transform: translateY(8px) rotate(45deg);
}

.menu-icon.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-icon.active .bar:nth-child(3) {
  transform: translateY(-8px) rotate(-45deg);
}

.nav-menu {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav-item {
  margin-right: 24px;
}

.nav-links {
  color: #84dd84;
  text-decoration: none;
  cursor: pointer;
  transition: color 0.3s ease;
}

.nav-links:hover {
  color: #40c055;
}
.nav-links.active {
  color: #00ff2a;
  font-weight: bold;
}

@media screen and (max-width: 960px) {
  .menu-icon {
    display: block;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 35%;
    height: 180px;
    position: absolute;
    top: 50px;
    left: -100%;
    opacity: 0;
    transition: all 0.5s ease;
    background-color: #fff;
    padding: 24px;
  }

  .nav-menu.active {
    left: 0;
    opacity: 1;
    z-index: 1;
  }

  .nav-item {
    width: 100%;
    margin-bottom: 40px;


  }

  .nav-links {
    text-align: center;
    padding: 16px;
    width: 100%;
  }
  
}
</style>
