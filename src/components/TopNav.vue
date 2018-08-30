<template>
    <!-- start of topnav -->
    <div id="topnav">
        <ul class="nav justify-content-end desk">
            <li class="nav-item" id="role">
                <span class="nav-link role"> ROLE <i class="fa fa-angle-double-right" aria-hidden="true" id="roleIcon"></i></span>
            </li>
            <li class="nav-item active">
                <a class="nav-link active" href="#"><i class="fa fa-check color" aria-hidden="true"></i>{{getRole}}</a>
            </li>
        </ul>
        <!-- end od topnav -->
                <!-- end topbar-main -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'TopNav',
  data() {
    return {
      showMenu: false,
      showEnvelop: false,
      showNotification: false,
      showProfile: false,
      
    };
  },
  computed: {
    ...mapGetters({
      getCurrentTab: 'getCurrentTab',
      getShow: 'getShow',
      getRole: 'getRole'
    })
  },
  mounted () {
      console.log(this.$store.state.role);
  },
  methods: {
    ...mapActions(['sendCurrentTab', 'showDropdown']),
    show: function(e) {
      this.showMenu = !this.showMenu;
    },
    showEnvelopFunction: function(e) {
      this.showEnvelop = !this.showEnvelop
    },
    showNotificationFunction: function(e) {
      this.showNotification = !this.showNotification;
    },
    showProfileFunction: function(e) {
      this.showProfile = !this.showProfile;
    }
  }
}
</script>

<style>
.color{
    color: red;
}
#breadcrumbs-two li:last-child a:after
 {
    right: 0em;
}
#breadcrumbs-two li:nth-child(2) a{
    background: #B9DCE8 !important;
    color: #343a40 !important;
}
#breadcrumbs-two li:nth-child(2) a:before{
    border-color: #B9DCE8 #B9DCE8 #B9DCE8 transparent;
}
#breadcrumbs-two li:nth-child(2) a::after{
    border-left-color: #B9DCE8;
}
</style>
