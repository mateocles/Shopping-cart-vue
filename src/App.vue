<template>
  <div id="app">
    <!-- En el encabezado esta el campo de busqueda y icono de carrito -->
    <Header /> 
    <router-view />
  </div>
</template>

<script>
import { mapActions } from "vuex";
import Header from '@/components/elements/header/header.vue';
export default {
  name: "App",
  components: {
    Header,
  },
  created() {
    /* Se creo este codigo con el fin de que cuando la pagina realice un reloap, recuperar los datos del carrito y no perderlos */
    var payload = localStorage.getItem("cart");
    if (payload) {
      this.reloadApp(JSON.parse(payload));
    }
  },
  methods: {
    ...mapActions("Cart", ["reloadApp"]),
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}
</style>
