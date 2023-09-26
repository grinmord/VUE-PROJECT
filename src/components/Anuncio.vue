<template>
    <div class="anuncio">
      <span v-once>{{ presentaciones[indice] }}</span>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Anuncio', // Debe ser una cadena que represente el nombre del componente
    data() {
      return {
        presentaciones: [
          'Halmintong - 20:30',
          'Frozen - 14:30',
          'Anastasia - 16:00',
          'El rey leon - 22:00',
        ],
        indice: 0,
      };
    },
  
    methods: {
      mostrarAnuncio() {
        this.indice++;
  
        if (this.indice === this.presentaciones.length) {
          this.indice = 0;
        }
      },
    },
  
    mounted() {
      console.log('mounted');
      setInterval(this.mostrarAnuncio, 2000); // Quita los paréntesis para que se llame correctamente
    },
  
    // Los demás ganchos del ciclo de vida se mantienen igual
  };
  </script>
  
  <style>
  .anuncio {
    margin: 10px;
    font-size: 2rem;
    border-top-color: white;
    border-top-width: 1px;
    border-top-style: solid;
    border-bottom-color: white;
    border-bottom-width: 1px;
    border-bottom-style: solid;
  }
  </style>
  