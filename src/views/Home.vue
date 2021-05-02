<template>
  <div class="contend">
    <component :is="componentName" />
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
import Loading from "@/components/elements/loading/Loading.vue";
import ListProducts from "@/components/list/ListProducts.vue";
export default {
  name: "Home",
  components: {
    Loading,
    ListProducts,
  },
  data() {
    return {
      componentName: "Loading",
    };
  },
  computed: {
    ...mapGetters("Pokemons", ["loading", "success"]),
  },
  mounted() {
    this.getProducts();
    setTimeout(
      function () {
        if (!this.loading.getItems && this.success.getItems) {
          this.componentName = "ListProducts";
        }
      }.bind(this),
      2000
    );
  },
  methods: {
    ...mapActions("Pokemons", ["getProducts"]),
  },
};
</script>
<style scoped>
.contend {
  overflow-x: hidden;
}
</style>
