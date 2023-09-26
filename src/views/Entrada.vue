<template>
  <div>
    <cliente />
    <anuncio />
  </div>  
</template>

<script>
import Anuncio from '@/components/Anuncio.vue'
import Cliente from '../components/Cliente.vue'
import Entrada from '@/views/Entrada.vue';
// eslint-disable-next-line vue/multi-word-component-names

export default {
  name: 'Entrada',
  components: {
    Cliente,
    Anuncio
  }
}
</script>