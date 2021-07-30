<template>
    <div class="auth-inner">
        <h1 v-if="user">Hi, {{user.first_name}} {{user.last_name}}</h1>
        <h3 v-if="!user">You are not logged in!</h3>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  name: 'Home',
  computed:{
    ...mapGetters(['user'])
  },
  props: ['user']
};
</script>

<style>
  .home {
    display: flex;
    width: 100%;
    height: 100%;
    background: chartreuse;
    
    align-items: center;
    justify-content: center;

    
  }
</style>
