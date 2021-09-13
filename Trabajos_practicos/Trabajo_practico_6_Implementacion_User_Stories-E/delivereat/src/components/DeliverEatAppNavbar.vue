<template>
  <div>
    <div class="bar">
      <img src="../../../Recursos/Logo/DeliverEats.png" alt="DeliverEat Logo" style="width:15%;">
    </div>
    <div class="button-panel">
      <button @click="this.return()">Volver</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    showContact: false
  }),
  props: {
    data: {
      type: Array
    }
  },
  methods: {
    return: function () {
      this.$router.push({ name: 'Confirmar carrito' })
    }
  },
  name: 'delivereatnavbar'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@300&display=swap');
</style>

<style scoped>
  .contact-table {
    width: 100%;
    margin-bottom: 2rem;
  }
  .contact-table td {
    color: white;
    font-weight: bolder;
    text-shadow: black 3px 3px;
    font-size: x-large;
    background-color: #7400B8;
  }
  .bar {
    background-color: #7400B8;
  }
  .button-panel {
    display: flex;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  .button-panel button {
    font-family: 'Oswald', sans-serif;
    font-weight: bold;
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
    top: -2rem;
    text-shadow: black 3px 3px;
  }
  .button-panel button:hover {
    top: -1rem;
    background-color: #4EA8DE;
  }
</style>
