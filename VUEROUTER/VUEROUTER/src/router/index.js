import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Params from '@/components/params'
import Hi1 from '@/components/Hi1'
import Error from '@/components/Error'

Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,  
    }, {
      path:'/params/:newsId(\\d+)/:newsTitle',
      component:Params,
      beforeEnter:(to,from,next)=>{
        console.log('我进入了params模板');
        console.log(to);
        console.log(from);
        next();
},
    }, {
      path: '/goHome',
      redirect: "/",
    }, {
      path: '/goparams/:newsId(\\d+)/:newsTitle',
      redirect: "/params/:newsId(\\d+)/:newsTitle",
    },
    {
      path: '/hi1',
      component: Hi1,
      alias:'/sakura'
   },
   {
     path:'*',
     component:Error,
   }
  ]
})
