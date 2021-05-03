<template>
  <b-card class="card">
    <b-row>
      <b-col>
        <b-row>
          <b-col md="4">
            <img
              height="160px"
              width="160px"
              :src="item.thumbnail"
              alt="arrow"
            />
          </b-col>
          <b-col>
            <p>{{ item.title }}</p>
            <span class="price"
              ><span>$</span
              ><span>{{ item.prices.prices[0].amount }}</span></span
            >
            <b-button
              v-if="type == 'listProduct'"
              variant="primary"
              @click="add(item)"
              >Agregar al carrito</b-button
            ><b-button
              v-if="type == 'cart'"
              variant="danger"
              @click="delet(item)"
              >Eliminar al carrito</b-button
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "card",
  props: {
    item: Object,
    type: String,
  },
  methods: {
    ...mapActions("Cart", ["addProduct", "deletProduct"]),
    add(data) {
      this.noti(data, "success", "Se ha agregado");
      this.addProduct(data);
    },
    delet(data) {
      this.noti(data, "danger", "Se ha eliminado");
      this.deletProduct(data);
    },
    noti(data, type, text) {
      this.$bvToast.toast(
        `Nombre: ${data.title}, Precio: ${data.prices.prices[0].amount}`,
        {
          title: `${text} un producto en el carrito`,
          variant: type,
          solid: true,
        }
      );
    },
  },
};
</script>

<style scoped>
.button {
  text-align: end;
}
.card-row {
  padding-top: 10px;
}
.p {
  padding-top: 10px;
}
.contend-btn {
  padding-top: 5px;
}
.card {
  min-width: 0;
  background-color: #fff;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
}
.price {
  color: #333;
  display: -webkit-flex;
  display: flex;
  font-size: 24px;
  font-weight: 400;
  margin-right: 8px;
  line-height: 1.25;
}
</style>
