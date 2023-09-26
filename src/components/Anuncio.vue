import Anuncio from '@/components/Anuncio.vue';
<template>
    <div class="anuncio">
        <span>
            {{ presentaciones[indice] }}
        </span>
    </div>
</template>

<script>
export default {
    data(){
        return{
            presentaciones: [
                'Halmintong - 20:30',
                'Frozen - 14:30',
                'Anastasia - 16:00',
                'El rey leon - 22:00',
            ],
            indice: 0
        }
    },
    beforeCreate(){
        console.log('beforeCreate')
    },
    created(){
        console.log('created')
    },
    beforeMount(){
        console.log('beforeMount')

    },
    mounted(){
        console.log('mounted')

    },
    beforeUpdate(){
        console.log('beforeUpdate')

    },
    updated(){
        console.log('updated')

    },
    beforeDestroy(){
        console.log('beforeDestroy')

    },
    destroyed(){
        console.log('destroyed')

    }
}
</script>

<style>
.anuncio{
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