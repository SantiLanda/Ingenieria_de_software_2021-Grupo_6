<template>
<body>
  <div class="cmb">
    <label for="carrito"><b>Carrito: </b></label>
    <select name="carrito" id="carrito">
      <option value="0">Carrito lleno</option>
      <option value="1">Carrito vacio</option>
    </select>
    <h1>
      <br>
    </h1>
  </div>
    <div>
      <button class="confirmarCarrito" @click="confirmarCarrito()">Confirmar carrito</button>
      <button class="volverAHome" @click="volverAHome()">Volver</button>
    </div>
  </body>
</template>

<script>
// import $ from 'jquery'

export default {
  data: () => ({
    carritos: [
      { id: 1, items: [] },
      {
        id: 0,
        items: [
          { id: 0, producto: 'Hamburguesa', precio: 500, cantidad: 2 },
          { id: 1, producto: 'Helado', precio: 100, cantidad: 4 },
          { id: 2, producto: 'Gaseosa', precio: 150, cantidad: 1 }
        ]
      }
    ]
  }),

  methods: {
    confirmarCarrito: function () {
      this.$router.push({ name: 'Finalizar pedido', params: { carrito: JSON.stringify(this.selectCarrito()) } })
    },

    selectCarrito: function () {
      var idBusc = document.getElementById('carrito').value
      for (var i = 0; i < this.carritos.length; i++) {
        if (this.carritos[i].id === parseInt(idBusc)) {
          return this.carritos[i]
        }
      }
    },
    volverAHome: function () {
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
.confirmarCarrito {
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
.confirmarCarrito:hover {
    top: -1rem;
    background-color: #56CFE1;
}
.confirmarCarrito:active {
    position:relative;
    top:1px;
}
.volverAHome {
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
.volverAHome:hover {
    top: -1rem;
    background-color: #c00c15;
}
.volverAHome:active {
    position:relative;
    top:1px;
}
</style>
