<template>
    <NameHeader/>
    <RouterView></RouterView>
</template>

<script lang="ts">
import NameHeader from "./components/NameHeader.vue";
import router from "./router";

export default{
    components: { NameHeader },
    mounted(){
      router.push({name: 'homePage'})
    }
}
</script>

<style lang="scss">
body{
  background-color: $bg;
}
*{
  font-family: Verdana, Geneva, Tahoma, sans-serif;
  // background: $bg;
  color: $textclr;
}
.btn{
  border: 5px #0A0A0A;
  text-align: center;
  margin: 5px;
  width: 20;
  background-color:#212121;
  color: $textclr;
  padding: 10px;
  width: 200px;
  font-size: 13pt;

  .btn:hover{
    box-shadow: inset 400px 0 0 0 #434750;
    cursor: pointer;
    transition-duration: 300ms;
  }
}

</style>