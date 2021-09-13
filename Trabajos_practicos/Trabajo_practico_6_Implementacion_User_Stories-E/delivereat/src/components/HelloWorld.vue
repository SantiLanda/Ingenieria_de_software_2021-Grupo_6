<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h3></h3>
  </div>
  <div>
    <button class="carritoButton" autofocus="true" @click="sendToCarrito()">Selecciona un carrito de nuestros comercios adheridos</button>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    sendToCarrito () {
      this.$router.push('/carrito')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.carritoButton {
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
    font-size: 30px;
    display: inline-block;
    border: 0;
    margin: 0 5px;
    background-color: #7400B8;
    color: whitesmoke;
    padding: 4px;
    padding-left: 10px;
    padding-right: 10px;
    border-radius: 6px;
    box-shadow: 5px 4px 5px 0px rgba(0,0,0,0.3);
    -webkit-box-shadow: 5px 4px 5px 0px rgba(0,0,0,0.3);
    -moz-box-shadow: 5px 4px 5px 0px rgba(0,0,0,0.3);
    font-size: xx-large;
    position: relative;
    transition: all 0.1s;
    bottom: auto;
    top: -2rem;
    text-shadow: black 3px 3px;
}
.carritoButton:hover {
    top: -1rem;
    background-color: #4EA8DE;
}
.carritoButton:active {
    position:relative;
    top:1px;
}
</style>
