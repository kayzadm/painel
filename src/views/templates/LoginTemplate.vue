<template>
  <header></header>

  <main>
    <slot name="menu"></slot>
  </main>
</template>

<script>
export default {
  name: "SiteTemplate",
  components: {},
};
</script>

<style>
@import url("../../assets/css/login.css");
main {
  display: flex;
}
</style>