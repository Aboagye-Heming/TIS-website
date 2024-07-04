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
            <div v-if="link.subLinks" class="dropdown">
              <span
                class="nav-links dropdown-toggle"
                @click="toggleDropdown(link.text)"
                :class="{ active: isDropdownOpen(link.text) }"
                >{{ link.text }}</span
              >
              <ul
                v-if="isDropdownOpen(link.text)"
                class="dropdown-menu"
                :class="{ 'dropdown-menu active': isDropdownOpen(link.text) }"
              >
                <li
                  v-for="subLink in link.subLinks"
                  :key="subLink.to"
                  class="dropdown-item"
                >
                  <router-link
                    :to="subLink.to"
                    class="nav-links"
                    @click="closeMenu"
                    >{{ subLink.text }}</router-link
                  >
                </li>
              </ul>
            </div>
            <router-link
              v-else
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
const openDropdown = ref(null);

const navLinks = [
  { to: "/", text: "Home" },
  {
    to: "/about",
    text: "About",
    subLinks: [
      { to: "/about/our-history", text: "Our History" },
      { to: "/about-takoradi-international-school", text: "About TIS" },
      { to: "/about/principal's-message", text: "Principal's Message" },
      { to: "/about/departments", text: "Departments" },
      { to: "/about/gallery", text: "Gallery" },
    ],
  },
  { to: "/contact", text: "Contact" },
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function closeMenu() {
  isMenuOpen.value = false;
  openDropdown.value = null;
}

function toggleDropdown(linkText) {
  openDropdown.value = openDropdown.value === linkText ? null : linkText;
}

function isDropdownOpen(linkText) {
  return openDropdown.value === linkText;
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
  z-index: 1000;
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
  text-decoration: none;

}

.nav-links.active {
  color: #00ff2a;
  font-weight: bold;
  text-decoration: none;

}

@media screen and (max-width: 960px) {
  .menu-icon {
    display: block;
  }

  .nav-menu {
    display: flex;
    flex-direction: column;
    width: 35%;
    height: auto;
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

.dropdown {
  position: relative;
}

.dropdown-toggle::after {
  content: " ▼";
}

.dropdown-menu {
  display: none;
  position: absolute;
  background-color: #fff;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
  z-index: 1000;
  top: 100%;
  left: 0;
  width: 240px;
  padding: 12px 0;
  border-radius: 8px;
  flex-direction: column;
}

.dropdown-menu.active {
  display: flex;
}

.dropdown-item {
  padding: 12px 24px;
  text-decoration: none;

}

.dropdown-item .nav-links {
  color: #84dd84;
}

.dropdown-item .nav-links:hover {
  color: #40c055;
}
</style>
