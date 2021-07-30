<template>
  <div class="app">
    <b-container fluid="md">
      <b-row>
        <b-col style="padding:0;">
          <header>
            <Nav />
          </header>
        </b-col>
      </b-row>
      <b-row style="margin-top:60px;">
        <b-col sm="3" class="justify-content-start">
          <div id="MenuLeft">
            <Menuleft />
          </div>
          <!-- <Category>  
          </Category> -->
        </b-col>
        <b-col sm="9">
          <div>
            <router-view />
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script>
import Menuleft from "./components/MenuLeft.vue";
import Nav from "./components/Nav";
import axios from "axios";

export default {
  name: "App",
  data() {
    return {
      user: null,
    };
  },
  components: {
    Nav,
    Menuleft,
  },

  async created() {
    const response = await axios.get("user");

    this.$store.dispatch("user", response.data);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}

.category {
  border: 1px solid #333;
  display: flex;
  text-align: center;
  flex-direction: column;
  color: #333;
  padding: 12px;
  margin-top: 10px;
}

body {
  background: #1c8ef9 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: "Fira San", sans-serif;
}

h1,
h2,
h3,
h4,
h5,
h6,
label,
span {
  font-weight: 500;
  font-family: "Fira San", sans-serif;
}

body,
htmk,
#app,
#root,
.auth-wrapper {
  width: 100%;
  height: 100%;
}

#app {
  text-align: center;
}

.navbar-light {
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper {
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}

.auth-inner {
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all 0.3s;
}

.auth-wrapper .form-control:focus {
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3 {
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}

.custom-control-lable {
  font-weight: 400;
}

.forgot-password,
.forgot-password a {
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}

.forgot-password a {
  color: #167bff;
}
</style>
