<template>
  <div class="app">
    <b-container fluid="md">
      <b-row>
        <b-col style="padding:0;">
          <b-navbar toggleable type="dark" variant="info">
            <b-navbar-brand href="#"><router-link to='/home'>DAY LA CUA NGUYEN DU</router-link></b-navbar-brand>

            <b-navbar-toggle target="navbar-toggle-collapse"> </b-navbar-toggle>

            <b-collapse id="navbar-toggle-collapse" is-nav> </b-collapse>
            <div></div>
          </b-navbar>
        </b-col>
      </b-row>
      <b-row>
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
// import Main from "./components/Main.vue";
// import Category from "./components/Category.vue";
import Menuleft from './components/MenuLeft.vue'

export default {
  data: () => {
    return {};
  },
  components: {
    // Main,
    // Category,
    Menuleft
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
</style>
