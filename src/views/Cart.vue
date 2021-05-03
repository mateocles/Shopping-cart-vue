<template>
  <div>
    <b-skeleton-wrapper :loading="loading.getItems" class="contend-page">
      <template #loading>
        <b-row>
          <b-col md="6" offset-md="3">
            <b-card>
              <b-skeleton width="85%"></b-skeleton>
              <b-skeleton width="55%"></b-skeleton>
              <b-skeleton width="70%"></b-skeleton>
            </b-card>
          </b-col>
        </b-row>
      </template>
      <div v-if="productsCart.length > 0" class="contend-page">
        <b-row>
          <b-col md="6" offset-md="3"
            ><div v-for="(data, i) in items" :key="i">
              <Card :item="data" type="cart" /></div
          ></b-col>
        </b-row>
      </div>
      <div v-else class="contend-page">
        <Error msg="No encontro ningun producto" />
      </div>
    </b-skeleton-wrapper>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Card from "@/components/elements/card/card.vue";
import Error from "@/components/elements/error/error.vue";
export default {
  name: "ListProducts",
  components: {
    Card,
    Error,
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
