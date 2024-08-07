<template>
  <header class="header">
    <div class="logo">
      <img src="../assets/RMS-Logo.png" alt="RMS logo" />
    </div>
    <nav class="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/add">Add Restaurant</router-link>
      <router-link to="/update">Update Restaurant</router-link>
      <a v-on:click="logout" href="#">Logout</a>
    </nav>
  </header>
</template>

<script>
export default {
  name: "HeaderNav",
  methods:{
    logout(){
      localStorage.removeItem('user-Auth')
      this.$router.push({name:"Login"})
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px 20px;
  background-color: #016097;
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.logo img {
  height: 40px;
}

.nav {
  display: flex;
  gap: 20px;
}

.nav a {
  color: white;
  text-decoration: none;
  padding: 5px 10px;
  transition: background-color 0.3s, color 0.3s;
}

.nav a:hover {
  background-color: #01497a;
  border-radius: 5px;
  color: #fff;
}
</style>
