<template>
  <div class="hello">
    <h1>{{ msg }}--{{$route.params.username}}--{{$route.params.id}}</h1>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: "hi1",
  data() {
    return {
      msg: "Hi, I am hi1"
    };
  }
};
</script>
<style scoped>
</style>