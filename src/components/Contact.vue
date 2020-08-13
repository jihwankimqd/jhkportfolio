<template>
  <div id="app">
    <!-- <div class="container"> -->

        <section id="contact">
                <div id="text">
                <!-- <a href="about.html">about</a> -->
                  <ul class="contact-list">
                      <li><a class="text-muted" href="mailto:jihwankimqd@gmail.com">Email</a></li>
                      <li><a class="text-muted" href="https://github.com/jihwankimqd">Github</a></li>
                  </ul>
                </div> 
            
        </section>

    <!-- </div> -->
      
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100vh;
  /* line-height: 1.6; */
  overflow: hidden;
        /* width: 100%; */
      /* height: 100%; */
      /* CSS Smooth Scroll */
      overflow-y: scroll; 
      scroll-behavior: smooth;
      scroll-snap-type: y mandatory;
}
    * {
      margin: 0;
      padding: 0;
    }


    .container {

    }

    .lead {
      font-size: 1.5rem;
    }

    section {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;
      width: 100%;
      height: 100vh;
    
      /* Scroll Snap */
      scroll-snap-align: center;
    }


  #text {
    /* margin-top: -250px; */
    text-align: center;
  }

  #text a{
    color: black;
    text-decoration: none;
    font-weight: 100;
    font-size: 1.1em;
  }

  .contact-list li {
    list-style-type: none;
    
}

</style>
