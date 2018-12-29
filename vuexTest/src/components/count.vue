<template>
  <div>
    <h2>{{msg}}</h2>
    <hr>
    <h3>{{$store.state.a.count}}</h3>
      <div>
    <button @click="$store.commit('add',10)">+</button>
    <button @click="reduce">-</button>
    <p>
      <button @click="addAction">+</button>
    <button @click="reduceAction">-</button>
    </p>
  </div>
  </div>

</template>
<script>
import store from "@/vuex/store";
import {mapState,mapMutations,maoGetters, mapGetters,mapActions} from 'vuex';
export default {
  data() {  
    return {
      msg: "Hello Vuex"
    };
  },
  computed:{
    // ...mapState(['count']),
    ...mapGetters(['count'])
  },
  
 methods:{
    ...mapMutations([  
        'add','reduce'
    ]),
    ...mapActions(['addAction','reduceAction'])
},
  store,
};
</script>