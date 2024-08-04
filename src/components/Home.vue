<template>
    <div>
        <h1>Hello user, Welcome to RMS System</h1>
    </div>
</template>

<script>
    export default {
        name:"Home-page",
        mounted(){
            if(!localStorage.getItem('user-Auth')){
                this.$router.push({name:"SignUp"})
            }
        }
    }
</script>
