<template>
  <div class="contend-page">
    <div v-if="productsCart.length > 0">
      <b-row>
        <b-col md="6" offset-md="3"
          ><div v-for="(data, i) in productsCart" :key="i">
            <Card :item="data" type="cart" /></div
        ></b-col>
        <b-col md="6" offset-md="3">
          <div>
            <!-- la suma total del carrito -->
            <Total :item="productsCart" />
          </div>
        </b-col>
      </b-row>
    </div>
    <div v-else class="contend-page">
      <Error msg="No se encontro productos en el carrito" />
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/elements/card/card.vue";
import Error from "@/components/elements/error/error.vue";
import Total from "@/components/elements/total/total.vue";
export default {
  name: "ListProducts",
  components: {
    Card,
    Error,
    Total,
  },
  data() {
    return {
      searchInput: "",
      loadingc: true,
    };
  },
  computed: {
    ...mapGetters("Cart", ["productsCart", "loading"]),
  },
};
</script>
<style scoped>
.form-group {
  padding-top: 35px;
}
.contend-row {
  justify-content: center;
}
.contend-page {
  padding-top: 40px;
  padding-bottom: 80px;
}
.input {
  background: #ffffff;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.04);
  border-radius: 5px;
  width: 100%;
  height: 50px;
  padding-left: 38px;
}
.icon {
  width: 18px;
  height: 18px;
  left: 15px;
  top: calc(50% - 18px / 2);
}
.has-search .form-control-feedback {
  position: absolute;
  left: 15px;
  z-index: 2;
  display: block;
  width: 2.375rem;
  line-height: 2.375rem;
  pointer-events: none;
  color: #bfbfbf;
  padding-top: 5px;
  padding-left: 15px;
}
</style>
