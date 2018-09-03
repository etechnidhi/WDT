<template>
    <div class="topbar-main">
        <div class="container-fluid" id="header-nav">
            <!-- header Logo  -->
            <div class="logo">
                <a href="#" class="logo">
                    Exchange Logo
                </a>
            </div>
            <!-- end of logo -->
            <Icons/>
            <!-- components of role -->
            <div class="menu-extras topbar-custom main-nav">
                <ul class="list-inline float-right mb-0" id="breadcrumbs-two">
                    <li style="padding-top: 10px;"><span class="service"> SERVICES <i class="fa fa-angle-double-right" aria-hidden="true" id="roleIcon"></i></span></li>
                    <li v-for="(val, index) in getRoleJsonData[role]" :key="index">
                        <a href="#" data-target="navigation_1" @click="getContent(val)">
                            <i class="fa fa-user-o" aria-hidden="true"></i> {{val.title}}
                        </a>
                    </li>
                </ul>
            </div>
            <!-- end of components of role -->
            <div class="clearfix"></div>
        </div>
    </div>
</template>

<script>
import Icons from './Icons.vue'
import {mapActions} from 'vuex'
export default {
  name: 'HeaderNav',
  props: ['role', 'getRoleJsonData'],
  components: {
    Icons
  },
  methods: {
    ...mapActions(['sendRoleContent']),
    getContent: function (val) {
      this.sendRoleContent(val)
    }
  },
  mounted () {
    let role = this.$store.state.headers.roleJson[this.$store.state.headers.role]
    this.sendRoleContent(role[0])
  }
}
</script>

<style>
#header-nav{
    width: 95% ;
}
</style>
