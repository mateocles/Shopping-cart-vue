<template>
  <b-card class="card">
    <b-row>
      <b-col md="6" offset-md="3">
        <b-row>
          <b-col>
            <span class="price"><span>Total</span></span>
          </b-col>
          <b-col>
            <span class="price"
              ><span>$ {{ calPrice }}</span></span
            >
          </b-col>
        </b-row>
      </b-col>
    </b-row>
  </b-card>
</template>

<script>
export default {
  name: "total",
  props: {
    item: Array,
  },

  computed: {
    calPrice() {
      let price = 0;
      if (this.item) {
        this.item.forEach((element) => {
          price = price + element.prices.prices[0].amount;
        });
      }
      return price;
    },
  },
};
</script>
<style scoped>
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
