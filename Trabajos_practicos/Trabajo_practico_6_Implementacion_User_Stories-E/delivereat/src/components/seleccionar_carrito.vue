<template>
    <div class="cmb">
      <label for="carrito"><b>Carrito: </b></label>
      <select name="carrito" id="carrito" @input="updateValues()">
        <option value="lleno">Carrito lleno</option>
        <option value="vacio">Carrito vacio</option>
      </select>
    <div>
      <button href="/pago">Confirmar carrito</button>
    </div>
    </div>
</template>

<script>

</script>
