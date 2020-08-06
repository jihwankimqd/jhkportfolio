<template>
  <div id="app">
    <Projects/>
    <Navbar/>
  </div>
</template>

<script>
import Projects from '../../components/Projects.vue'
import Navbar from '../../components/Navbar.vue'





export default {
  name: 'App',
  components: {
      Projects,
      Navbar
  }
}
</script>

<style>

</style>
