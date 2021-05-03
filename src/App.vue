<template>
  <div id="app">
    <Search />
    <router-view />
  </div>
</template>

<script>
import Search from "@/components/elements/search/Search.vue";
export default {
  name: "App",
  components: {
    Search,
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
