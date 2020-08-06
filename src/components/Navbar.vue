<template>
  <div id="app">
    <Slide right>
      <a id="home" href="home.html">
        <span>HOME</span>
      </a>

      <a id="about" href="about.html">
        <span>ABOUT</span>
      </a>    

      <a id="projects" href="projects.html">
        <span>PROJECTS</span>
      </a>      
      
      <a id="contact" href="contact.html">
        <span>CONTACT</span>
      </a>     
    </Slide>

  </div>
</template>

<script>
import { Slide } from 'vue-burger-menu'

export default {
  name: 'App',
  components: {
    Slide
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.bm-burger-button {
      position: fixed;
      width: 15px;
      height: 13px;
      left: 25px;
      top: 35px;
      cursor: pointer;
    }
    .bm-burger-bars {
      background-color: #373a47;
    }
    .line-style {
      position: absolute;
      height: 15%;
      left: 0;
      right: 0;
    }
    .cross-style {
      position: absolute;
      top: 12px;
      right: 2px;
      cursor: pointer;
    }
    .bm-cross {
      background: #bdc3c7;
    }
    .bm-cross-button {
      height: 24px;
      width: 24px;
    }
    .bm-menu {
      height: 100%; /* 100% Full-height */
      width: 0; /* 0 width - change this with JavaScript */
      position: fixed; /* Stay in place */
      z-index: 1000; /* Stay on top */
      top: 0;
      left: 0;
      background-color: rgb(63, 63, 65); /* Black*/
      overflow-x: hidden; /* Disable horizontal scroll */
      padding-top: 60px; /* Place content 60px from the top */
      transition: 0.5s; /*0.5 second transition effect to slide in the sidenav*/
    }
 
    .bm-overlay {
      background: rgba(0, 0, 0, 0.3);
    }
    .bm-item-list {
      color: #b8b7ad;
      direction: rtl;
      font-size: 20px;
      padding-top: 2em;
    }
    .bm-item-list > * {
      display: flex;
      text-decoration: none;
      padding: 0.7em;
    }
    .bm-item-list > * > span {
      font-weight: 100;
      font-size: 15px;
      color: white;
    }
  
</style>
