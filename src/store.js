import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuario: null,
    Notification: {
      visible: false,
      mensaje: '',
      color: 'info',
    }
  },
  mutations: {
    actualizarUsuario(state,usuario){
      state.usuario = usuario
   },
   mostrarInformacion(state,mensaje) {
      state.Notification.mensaje = mensaje
      state.Notification.color = 'info'
      state.Notification.visible = true
   },
   mostrarExito(state,mensaje) {
    state.Notification.mensaje = mensaje
    state.Notification.color = 'success'
    state.Notification.visible = true
 },
 mostrarAvertencia(state,mensaje) {
  state.Notification.mensaje = mensaje
  state.Notification.color = 'warning'
  state.Notification.visible = true
},
mostrarError(state,mensaje) {
  state.Notification.mensaje = mensaje
  state.Notification.color = 'error'
  state.Notification.visible = true
},
ocultarNotificacion(state) {
  state.Notification.visible = false
}
  },
  actions: {

  },
  getters: {

  }
})
