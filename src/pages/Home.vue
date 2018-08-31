<template>
    <div class="home">
        <NavBar/>
        <Container/>
    </div>
</template>

<script>
import NavBar from './../Header/NavBar.vue'
import Container from './../Body/Container.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    Container
  }
}
</script>

<style>

</style>
