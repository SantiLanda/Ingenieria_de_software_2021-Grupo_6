<template>
  <div class="cmb">
    <label for="carrito"><b>Carrito: </b></label>
    <select name="carrito" id="carrito">
      <option value="0">Carrito lleno</option>
      <option value="1">Carrito vacio</option>
    </select>
    <div>
      <button @click="confirmarCarrito()">Confirmar carrito</button>
    </div>
  </div>
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
          { producto: 'Hamburguesa', precio: 500, cantidad: 2 },
          { producto: 'Helado', precio: 100, cantidad: 4 },
          { producto: 'Gaseosa', precio: 150, cantidad: 1 }
        ]
      }
    ]
  }),

  methods: {
    confirmarCarrito: function () {
      this.$router.push({ name: 'Finalizar pedido', params: { carrito: this.selectCarrito() } })
    },

    selectCarrito: function () {
      var idBusc = document.getElementById('carrito').value
      for (var i = 0; i < this.carritos.length; i++) {
        if (this.carritos[i].id === parseInt(idBusc)) {
          return this.carritos[i]
        }
      }
    }
  }
}
</script>
