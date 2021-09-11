<template>
  <div>
    <DeliverEatAppNavbar></DeliverEatAppNavbar>
  </div>
  
  <div>
    <router-view/>
  </div>
  
</template>

<script>
import DeliverEatAppNavbar from './components/DeliverEatAppNavbar.vue'

export default {
  name: 'App',
  components: {
    DeliverEatAppNavbar
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
  background: #80FFDB;
}
</style>
