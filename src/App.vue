<template>
  <div class="app">
    <header>
      <Nav />
    </header>
    <br>
    <br>
    <div class="auth-wrapper">
        <router-view />
    </div>
  </div>
</template>

<script>
import Nav from './components/Nav'
import axios from 'axios'

export default {
  name: 'App',
  data() {
    return{
      user: null
    }
  },
  components: {
    Nav,
  },
  
  async created(){
    const response = await axios.get('user');

    this.$store.dispatch('user', response.data);
  }
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

body{
  background: #1C8EF9 !important;
  min-height: 100vh;
  display: flex;
  font-weight: 400;
  font-family: 'Fira San', sans-serif; 
}


h1, h2, h3, h4, h5, h6, label, span{
  font-weight: 500;
  font-family: 'Fira San', sans-serif;
}


body, htmk, #app, #root, .auth-wrapper{
  width: 100%;
  height: 100%;
}

#app{
  text-align: center;
}

.navbar-light{
  background-color: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
}

.auth-wrapper{
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: left;
}


.auth-inner{
  width: 450px;
  margin: auto;
  background: #ffffff;
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 40px 55px 45px 55px;
  border-radius: 15px;
  transition: all .3s;
}


.auth-wrapper .form-control:focus{
  border-color: #167bff;
  box-shadow: none;
}

.auth-wrapper h3{
  text-align: center;
  margin: 0;
  line-height: 1;
  padding-bottom: 20px;
}


.custom-control-lable{
  font-weight: 400;
}

.forgot-password,
.forgot-password a{
  text-align: right;
  font-size: 13px;
  padding-top: 10px;
  color: #7f7d7d;
  margin: 0;
}


.forgot-password a{
  color: #167bff;
}
</style>
