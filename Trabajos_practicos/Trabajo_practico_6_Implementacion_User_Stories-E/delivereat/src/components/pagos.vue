<template>
  <div>Pago: {{ carro.id }}</div>
</template>

<script>
export default {
  mounted () {
    this.carro = JSON.parse(this.carrito)
  },

  data: () => ({
    carro: 0
  }),
  props: ['carrito']
}
</script>
