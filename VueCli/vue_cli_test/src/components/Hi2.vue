<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "hi2",
  data() {
    return {
      msg: "Hi, I am hi2"
    };
  }
};
</script>
<style scoped>
</style>