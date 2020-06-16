<template>
  <div>
    <Header />
    <div style="margin-top:10vh">
    <h1 class="animate__animated animate__rubberBand">
      enter
    </h1>
    </div>
  </div>
</template>

<script>
import Header from "~/components/Header.vue";
export default {
    components:{
        Header
    },
    layout: 'users'
};
</script>
