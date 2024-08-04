<template>
    
    <div class="root-div">
        <img class="logo" src="../assets/RMS-Logo.png" alt="RMS logo">
        <h1>Sign Up with Resto RMS Today</h1>
        <div class="register">
            <!-- <label for="name">Name</label> -->
            <input type="text" v-model="name" placeholder="Enter Your Name">
            <!-- <label for="name">Email</label> -->
            <input type="email" v-model="email" placeholder="Enter Your Email">
            <!-- <label for="name">Password</label> -->
            <input type="password" v-model="password" placeholder="Enter Your Password">
            <button v-on:click="signUp">SignUp</button>
            <p>Already have an account? <router-link to="/login">Login Now</router-link></p>
        </div>
    </div>
    
</template>

<script>

import axios from 'axios'

export default {
    name: 'SignUp',
    data() {
        return {
            name: "",
            email: "",
            password: ""
        }
    },
    methods:{
        async signUp(){
            let result = await axios.post("http://localhost:3000/users",{
                name: this.name,
                email: this.email,
                password: this.password
            });

            console.log(result);
            if (result.status == 201){
                localStorage.setItem('user-Auth',JSON.stringify(result.data))
                this.$router.push({name:"Home"})
            }
        }
    },
    mounted(){
        if (localStorage.getItem('user-Auth')){
            this.$router.push({name:"Home"})
        }
    }
}
</script>

<style scoped>

.root-div{
    text-align: center;
}

.logo {
    width: 100px;
    height: 100px;
}

.register{
    display: grid;
    flex-direction: column;
    width: 300px;
    margin: auto;
}

.register input{
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #016097;
}

.register button{
    margin: 5px 0;
    padding: 10px;
    border: 1px solid #016097;
    background-color: #016097;
    color: white;
    cursor: pointer;
}

</style>