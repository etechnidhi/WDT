<template>
    <div id="topnav">
      <TopNav :role="getRole"></TopNav>
      <HeaderNav :role="getRole"></HeaderNav>
      <SubHeader :roleContent="getRoleContent"></SubHeader>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import HeaderNav from './HeaderNav.vue'
import SubHeader from './SubHeader.vue'
import TopNav from './TopNav.vue'
export default {
  name: 'NavBar',
  components: {
    TopNav,
    HeaderNav,
    SubHeader
  },
  computed: {
    ...mapGetters({
      getRole: 'getRole',
      getRoleContent: 'getRoleContent'
    })
  }
}
</script>

<style>
</style>
