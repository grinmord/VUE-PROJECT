<template>
  <div class="seccion">
    <div class="atributo">
      <input v-model="email" @keyup.enter="actualizarEmail" type="text">
    </div>
  </div>
</template>

<script>
export default {
  name:'email-item',
  props: ['emailRecibido'],
  data() {
    return {
      email: ''
    }
  },
  methods: {
    actualizarEmail() {
      this.$emit('onCambioEmail', this.email)
    }
  },
  watch: {
    emailRecibido() {
      this.email = this.emailRecibido
    }
  }
}
</script>

<style>

.email {
  text-align: left;
}

</style>
