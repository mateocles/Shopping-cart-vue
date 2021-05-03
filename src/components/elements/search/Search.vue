<template>
  <div class="nav-bar">
    <b-row>
      <b-col class="contend">
        <a class="nav-logo" href="/">
          <img
            src="https://http2.mlstatic.com/frontend-assets/ui-navigation/5.14.4/mercadolibre/logo__large_plus.png"
            alt="logo mercado libre"
            class="logo"
          />
        </a>
      </b-col>
      <b-col cols="6"
        ><b-row class="contend">
          <b-col>
            <div class="form-group has-search">
              <span class="form-control-feedback">
                <img src="@/assets/img/lupa.svg" alt="arrow" />
              </span>
              <input
                type="text"
                v-on:keyup.enter="searchProduct"
                class="form-control input"
                v-model="searchInput"
                placeholder="Search"
              />
            </div>
          </b-col>
        </b-row>
      </b-col>
      <b-col class="cart"
        ><router-link class="link" to="/cart"
          ><span>3</span><b-icon icon="cart2" font-scale="2"></b-icon>
        </router-link>
      </b-col>
    </b-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  name: "Search",
  data() {
    return {
      searchInput: "",
    };
  },
  computed: {},
  methods: {
    ...mapActions("Products", ["getProducts"]),
    searchProduct() {
      if (this.searchInput != "") {        
        this.$router.push({ path: "/" }).catch(() => {});
        this.getProducts(this.searchInput);
      }
    },
  },
};
</script>

<style scoped>
.link {
  color: #000;
}
.cart {
  padding-top: 25px;
}
.form-group {
  padding-top: 20px;
}
.contend {
  justify-content: center;
  text-align: center;
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
.nav-bar {
  background-color: #ffe600;
}
.logo {
  top: 11px;
  max-width: 100%;
  display: inline-block;
  padding-top: 25px;
}
</style>
