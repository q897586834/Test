<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <div>
      <button @click="goGo">前进</button>
      <button @click="goBack">后退</button>
      <button @click="goHome">返回首页</button>
    </div>
    <router-link to="/">Home</router-link>|
    <router-link to="/Hi1">hi1</router-link>|
    <router-link to="/sakura">sakura</router-link>|
    <router-link to="/goHome">goHome</router-link>|
    <router-link to="/params/198/jspang website is very good">params</router-link>|
    <router-link to="/goparams/111/jspang website is very good">goparams</router-link>
    <transition name="fade" mode="out-in">
      <router-view></router-view>
    </transition>

  </div>
</template>

<script>
export default {
  name: "App",
  methods: {
    goBack(){
      this.$router.go(-1);
    },
    goGo(){
      this.$router.go(1);
    },
    goHome(){
      this.$router.push('/Hi1');
    }
  },
};

</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.fade-enter {
  opacity: 0;
}
.fade-leave {
  opacity: 1;
}
.fade-enter-active {
  transition: opacity 0.5s;
}
.fade-leave-active {
  opacity: 0;
  transition: opacity 0.5s;
}
</style>
