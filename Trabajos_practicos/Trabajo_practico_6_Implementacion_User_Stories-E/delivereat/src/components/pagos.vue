<template>
  <div>Pago: {{ carro.id }}</div>
  <div class="container" id="direccion" v-if="this.modo == 0">
    <div class="row p-2">
      <div class="col-sm-4">
        <label class="label" for="calle">Calle:</label>
        <input class="form-control" type="text" id="calle" @input="updateValues()"/>
      </div>
    </div>
    <div class="row p-2">
      <div class="col-sm-1-12">
        <label for="numero">Numero: </label>
        <input type="number" id="numero" @input="updateValues()"/>
      </div>
    </div>
    <div class="row p-2">
      <div class="col-sm-1-12">
        <label for="ciudad">Ciudad: </label>
        <select name="ciudades" id="ciudad" @input="updateValues()">
          <option value="Cordoba">Cordoba</option>
          <option value="Carlos Paz">Carlos paz</option>
          <option value="Cosquin">Cordoba</option>
        </select>
      </div>
    </div>
    <div class="row p-2">
      <div class="col-sm-1-12">
        <label for="referencia">Referencia: </label>
        <input type="textarea" rows="4" cols="50" id='referencia' @input="updateValues()" />
      </div>
    </div>
    <div class="row p-2">
      <div class="col-sm-4 offset-sm-4">
      <button type="button" class="btn btn-primary btn-lg" id="siguienteapago" @click="mostrarSiguienteDiv()">
      Clickeame para seguir
      </button>
    </div>
    </div>
  </div>

  <div class="container" id="pago" v-if="this.modo == 1">
    <div id="seleccionpago" style="border: solid 5px black">
      <input type="radio" id="tarjeta" name="pago" value="tarjeta" />
      <label for="tarjeta">tarjeta</label>
      <input type="radio" id="efectivo" name="pago" value="efectivo" />
      <label for="efectivo">efectivo</label>
    </div>
    <div class="row p-2">
      <div class="col-sm-4 offset-sm-4">
      <button type="button" class="btn btn-primary btn-lg" id="siguienteapago" @click="mostrarSiguienteDiv()">
      Clickeame para seguir
      </button>
    </div>
    </div>
    <div id="pagotarjeta">
      <div id="fechapararecibir" v-if="this.modo == 2">
        <input
          type="date"
          id="fechaentrega"
          name="fechaentregapedido"
          value="2021-09-11"
          min="2021-09-11"
          max="2021-09-21"
        />
        <button type="button" class="btn btn-primary btn-lg" id="siguienteapago" @click="mostrarSiguienteDiv()">
      Clickeame para seguir
      </button>
      </div>
    </div>
    <div id="pagoefectivo"></div>
  </div>
</template>

<script>
import validarTarjeta from '../assets/validarVisa.js'

export default {
  mounted () {
    this.carro = JSON.parse(this.carrito)
  },

  data: () => ({
    calle: '',
    numero: 0,
    ciudad: '',
    referencia: '',
    carro: 0,
    modo: 0
  }),
  props: ['carrito'],
  methods: {
    mostrarSiguienteDiv: function () {
      this.modo += 1
    },
    updateValues: function () {
      this.calle = document.getElementById('calle').value
      this.numero = document.getElementById('numero').value
      this.ciudad = document.getElementById('ciudad').value
      this.referencia = document.getElementById('referencia').value
    }
  }
}

</script>
