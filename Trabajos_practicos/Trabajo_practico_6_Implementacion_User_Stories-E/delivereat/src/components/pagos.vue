<template>
  <div>Pago: {{ carrito.id }}</div>
</template>

<script>
export default {
  mounted () {
    console.log(this.$props)
    console.log(this.carrito)
  },
  props: ['carrito']
}
</script>
