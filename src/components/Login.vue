<template>
    <div class="auth-inner">
        <form @submit.prevent="handleSubmit">
            <div class="form-group">
                <label>Email</label>
                <input type="email" class="form-control" v-model="email" placeholder="Email" />
            </div>
            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password" />
            </div>

            <button class="btn btn-primary btn-block">Login</button>

            <p class="forgot-password text-right">
                <router-link to="forgot">Forgot password?</router-link>
            </p>
        </form>
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'Login',
    data(){
        return{
            email: '',
            password: ''
        }
    },
    methods:{
        async handleSubmit(){
            const response = await axios.post('login', {
                email: this.email,
                password: this.password
            });

            localStorage.setItem('token', response.data.token);
            this.$store.dispatch('user', response.data.user);
            this.$router.push('/');
        }
    }

}
</script>

<style>

</style>