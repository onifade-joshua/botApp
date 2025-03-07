<template>
    <div class="app-container">
      <!-- Navbar for Larger Screens -->
      <nav v-if="!isMobile" class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">ChatBot</a>
  
          <!-- Hamburger Button for Mobile -->
          <button class="navbar-toggler" type="button" @click="toggleMenu">
            <span class="navbar-toggler-icon"></span>
          </button>
  
          <!-- Navbar Links -->
          <div class="collapse navbar-collapse" :class="{ 'show': isMenuOpen }">
            <ul class="navbar-nav ml-auto">
              <li class="nav-item">
                <a class="nav-link" href="#" @click.prevent="changeView('Adverts')">Adverts</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click.prevent="changeView('ChatBot')">ChatBot</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#" @click.prevent="changeView('AboutUs')">About Us</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  
      <!-- Dynamic Component Display -->
      <div class="content">
        <component :is="currentView"></component>
      </div>
  
      <!-- Bottom Tab Navigation for Mobile -->
      <div v-if="isMobile" class="bottom-nav">
        <button @click="changeView('Adverts')" :class="{ active: currentView === 'Adverts' }">
          <span class="icon">🏠</span>
          <span>Home</span>
        </button>
        <button @click="changeView('ChatBot')" :class="{ active: currentView === 'ChatBot' }">
          <span class="icon">💬</span>
          <span>ChatBot</span>
        </button>
        <button @click="changeView('AboutUs')" :class="{ active: currentView === 'AboutUs' }">
          <span class="icon">ℹ️</span>
          <span>About Us</span>
        </button>
      </div>
    </div>
  </template>
  
  <script>
  import Adverts from "./components/Adverts.vue";
  import ChatBot from "./components/ChatBot.vue";
  import AboutUs from "./components/AboutUs.vue";
  
  export default {
    components: { Adverts, ChatBot, AboutUs },
    data() {
      return {
        currentView: "Adverts", 
        isMenuOpen: false,
        isMobile: window.innerWidth <= 768, 
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      changeView(view) {
        this.currentView = view;
        this.isMenuOpen = false; 
      },
      handleResize() {
        this.isMobile = window.innerWidth <= 768; 
      },
    },
    mounted() {
      window.addEventListener("resize", this.handleResize);
    },
    beforeUnmount() {
      window.removeEventListener("resize", this.handleResize);
    },
  };
  </script>
  
  <style scoped>
  .app-container {
    display: flex;
    flex-direction: column;
    height: 100vh;
    background-color: #f0f0f0; 
    color: #333; 
  }
  .content {
    flex: 1;
    overflow-y: auto;
    padding: 20px;
  }
  
  .bottom-nav {
    display: flex;
    justify-content: space-around;
    background: #222;
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    padding: 15px 0;
    border-top: 2px solid #444;
    margin-top: 15px;
  }
  .bottom-nav button {
    flex: 1;
    border: none;
    background: none;
    color: white;
    font-size: 14px;
    text-align: center;
    padding: 10px 0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    transition: color 0.3s;
  }
  
  .bottom-nav button .icon {
    font-size: 20px;
  }
  
  .bottom-nav button.active {
    color: #00d1b2;
    font-weight: bold;
  }
  .navbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
  }
  @media (min-width: 769px) {
    .content {
      padding-top: 80px; 
    }
  }
  
  </style>
