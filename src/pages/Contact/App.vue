<template>
  <div id="app">
    <Contact/>
    <Navbar/>
  </div>
</template>

<script>
import Contact from '../../components/Contact.vue'
import Navbar from '../../components/Navbar.vue'





export default {
  name: 'App',
  components: {
      Contact,
      Navbar
  }
}
</script>

<style>

</style>
