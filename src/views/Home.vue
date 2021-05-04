<template>
  <div class="contend">
    <component :is="componentName" />
  </div>
</template>
<script>
import { mapActions } from "vuex";
import ListProducts from "@/components/list/ListProducts.vue";
export default {
  name: "Home",
  components: {
    ListProducts,
  },
  data() {
    return {
      componentName: "ListProducts",
    };
  },
  methods: {
    ...mapActions("Products", ["getProducts"]),
    ...mapActions("Cart", ["reloadApp"]),
  },
};
</script>
<style scoped>
.contend {
  overflow-x: hidden;
}
</style>
