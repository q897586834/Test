<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{count}}</h3>
    <button @click="$store.commit('add',10)">+</button>
    <button @click="reduce">-</button>
  </div>
</template>
<script>
import store from "@/vuex/store";
import {mapState,mapMutations} from 'vuex';
export default {
  data() {
    return {
      msg: "Hello Vuex"
    };
  },
  computed:mapState(['count']),
  methods:mapMutations(['add','reduce']),
  store
};
</script>