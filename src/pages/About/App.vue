<template>
  <div id="app">
    <About/>
    <Navbar/>

  </div>
</template>

<script>
import About from '../../components/About.vue'
import Navbar from '../../components/Navbar.vue'



export default {
  name: 'App',
  components: {
      About,
      Navbar
  }
}
</script>

<style>

</style>
