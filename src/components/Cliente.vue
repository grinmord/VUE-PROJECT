<template>
  <div class="seccion">
    <div class="atributo">
      <span>{{ nombreCompleto }}</span>
    </div>
    <div class="atributo">
      <span>Edad: {{ edad }}</span>
    </div>
    <div>
      <img :src="fotoPerfil" alt="Foto de perfil" />
      <p>Biografía: <a :href="biografia" target="_blank">{{ nombreCompleto }}</a></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Cliente', // Debe ser una cadena que represente el nombre del componente
  data() {
    return {
      nombres: 'Isaac',
      apellidos: 'Newton',
      fechaNacimiento: new Date(1994, 9, 27),
      fotoPerfil: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Portrait_of_Sir_Isaac_Newton%2C_1689.jpg/220px-Portrait_of_Sir_Isaac_Newton%2C_1689.jpg',
      biografia: 'https://es.wikipedia.org/wiki/Isaac_Newton'
    };
  },
  computed: {
    nombreCompleto() {
      return `${this.nombres} ${this.apellidos}`;
    },
    edad() {
      return this.calcularEdad(this.fechaNacimiento);
    }
  },
  methods: {
    calcularEdad(fecha) {
      let fechaActual = new Date();
      let diferencia = fechaActual - fecha;
      return Math.floor(diferencia / (1000 * 60 * 60 * 24 * 365.25));
    }
  }
};
</script>

<style scoped>
.seccion {
  font-size: 2.4rem;
  color: #202020;
  background-color: #e9e9e9;
  border-radius: 5px;
  margin: 10px;
  padding: 10px;
}

.atributo {
  margin: 10px;
}

</style>
