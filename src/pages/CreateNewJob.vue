<template>
    <div>
        <NavBar/>
        <div class="wrapper" id="wrapperId">
            <div class="container-fluid" id="contaiiner">
                <PageTitle/>
                <div class="row" style="min-height: 400px;" id="container-content">
                    <div class="col-lg-12">
                        <div class="tab-container">
                            <LeftMenuBar/>
                            <JobDescriptionContent/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import NavBar from './../container/NavBar.vue'
import PageTitle from './../container/PageTitle.vue'
import JobDescriptionContent from './../container/JobDescriptionContent.vue'
import LeftMenuBar from './../container/LeftMenuBar.vue'
import Footer from './../components/Footer.vue'
export default {
  name: 'CreateNewJob',
  components: {
    NavBar,
    PageTitle,
    JobDescriptionContent,
    LeftMenuBar,
    Footer
  }
}
</script>

<style>
#wrapperId{
    margin-bottom: 4.5em;
}
#contaiiner{
   width: 95%;
}
#container-content{
    margin-top: 15px;
}
</style>
