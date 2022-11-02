<template>
  <h1 class="logo" @click="$router.push({ name: 'homePage' })">
    <span class="vueText">Vue</span>Sorter
  </h1>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

<style lang="scss" scoped>
.logo {
  color: #8b8c7a;
  font-weight: bold;
  text-align: left;
  vertical-align: top;
  margin-bottom: 15vh;
  margin-left: 5pt;
  font-size: 32pt;
  cursor: pointer;
  .vueText {
    color: #41b883;
  }
}
</style>
