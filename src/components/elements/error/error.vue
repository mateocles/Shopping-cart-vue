<template>
  <div class="container">
    <div class="contend">
      <div class="contend-btn">
        <h1 class="title">{{ msg }}</h1>
        <p class="sub-title">No se ha encontrado!</p>
      </div>
      <div class="contend-btn">
        <b-button pill variant="warning" class="button" @click="home()"
          >Go back home</b-button
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "error",
  props: {
    msg: String,
  },

  methods: {
    home() {
      this.$router.push({ path: "/" }).catch(() => {});
    },
  },
};
</script>

<style scoped>
.contend-btn {
  text-align: center;
}
.title {
  height: 43px;
  left: 291px;
  top: 135px;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 31px;
  align-items: center;
  text-align: center;
}
.sub-title {
  left: 30px;
  top: 479px;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #5e5e5e;
}
</style>
