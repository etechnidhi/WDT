<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  font-family: "Arimo", sans-serif;
}
body{
  background: #eff3f6 !important;
  font-family: "Arimo", sans-serif;
  margin: 0;
  font-size: 15px;
}
a:hover{
  text-decoration: none !important;
}
</style>
