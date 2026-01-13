<template>
  <div class="navbar-wrapper">
    <nav class="navbar" :class="{ scrolled: isScrolled }">
      <div class="navbar-container">
        <!-- Logo Section -->
        <router-link to="/" class="nav-logo">
          <img
            src="../assets/icons/nlogo.bmp"
            alt="Takoradi International School Logo"
            class="logo"
          />
          <div class="logo-text">
            <span class="school-name">Takoradi International School</span>
            <!-- <span class="school-motto">Knowledge, Virtue, Service</span> -->
          </div>
        </router-link>

        <!-- Desktop Menu -->
        <ul class="nav-menu desktop-menu">
          <li
            class="nav-item"
            v-for="link in navLinks"
            :key="link.to"
            @mouseenter="handleMouseEnter(link.text)"
            @mouseleave="handleMouseLeave"
          >
            <!-- Dropdown Handling -->
            <div v-if="link.subLinks" class="dropdown-wrapper">
              <span
                class="nav-link dropdown-toggle"
                :class="{
                  active: isDropdownOpen(link.text) || isRouteActive(link),
                }"
              >
                {{ link.text }}
                <svg
                  class="chevron-down"
                  viewBox="0 0 24 24"
                  width="16"
                  height="16"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </span>

              <transition name="fade-slide">
                <ul v-if="activeDropdown === link.text" class="dropdown-menu">
                  <li
                    v-for="subLink in link.subLinks"
                    :key="subLink.to"
                    class="dropdown-item"
                  >
                    <router-link :to="subLink.to" class="dropdown-link">
                      {{ subLink.text }}
                    </router-link>
                  </li>
                </ul>
              </transition>
            </div>

            <!-- Regular Link -->
            <router-link
              v-else-if="!link.external"
              :to="link.to"
              class="nav-link"
              active-class="active"
            >
              {{ link.text }}
            </router-link>

            <!-- External Link -->
            <a
              v-else
              :href="link.to"
              class="nav-link external-link"
              target="_blank"
              rel="noopener noreferrer"
            >
              {{ link.text }}
              <svg
                class="external-icon"
                viewBox="0 0 24 24"
                width="14"
                height="14"
                stroke="currentColor"
                stroke-width="2"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path
                  d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"
                ></path>
                <polyline points="15 3 21 3 21 9"></polyline>
                <line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          </li>
        </ul>

        <!-- Mobile Menu Toggle -->
        <div
          class="menu-icon"
          @click="toggleMenu"
          :class="{ active: isMenuOpen }"
        >
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </div>
      </div>
    </nav>

    <!-- Mobile Drawer Overlay -->
    <transition name="fade">
      <div v-if="isMenuOpen" class="mobile-overlay" @click="closeMenu"></div>
    </transition>

    <!-- Mobile Drawer -->
    <transition name="slide-right">
      <div v-if="isMenuOpen" class="mobile-drawer">
        <div class="drawer-header">
          <span class="drawer-title">Menu</span>
          <button class="close-btn" @click="closeMenu">&times;</button>
        </div>
        <ul class="mobile-nav-list">
          <li v-for="link in navLinks" :key="link.to" class="mobile-nav-item">
            <div v-if="link.subLinks">
              <div
                class="mobile-dropdown-header"
                @click="toggleMobileSubmenu(link.text)"
                :class="{ open: mobileExpanded === link.text }"
              >
                {{ link.text }}
                <svg
                  class="chevron-down"
                  :class="{ rotate: mobileExpanded === link.text }"
                  viewBox="0 0 24 24"
                  width="20"
                  height="20"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
              <div class="mobile-submenu" v-show="mobileExpanded === link.text">
                <router-link
                  v-for="subLink in link.subLinks"
                  :key="subLink.to"
                  :to="subLink.to"
                  class="mobile-sublink"
                  @click="closeMenu"
                >
                  {{ subLink.text }}
                </router-link>
              </div>
            </div>
            <router-link
              v-else-if="!link.external"
              :to="link.to"
              class="mobile-link"
              active-class="active"
              @click="closeMenu"
            >
              {{ link.text }}
            </router-link>
            <a
              v-else
              :href="link.to"
              class="mobile-link"
              target="_blank"
              rel="noopener noreferrer"
              @click="closeMenu"
            >
              {{ link.text }}
            </a>
          </li>
        </ul>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, computed } from "vue";
