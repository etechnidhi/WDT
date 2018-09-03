<template>
  <div class="home">
    <NavBar/>
    <div class="wrapper">
      <div class="container-fluid" id="contaiiner">
        <PageTitle/>
        <div class="row" style="min-height: 400px;">
          <div class="col-lg-12">
            <Container/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import NavBar from './../Header/NavBar.vue'
  import PageTitle from './../Body/PageTitle.vue'
  import Container from './../Body/Container.vue'
  export default {
    name: 'Home',
    components: {
      NavBar,
      PageTitle,
      Container
    }
  }
</script>

<style>
  #contaiiner {
    width: 95%;
  }
</style>
