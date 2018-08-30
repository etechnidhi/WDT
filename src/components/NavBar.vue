<template>
  <div>
    <TopNav/>
    <HeaderNav/>
  </div>
</template>

<script>
  import TopNav from './TopNav.vue';
  import HeaderNav from './HeaderNav.vue';
  export default {
    name: 'NavBar',
    components: {
      TopNav,
      HeaderNav
    }
  };
</script>

<style>
  
</style>