import { useRoute } from "vue-router";

const route = useRoute();
const isMenuOpen = ref(false);
const activeDropdown = ref(null);
const mobileExpanded = ref(null);
const isScrolled = ref(false);

const navLinks = [
  { to: "/", text: "Home" },
  {
    to: "/about",
    text: "About",
    subLinks: [
      { to: "/about-takoradi-international-school", text: "About TIS" },
      { to: "/management", text: "Management Team" },
      { to: "/about-educational-levels", text: "Educational Levels" },
      { to: "/academic-programme", text: "Academic Programme" },
      { to: "/facilities", text: "Facilities" },
      {
        to: "/academic-calendar-and-events",
        text: "Academic Calendar & Events",
      },
      { to: "/news-and-updates", text: "News & Updates" },
    ],
  },
  { to: "https://smartskuls.com/", text: "Portal", external: true },
  { to: "/contact", text: "Contact" },
];

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
  if (!isMenuOpen.value) {
    mobileExpanded.value = null;
  }
}

function closeMenu() {
  isMenuOpen.value = false;
  mobileExpanded.value = null;
}

// Desktop Hover Logic
function handleMouseEnter(linkText) {
  if (window.innerWidth > 960) {
    activeDropdown.value = linkText;
  }
}

function handleMouseLeave() {
  if (window.innerWidth > 960) {
    activeDropdown.value = null;
  }
}

function isDropdownOpen(linkText) {
  return activeDropdown.value === linkText;
}

// Check if any sublink is active
function isRouteActive(link) {
  if (!link.subLinks) return false;
  return link.subLinks.some((sub) => route.path === sub.to);
}

// Mobile Accordion Logic
function toggleMobileSubmenu(text) {
  if (mobileExpanded.value === text) {
    mobileExpanded.value = null;
  } else {
    mobileExpanded.value = text;
  }
}

// Scroll Effect
function handleScroll() {
  isScrolled.value = window.scrollY > 50;
}

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap");

/* --- Variables --- */
:root {
  --primary-color: #098044;
  --secondary-color: #f0f4f2;
  --text-dark: #333;
  --text-light: #666;
  --white: #ffffff;
  --shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --header-height: 70px;
}

.navbar-wrapper {
  height: var(--header-height); /* Placeholder to prevent content jump */
}

.navbar {
  background-color: #fff;
  height: var(--header-height);
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  font-family: "Roboto", sans-serif;
  border-bottom: 1px solid transparent;
  transition: all 0.3s ease;
  backdrop-filter: blur(10px);
}

.navbar.scrolled {
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  border-bottom: 1px solid #eaeaea;
}

.navbar-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
}

/* --- Logo --- */
.nav-logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #333;
  gap: 12px;
}

.logo {
  width: 45px;
  height: auto;
  transition: transform 0.3s ease;
}

.nav-logo:hover .logo {
  transform: scale(1.05);
}

.logo-text {
  display: flex;
  flex-direction: column;
  line-height: 1.2;
}

.school-name {
  font-size: 18px;
  font-weight: 700;
  color: #098044;
  letter-spacing: -0.5px;
}

.school-motto {
  font-size: 12px;
  color: #666;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;
}

/* --- Desktop Menu --- */
.desktop-menu {
  display: flex;
  align-items: center;
  list-style: none;
  margin: 0;
  padding: 0;
  gap: 32px;
}

.nav-link {
  font-weight: 500;
  font-size: 16px;
  color: #4a5568;
  text-decoration: none;
  cursor: pointer;
  padding: 8px 0;
  position: relative;
  transition: color 0.2s ease;
  display: flex;
  align-items: center;
  gap: 4px;
}

.nav-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 2px;
  background-color: #098044;
  transition: width 0.3s ease;
}

.nav-link:hover,
.nav-link.active,
.nav-link:focus {
  color: #098044;
}

.nav-link:hover::after,
.nav-link.active::after {
  width: 100%;
}

.chevron-down {
  transition: transform 0.3s ease;
}

.nav-link.active .chevron-down {
  transform: rotate(180deg);
}

/* --- Desktop Dropdown --- */
.dropdown-wrapper {
  position: relative;
  height: 100%;
  display: flex;
  align-items: center;
}

