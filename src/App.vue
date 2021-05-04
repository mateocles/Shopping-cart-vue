<template>
  <div id="app">
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
