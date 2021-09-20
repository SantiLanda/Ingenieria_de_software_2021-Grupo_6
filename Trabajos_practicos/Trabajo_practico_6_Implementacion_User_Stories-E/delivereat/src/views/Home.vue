<template>
  <div class="home">
    <img alt="DeliverEat logo" src="../../../Recursos/Logo/DeliverEats.png" style="width:20rem; heigth:20rem">
    <HelloWorld msg="Bienvenida/o a DeliverEat!"/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
