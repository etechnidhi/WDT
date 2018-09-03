<template>
    <div class="navbar-custom active" id="navigation_4">
        <div class="container-fluid" id="fluid">
            <div id="navigation" class="active">
                <ul class="navigation-menu">
                    <li class="has-submenu" v-for="(val,index) in roleContent" :key="index">
                        <a href="#" @click="getpage(val)">{{val.name}}</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'SubHeader',
  props: ['roleContent'],
  methods: {
    ...mapActions(['sendContentInfo']),
    getpage: function (e) {
      this.sendContentInfo({
        name: e.name,
        pagetitle: e.pagetitle,
        prefix: e.prefix
      })
    }
  }
}
</script>

<style>
#topnav .navigation-menu > li:first-child{
    background-color: #0097a7 !important;
    color: #fff !important;
}
#fluid{
    width: 95%;
}
#topnav .navigation-menu > li{
    float: left;
}
a,a:hover{
    text-decoration: none;
}
#topnav .navbar-custom {
    background-color: #B0DBE9;
    display: -webkit-box;
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
    padding-left: 0;
}
@media (min-width: 992px){
#topnav .navigation-menu > li:first-of-type > a {
    padding-left: 25px;
    color: white;
}
}
</style>
