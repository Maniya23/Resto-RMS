<template>
  <div class="root-div">
    <img class="logo" src="../assets/RMS-Logo.png" alt="RMS logo" />
    <h1>Welcome to Resto RMS Login</h1>
    <div class="login">
      <input type="email" v-model="email" placeholder="Enter Your Email" />
      <input
        type="password"
        v-model="password"
        placeholder="Enter Your Password"
      />
      <button v-on:click="login">Login</button>
      <p>Don't have an account? <router-link to="/sign-up">Sign-Up Now</router-link></p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Login-page",
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async login() {
      try {
        let result = await axios.get(`http://localhost:3000/users?email=${this.email}&password=${this.password}`)
        console.log(result.data[0].name);
        if (result.data.length>0){
          let isAuth = this.userAuth(result.data[0])
          if (isAuth){
            this.$router.push({name:"Home"})        
          }
          else{
            alert("Please check Password and ty again")
          }
        }
        else{ alert("Please check Email and ty again") }
        
      }catch(Error){
        alert("Error occured. Please reload the page and try again")
      }
    },

    userAuth(user){
      let isAuth = false

      if (this.password == user.password){
        isAuth = true
        localStorage.setItem('user-Auth',JSON.stringify(user))
      }

      return isAuth
    },
  },

  mounted(){
    if (localStorage.getItem('user-Auth')){
      this.$router.push({name:"Home"})
    }
  }
};
</script>

<style scoped>
.root-div {
  text-align: center;
}

.logo {
  width: 100px;
  height: 100px;
}

.login {
  display: grid;
  flex-direction: column;
  width: 300px;
  margin: auto;
}

.login input {
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #016097;
}

.login button {
  margin: 5px 0;
  padding: 10px;
  border: 1px solid #016097;
  background-color: #016097;
  color: white;
  cursor: pointer;
}
</style>
