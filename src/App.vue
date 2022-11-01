<template>
  <NameHeader />
  <RouterView></RouterView>
</template>

<script lang="ts">
import NameHeader from "./components/NameHeader.vue";
import router from "./router";

export default {
  components: { NameHeader },
  mounted() {
    router.push({ name: "homePage" });
  },
};
</script>

<style lang="scss">
body {
  background-color: $bg;
}
</style>
