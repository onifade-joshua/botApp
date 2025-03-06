<template>
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <a class="navbar-brand" href="#">ChatBot</a>
          
          <!-- Hamburger Button for Mobile -->
          <button 
            class="navbar-toggler" 
            type="button" 
            @click="toggleMenu"
          >
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
  
      <!-- Dynamic Component -->
      <div class="container mt-3">
        <component :is="currentView"></component>
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
      };
    },
    methods: {
      toggleMenu() {
        this.isMenuOpen = !this.isMenuOpen;
      },
      changeView(view) {
        this.currentView = view;
        this.isMenuOpen = false; 
      }
    }
  };
  </script>
  
  <style>
  .navbar-collapse {
    transition: height 0.3s ease-in-out;
  }
  </style>
  