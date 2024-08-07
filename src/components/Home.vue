<template>
  <div>
    <Header />
    <h1>Hello {{name}}, Welcome to RMS System</h1>
  </div>
</template>

<script>
import Header from "./Header.vue";

export default {
  components: { Header },
  name: "Home-page",
  data(){
    return{
        name:''
    }
  },
  mounted() {
    this.name = JSON.parse(localStorage.getItem("user-Auth")).name;
    if (!localStorage.getItem("user-Auth")) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
