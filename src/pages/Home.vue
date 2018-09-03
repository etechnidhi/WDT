<template>
  <div class="home">
    <NavBar/>
    <div class="wrapper">
      <div class="container-fluid" id="contaiiner">
        <PageTitle/>
        <div class="row" style="min-height: 400px;" id="container-content">
          <div class="col-lg-12">
            <div class="tab-container">
              <BodyContent/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from './../container/NavBar.vue'
import PageTitle from './../components/PageTitle.vue'
import BodyContent from './../components/BodyContent.vue'
export default {
  name: 'Home',
  components: {
    NavBar,
    PageTitle,
    BodyContent
  }
}
</script>

<style>
  #contaiiner {
    width: 95%;
  }
  #container-content{
    margin-top: 15px;
  }
</style>
