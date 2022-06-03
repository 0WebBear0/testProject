<template>
  <div>
    <Header/>

   <div class="container mt-3">
     <div class="row">
       <div class="col-0 col-sm-1 col-md-2 col-lg-3 col-xl-3"/>
       <div class="col-12 col-sm-10 col-md-8 col-lg-6 col-xl-6">
         <Nuxt class="base-layout"/>
       </div>
       <div class="col-0 col-sm-1 col-md-2 col-lg-3 col-xl-3"/>
     </div>
   </div>
  </div>
</template>

<script>
import Vue from "vue";
import Header from "~/components/UI/Header.vue";

export default Vue.extend( {
  name: "default",
  components: {Header},
})
</script>

<style scoped>
.base-layout{
  word-break: break-all;
}
</style>
