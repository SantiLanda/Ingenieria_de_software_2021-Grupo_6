<template>
  <div>Pago: {{ carro.id }}</div>
  <div class="container-fluid" style="padding:0">
    <div id="form" class="container">
            <div id="divdireccion" class="p-3 margin" style="border: 5px solid grey; border-radius: 5px;">
            <h2>Dirección</h2>
            <div class="row align-items-center p-1">
                <div class="col" style="text-align: right">
                    <label for="calle" class="form-labve">Calle: </label>
                </div>
                <div class="col-1" style="text-align: right"></div>
                <div class="col">
                    <input type="text" class="form-control" @input="updateValues()">
                </div>
            </div>

            <div class="row align-items-center p-1">
                <div class="col" style="text-align: right">
                    <label for="numero" class="form-label" >Número: </label>
                </div>
                <div class="col-1" style="text-align: right"></div>
                <div class="col">
                    <input type="number" class="form-control" @input="updateValues()">
                </div>
            </div>

            <div class="row align-items-center p-2">
                <div class="col" style="text-align: right">
                    <label for="ciudad" class="form-label">Ciudad: </label>
                </div>
                <div class="col-1" style="text-align: right"></div>
                <div class="col">
                    <select name="ciudades" id="ciudades" class="form-select form-select-lg" @input="updateValues()">
                        <option value="Córdoba">Córdoba</option>
                        <option value="Carlos Paz">Carlos Paz</option>
                        <option value="Río primero">Río primero</option>
                    </select>
                </div>
            </div>

            <div class="row align-items-center p-1">
                <div class="col" style="text-align: right">
                    <label for="referencia" class="form-label" style="text-align: right">Referencia:</label>
                </div>
                <div class="col-1" style="text-align: right"></div>
                <div class="col align-items-left" > <textarea class="form-control" name="referencia" id="referencia" cols="30" rows="5" @input="updateValues()"></textarea></div>
            </div>
            </div>
            <div id="opcionesentrega" class="p-3 margin" style="border: 5px grey solid; border-radius: 5px;">
                <h3>¿Cuándo quiere recibirlo?</h3>
                <div id="cajarecibir" class="row align-items-top" style="display: flex; height: 10em; align-items: stretch; align-content: center;">
                    <div class="col">
                        <input type="radio" id="antesposible" name="fechaentrega" value="Lo antes posible" @change="cambiarRecibir()" checked>
                        <label for="antesposible"><h4>Lo antes posible</h4></label>
                    </div>
                    <div class="col">
                      <input type="radio" id="fechaparticular" name="fechaentrega" value="fechaparticular" @change="cambiarRecibir()">
                      <label for="fecha" class="form-label"><h4>Fecha particular:</h4></label>
                      <input type="date" id="controlFecha" class="form-control" @input="updateValues()" :disabled="recibir!=2">
                      <input type="time" id="controlHora" min="08:00" max="23:59" class="form-control" @input="updateValues()" :disabled="recibir!=2">
                    </div>
                </div>
            </div>
            <div id="seleccionpago" class="p-3 margin align-items-center" style="border: 5px grey solid; border-radius: 5px;">
              <div class="row">
                <div class="col-3 offset-3">
                  <input type="radio" id="pagoseleccionado1" name="pagoseleccionado" value="Efectivo" @change="cambiarPago()" checked>
                  <label for="pagoseleccionado1" style="font-size: 20px;">Pago en efectivo</label>
                </div>
                <div class="col-3">
                      <input type="radio" id="pagoseleccionado2" name="pagoseleccionado" value="Tarjeta" @change="cambiarPago()">
                      <label for="pagoseleccionado1" style="font-size: 20px;">Pago con tarjeta</label>
                </div>
              </div>
            </div>
            <div id="pagoenefectivo" class="p-3 margin" style="border: 5px grey solid; border-radius: 5px;" v-if="this.pago == 1">
                <h2>Pago en efectivo</h2>
                <label for="total" id="total" class="form-label"><h2>Total: $</h2></label>
                <label for="total" id="totalefectivo" class="form-label"><h2>500</h2></label>
                <h3>¿Con cuánto vas a pagar?</h3>
                <label for="monto"><h2>$</h2></label>
                <input id="monto" type="number" @input="updateValues()">
            </div>
            <div id="pagotarjeta" class="p-3 margin" style="border: 5px grey solid; border-radius: 5px;" v-if="this.pago == 2">
                <h2>Pago con tarjeta VISA</h2>
                <div class="row align-items-center p-2">
                    <div class="col" style="text-align: right">Número de tarjeta: </div>
                    <div class="col-1" style="text-align: right"></div>
                    <div class="col">
                        <input type="number" class="form-control">
                    </div>
                </div>
                <div class="row align-items-center p-2">
                    <div class="col" style="text-align: right">Nombre: </div>
                    <div class="col-1" style="text-align: right"></div>
                    <div class="col">
                        <input type="text" class="form-control" @input="updateValues()">
                    </div>
                </div>
                <div class="row align-items-center p-2">
                    <div class="col" style="text-align: right">Apellido: </div>
                    <div class="col-1" style="text-align: right"></div>
                    <div class="col">
                        <input type="text" class="form-control" @input="updateValues()">
                    </div>
                </div>
                <div class="row align-items-center p-2">
                    <div class="col" style="text-align: right">Fecha de vencimiento:</div>
                    <div class="col-1" style="text-align: right"></div>
                    <div class="col">
                        <div class="container" style="padding:0px">
                          <div class="row align-items-center">
                            <div class="col-3" style="text-align: right">
                            <input type="number" id="mesVto" class="form-control" @input="updateValues()"> </div>
                            <div class="col-1" style="text-align: center">/</div>
                            <div class="col-3" style="text-align: right"><input type="number" id="añoVto" class="form-control" @input="updateValues()"></div>
                          </div>
                        </div>
                    </div>
                </div>
                <div class="row align-items-center p-2">
                    <div class="col" style="text-align: right">CVC:</div>
                    <div class="col-1" style="text-align: right"></div>
                    <div class="col">
                        <input type="number" class="form-control" @input="updateValues()">
                    </div>
                </div>
            </div>
            <button id="botonconfirmacion"  class="btn btn-primary" style="margin:0 auto; display:block">Confirmar</button>
            <div id="pantallaconfirmado"  style="border: 5px grey solid; border-radius: 5px;">
                <h2>Pedido ordenado correctamente</h2>
                <h3>El courier está buscando tu pedido</h3>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  mounted () {
    this.carro = JSON.parse(this.carrito)
    this.armarFechaEntrega()
    console.log(this.fechaMin)
    console.log(this.fechaMax)
  },

  data: () => ({
    carro: 0,
    fechaMax: 0,
    fechaMin: 0,
    calle: '',
    numero: 0,
    ciudad: '',
    referencia: '',
    modo: 0,
    pago: 1,
    recibir: 1,
    mesVto: 0,
    añoVto: 0
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
      this.mesVto = document.getElementById('mesVto').value
      this.añoVto = document.getElementById('añoVto').value
    },
    cambiarPago: function () {
      var value = document.querySelector('input[name="pagoseleccionado"]:checked').value
      if (value === 'Efectivo') {
        this.pago = 1
      } else if (value === 'Tarjeta') {
        this.pago = 2
      } else {
        this.pago = 0
      }
    },
    cambiarRecibir: function () {
      var value = document.querySelector('input[name="fechaentrega"]:checked').value
      if (value === 'Lo antes posible') {
        this.recibir = 1
      } else if (value === 'fechaparticular') {
        this.recibir = 2
      } else {
        this.recibir = 0
      }
    },
    armarFechaEntrega: function () {
      var today = new Date()
      var tomorrow = new Date()
      tomorrow.setDate(tomorrow.getDate() + 7)
      var dd = String(today.getDate()).padStart(2, '0')
      var mm = String(today.getMonth() + 1).padStart(2, '0')
      var yyyy = today.getFullYear()
      var tomorrowD = String(tomorrow.getDate()).padStart(2, '0')
      var tomorrowM = String(tomorrow.getMonth() + 1).padStart(2, '0')
      var tomorrowY = tomorrow.getFullYear()
      today = yyyy + '-' + mm + '-' + dd
      tomorrow = tomorrowY + '-' + tomorrowM + '-' + tomorrowD
      this.fechaMin = today
      this.fechaMax = tomorrow
      document.getElementById('controlFecha').setAttribute('min', this.fechaMin)
      document.getElementById('controlFecha').setAttribute('max', this.fechaMax)
    }
  }
}

</script>

<style scoped>
.margin{
   margin-top:10px;
   margin-bottom:10px
}
</style>
