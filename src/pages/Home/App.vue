<template>
  <div id="app">
    <Home/>
    <Navbar/>
  </div>
</template>

<script>
import Home from '../../components/Home.vue'
import Navbar from '../../components/Navbar.vue'




export default {
  name: 'App',
  components: {
    Navbar,
    Home

  }
}
</script>

<style>

</style>
