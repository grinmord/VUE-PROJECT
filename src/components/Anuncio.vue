import Anuncio from '@/components/Anuncio.vue';
<template>
  <div class="anuncio">
    <transition name="fade" mode="out-in">
      <span :key="indice">
        {{ presentaciones[indice] }}
      </span>
    </transition>
  </div>
</template>

<script>
export default {
  name:'anuncio-item',
  data() {
    return {
      presentaciones: [
        'Hamilton - 20:30',
        'Frozen - 15:00',
        'Anastasia - 14:00',
        'El Rey León - 22:00'
      ],
      indice: 0
    }
  },
  methods: {
    mostrarAnuncio() {
      this.indice++

      if(this.indice == this.presentaciones.length) {
        this.indice = 0
      }
    }
  },
  mounted() {
    setInterval(this.mostrarAnuncio, 3000)
  }
}
</script>

<style>
.anuncio {
  margin: 10px;
  font-size: 2.2rem;

  border-top-color: white;
  border-top-width: 1px;
  border-top-style: solid;

  border-bottom-color: white;
  border-bottom-width: 1px;
  border-bottom-style: solid;
}

.fade-enter {
  opacity: 0;
}

.fade-enter-active {
  transition: opacity 1s ease-out;
}

.fade-leave-active {
  transition: opacity .6s ease-out;
  opacity: 0;
}
</style>
