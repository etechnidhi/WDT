<template>
    <!-- start of topnav -->
    <div id="topnav">
        <b-nav class="d-flex justify-content-end text-dark desk">
            <b-nav-item id="role" disabled>ROLE <i class="fa fa-angle-double-right fa-lg" aria-hidden="true"></i></b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === 'client')}" @click="client"><i class="fa fa-check fa-1x" id="check" aria-hidden="true"></i>Client</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === 'teamMember')}" @click="teamMember">Team Member</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === true)}" @click="Hr">HR</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === true)}" @click="CompanyAdmin">Company Admin</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === true)}" @click="exchangeAmin">Exchange Admin</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === true)}" @click="superAdmin">Super Admin</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === true)}" @click="skills">Skills</b-nav-item>
        </b-nav>
        <!-- end od topnav -->
        <div class="topbar-main">
            <div class="container-fluid">
                <!-- logo container -->
                <div class="logo">
                    <a href="#" class="logo">
                            Exchange Logo
                        </a>
                </div>
                <!-- end of logo -->
                <div class="menu-extras topbar-custom">
                    <ul class="list-inline float-right mb-0">
                        <li class="list-inline-item dropdown notification-list">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect nav-user" title="Services" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false" @click="show">
                                <md-icon id="reciept">receipt</md-icon>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                <a class='dropdown-item' href="#">Login & Registration</a>
                                <a class='dropdown-item' href="#">Messaging Team Room</a>
                                <a class='dropdown-item' href="#">Work Tracking</a>
                                <a class='dropdown-item' href="#">Skills Management</a>
                                <a class='dropdown-item' href="#">Pay</a>
                                <a class='dropdown-item' href="#">Get Paid</a>
                                <a class='dropdown-item' href="#">Reporting</a>
                            </div>
                        </li>
                        <!-- Messages-->
                        <li class="list-inline-item dropdown notification-list" style="margin-top: 10px !important;">
                            <a class="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                                <i class="fa fa-envelope-o fa-lg" id="envelop"></i>
                                <span class="badge badge-danger noti-icon-badge">3</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg">
                                <!-- item-->
                                <div class="dropdown-item noti-title">
                                    <h5>
                                        <span class="badge badge-danger float-right">745</span>Messages</h5>
                                </div>
                                <!-- item-->
                                <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon">
                                            <img src="./WDT1_files/avatar-2.jpg" alt="user-img" class="img-fluid rounded-circle"> </div>
                                        <p class="notify-details">
                                            <b>Charles M. Jones</b>
                                            <small class="text-muted">Dummy text of the printing and typesetting industry.</small>
                                        </p>
                                    </a> -->
                                <!-- item-->
                                <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon">
                                            <img src="./WDT1_files/avatar-3.jpg" alt="user-img" class="img-fluid rounded-circle"> </div>
                                        <p class="notify-details">
                                            <b>Thomas J. Mimms</b>
                                            <small class="text-muted">You have 87 unread messages</small>
                                        </p>
                                    </a> -->
                                <!-- item-->
                                <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon">
                                            <img src="./WDT1_files/avatar-4.jpg" alt="user-img" class="img-fluid rounded-circle"> </div>
                                        <p class="notify-details">
                                            <b>Luis M. Konrad</b>
                                            <small class="text-muted">It is a long established fact that a reader will</small>
                                        </p>
                                    </a> -->
                                <!-- All-->
                                <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        View All
                                    </a> -->
                            </div>
                        </li>
                        <!-- notification-->
                        <!-- <li class="list-inline-item dropdown notification-list">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect" data-toggle="dropdown" href="#"
                                    role="button" aria-haspopup="false" aria-expanded="false">
                                    <i class="mdi mdi-bell-outline noti-icon"></i>
                                    <span class="badge badge-danger noti-icon-badge">3</span>
                                </a>
                                <div class="dropdown-menu dropdown-menu-right dropdown-arrow dropdown-menu-lg"> -->
                        <!-- item-->
                        <!-- <div class="dropdown-item noti-title">
                                        <h5>Notification (3)</h5>
                                    </div> -->
                        <!-- item-->
                        <!-- <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                        <div class="notify-icon bg-success">
                                            <i class="mdi mdi-cart-outline"></i>
                                        </div>
                                        <p class="notify-details">
                                            <b>Your order is placed</b>
                                            <small class="text-muted">Dummy text of the printing and typesetting industry.</small>
                                        </p>
                                    </a>
     -->
                        <!-- item-->
                        <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-warning">
                                            <i class="mdi mdi-message"></i>
                                        </div>
                                        <p class="notify-details">
                                            <b>New Message received</b>
                                            <small class="text-muted">You have 87 unread messages</small>
                                        </p>
                                    </a>
     -->
                        <!-- item-->
                        <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        <div class="notify-icon bg-info">
                                            <i class="mdi mdi-martini"></i>
                                        </div>
                                        <p class="notify-details">
                                            <b>Your item is shipped</b>
                                            <small class="text-muted">It is a long established fact that a reader will</small>
                                        </p>
                                    </a>
     -->
                        <!-- All-->
                        <!-- <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        View All
                                    </a>
                                </div>
                            </li> -->
                        <!-- User-->
                        <!-- <li class="list-inline-item dropdown notification-list">
                                <a class="nav-link dropdown-toggle arrow-none waves-effect nav-user" data-toggle="dropdown" href="#"
                                    role="button" aria-haspopup="false" aria-expanded="false">
                                    <img src="./WDT1_files/avatar-1.jpg" alt="user" class="rounded-circle">
                                </a>
                                <div class="dropdown-menu dropdown-menu-right profile-dropdown ">
                                    <a class='dropdown-item' href="#">
                                        <i class="dripicons-user text-muted"></i> Profile</a>
                                    <a class='dropdown-item' href="#">
                                        <i class="dripicons-wallet text-muted"></i> My Wallet</a>
                                    <a class='dropdown-item' href="#">
                                        <span class="badge badge-success pull-right m-t-5">5</span>
                                        <i class="dripicons-gear text-muted"></i> Settings</a>
                                    <a class='dropdown-item' href="#">
                                        <i class="dripicons-lock text-muted"></i> Lock screen</a>
                                    <div class="dropdown-divider"></div>
                                    <a class='dropdown-item' href="#">
                                        <i class="dripicons-exit text-muted"></i> Logout</a>
                                </div>
                            </li>
                            <li class="menu-item list-inline-item"> -->
                        <!-- Mobile menu toggle-->
                        <!-- <a class="navbar-toggle nav-link">
                                    <div class="lines">
                                        <span></span>
                                        <span></span>
                                        <span></span>
                                    </div>
                                </a> -->
                        <!-- End mobile menu toggle-->
                        <!-- </li> -->
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'TopNav',
  computed: {
    ...mapGetters({
      getCurrentTab: 'getCurrentTab'
    })
  },
  methods: {
    ...mapActions(['sendCurrentTab', 'showDropdown']),
    client: function () {
      this.sendCurrentTab({
        currentTab: 'client'
      })
    },
    teamMember: function () {
      this.sendCurrentTab({
        currentTab: 'teamMember'
      })
    },
    show: function () {
      this.showDropdown(true)
    }
  }
}
</script>

<style>
#topnav {
  position: fixed;
  right: 0;
  left: 0;
  top: 0;
  z-index: 1030;
  background-color: transparent;
  border: 0;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  min-height: 62px;
}
.desk {
  background: #fff;
  border-bottom: 1px solid #eee;
  font-size: 12px;
  color: #ccc !important;
}
a,
a:hover {
  color: #212529;
  text-decoration: none;
}
#role {
  color: #909090 !important;
  font-weight: bold;
}
.nav-link {
  display: block;
  padding: 0.5rem 1rem;
}
.active {
  color: #212529 !important;
  font-weight: bold;
}
#check {
  color: red;
}
.topbar-main {
  background-color: #fff !important;
  display: -webkit-box;
}
.container-fluid {
  width: 95%;
}
.logo {
  color: #000 !important;
  font-size: 16px;
  font-weight: 700;
  letter-spacing: 1px;
  line-height: 60px;
  float: left;
}
#envelop {
  font-size: 1.5em !important;
}
#reciept {
  font-size: 28px !important;
}
</style>
