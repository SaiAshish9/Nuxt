<template>
  <div>
    <Header @sidenavToggle="displaySideNav=!displaySideNav"/>
    <Sidenav
    @close="displaySideNav=false"
     :show="displaySideNav"/>
    <nuxt />
  </div>
</template>



<script>

import Header from '@/components/Navigation/TheHeader'
import Sidenav from '@/components/Navigation/TheSideNav'


export default {
 components:{
   Header,
   Sidenav
 },
 data(){
   return {
     displaySideNav:false
   }
 } 
}
</script>


<style>
html {
  font-family: 'Open Sans' ,sans-serif;
}
body{
  margin:0px
}

</style>
