<template>
  <v-app>
    <v-navigation-drawer v-model="menu" app temporary>
      <v-list>
        <v-list-tile @click="seleccionar('home')">
          <v-list-tile-action>
            <v-icon>home</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Inicio-item</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="seleccionar('perfil')">
          <v-list-tile-action>
            <v-icon>account_circle</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Perfil-item</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="seleccionar('registro')">
          <v-list-tile-action>
            <v-icon>contact_mail</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Registro-item</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
        <v-list-tile @click="seleccionar('login')">
          <v-list-tile-action>
            <v-icon>arrow_forward</v-icon>
          </v-list-tile-action>
          <v-list-tile-content>
            <v-list-tile-title>Ingresar-item</v-list-tile-title>
          </v-list-tile-content>
        </v-list-tile>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar color="primary" dark app>
      <v-toolbar-side-icon @click="menu = !menu"></v-toolbar-side-icon>
      <v-toolbar-title @click="componenteActual = 'home'" class="headline logo">
        <span>{{ titulo }}</span>
      </v-toolbar-title> 
      <v-spacer>
        <span v-if="usuario">{{ usuario.nombres }}</span>
      </v-spacer>     
    </v-toolbar>

    <v-content>
      <v-container fluid fill-height>
        <v-slide-y-transition mode="out-in">
          <component :is="componenteActual"></component>
        </v-slide-y-transition>
      </v-container>
    </v-content>
      <v-snack v-model="Notification.visible" :color ="Notification.color" multi-line top :timeout="6000" dark >
        {{ Notification.mensaje }}
        <v-btn color="white" flat @click="ocultarNotificacion">
          cerrar
        </v-btn>

      </v-snack>
    <v-footer color="primary" dark>
      <v-layout justify-center>
        <span>Curso Vue.js y Firebase - Jorge Bustamante</span>
      </v-layout>
    </v-footer>
  </v-app>
</template>

<script>

import Home from '@/views/Home.vue'
import Registro from '@/views/usuario/Registro.vue'
import Login from '@/views/usuario/Login.vue'
import Perfil from '@/views/usuario/Perfil.vue'

export default {
  components: { Home, Registro, Login, Perfil },
  name: 'App',
  data () {
    return {
      titulo: 'Súper Ópera',
      componenteActual: 'home',
      menu: false
    }
  },
  computed:{
    usuario(){
      return  this.$store.state.usuario.nombres 
    }
  },
  methods: {
    seleccionar(nombre) {
      this.componenteActual = nombre
      this.menu = false
    },
    ocultarNotificacion(){
      this.$store.commit('ocultarNotificacion')
    }
  },
  Notification() {
    return this.$store.state.Notification
  }
}
</script>

<style>

@import url('https://fonts.googleapis.com/css?family=Great+Vibes');

.logo {
  font-family: 'Great Vibes', cursive !important;
  cursor: pointer;
}

</style>