.dropdown-menu {
  position: absolute;
  top: 100%; /* Just below the parent */
  left: 50%;
  transform: translateX(-50%);
  background-color: #fff;
  min-width: 260px;
  border-radius: 12px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  padding: 8px;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.05);
  margin-top: 15px; /* Offset from header */
}

/* Little triangle pointer */
.dropdown-menu::before {
  content: "";
  position: absolute;
  top: -6px;
  left: 50%;
  transform: translateX(-50%) rotate(45deg);
  width: 12px;
  height: 12px;
  background: #fff;
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-left: 1px solid rgba(0, 0, 0, 0.05);
}

.dropdown-item {
  margin: 4px 0;
}

.dropdown-link {
  display: block;
  padding: 10px 16px;
  color: #555;
  text-decoration: none;
  font-size: 15px;
  border-radius: 8px;
  transition: all 0.2s;
}

.dropdown-link:hover {
  background-color: #f0f9f4;
  color: #098044;
  padding-left: 20px; /* Slide effect */
}

/* --- Mobile Menu Toggle --- */
.menu-icon {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 28px;
  height: 20px;
  cursor: pointer;
  z-index: 1002; /* Above drawer */
}

.bar {
  width: 100%;
  height: 3px;
  background-color: #333;
  border-radius: 2px;
  transition: all 0.3s ease;
}

.menu-icon.active .bar:nth-child(1) {
  transform: translateY(8.5px) rotate(45deg);
  background-color: #098044;
}

.menu-icon.active .bar:nth-child(2) {
  opacity: 0;
}

.menu-icon.active .bar:nth-child(3) {
  transform: translateY(-8.5px) rotate(-45deg);
  background-color: #098044;
}

/* --- Mobile Drawer & Overlay --- */
.mobile-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1000;
  backdrop-filter: blur(2px);
}

.mobile-drawer {
  position: fixed;
  top: 0;
  right: 0;
  width: 300px;
  max-width: 85vw;
  height: 100vh;
  background: #fff;
  z-index: 1001;
  box-shadow: -5px 0 30px rgba(0, 0, 0, 0.15);
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow-y: auto;
}

.drawer-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 24px;
  border-bottom: 1px solid #eee;
}

.drawer-title {
  font-size: 20px;
  font-weight: 700;
  color: #098044;
}

.close-btn {
  background: none;
  border: none;
  font-size: 32px;
  color: #888;
  line-height: 1;
  cursor: pointer;
}

.mobile-nav-list {
  list-style: none;
  padding: 0;
  margin: 0;
}

.mobile-nav-item {
  border-bottom: 1px solid #f5f5f5;
}

.mobile-link,
.mobile-dropdown-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  font-size: 16px;
  color: #333;
  text-decoration: none;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s;
}

.mobile-link:hover,
.mobile-dropdown-header:hover {
  background-color: #f9f9f9;
}

.mobile-link.active {
  color: #098044;
  background-color: #f0f9f4;
  font-weight: 700;
}

.mobile-submenu {
  background-color: #fcfcfc;
  padding-bottom: 10px;
}

.mobile-sublink {
  display: block;
  padding: 12px 24px 12px 48px; /* Indent */
  font-size: 15px;
  color: #666;
  text-decoration: none;
  border-left: 3px solid transparent;
}

.mobile-sublink:hover,
.mobile-sublink.router-link-active {
  color: #098044;
  background-color: #f0f9f4;
  border-left-color: #098044;
}

.chevron-down.rotate {
  transform: rotate(180deg);
}

/* --- Media Queries --- */
@media screen and (max-width: 960px) {
  .desktop-menu {
    display: none;
  }

  .menu-icon {
    display: flex;
  }

  .school-motto {
    display: none; /* Simplify logo on mobile */
  }
}

/* --- Transitions --- */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-slide-enter-active,
.fade-slide-leave-active {
  transition: all 0.3s ease;
}

.fade-slide-enter-from,
.fade-slide-leave-to {
  opacity: 0;
  transform: translate(-50%, 10px);
}

.slide-right-enter-active,
.slide-right-leave-active {
  transition: transform 0.3s ease;
}

.slide-right-enter-from,
.slide-right-leave-to {
  transform: translateX(100%);
}
</style>
