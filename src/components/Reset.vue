<template>
    <div class="auth-inner">
        <form>
            <h3>Reset Password</h3>

            <div class="form-group">
                <label>Password</label>
                <input type="password" class="form-control" v-model="password" placeholder="Password" />
            </div>
            <div class="form-group">
                <label>Confirm Password</label>
                <input type="password" class="form-control" v-model="password_confirm" placeholder="Confirm Password" />
            </div>

            <button class="btn btn-primary btn-block">Sign Up</button>
            

        </form>
    </div>
  
</template>

<script>
export default {

}
</script>

<style>

</style>