<template>
    <!-- start of topnav -->
    <div id="topnav">
        <ul class="nav justify-content-end desk">
            <li class="nav-item" id="role">
                <span class="nav-link role"> ROLE <i class="fa fa-angle-double-right" aria-hidden="true" id="roleIcon"></i></span>
            </li>
            <li class="nav-item" v-bind:class="{ active: (getCurrentTab === 'client')}" @click="client">
                <a class="nav-link " href="#"><i class="material-icons" id="checkIcon" v-if="getCurrentTab === 'client'">check</i>Client</a>
            </li>
            <li class="nav-item" v-bind:class="{ active: (getCurrentTab === 'teamMember')}" @click="teamMember">
                <a class="nav-link" href="#"><i class="material-icons" id="checkIcon" v-if="getCurrentTab === 'teamMember'">check</i> Team Member</a>
            </li>
            <li class="nav-item" v-bind:class="{ active: (getCurrentTab === 'hr')}" @click="hr">
                <a class="nav-link" href="#"><i class="material-icons" id="checkIcon" v-if="getCurrentTab === 'hr'">check</i>HR</a>
            </li>
            <li class="nav-item" v-bind:class="{ active: (getCurrentTab === 'companyAdmin')}" @click="companyAdmin">
                <a class="nav-link" href="#"><i class="material-icons" id="checkIcon" v-if="getCurrentTab === 'companyAdmin'">check</i>Company Admin</a>
            </li>
            <li class="nav-item" v-bind:class="{ active: (getCurrentTab === 'exchangeAdmin')}" @click="exchangeAdmin">
                <a class="nav-link" href="#"><i class="material-icons" id="checkIcon" v-if="getCurrentTab === 'exchangeAdmin'">check</i>Exchange Admin</a>
            </li>
            <li class="nav-item" v-bind:class="{ active: (getCurrentTab === 'superAdmin')}" @click="superAdmin">
                <a class="nav-link" href="#"><i class="material-icons" id="checkIcon" v-if="getCurrentTab === 'superAdmin'">check</i>Super Admin</a>
            </li>
            <li class="nav-item" v-bind:class="{ active: (getCurrentTab === 'skills')}" @click="skills">
                <a class="nav-link" href="#"><i class="material-icons" id="checkIcon" v-if="getCurrentTab === 'skills'">check</i>Skills</a>
            </li>
        </ul>
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
                            <a class="nav-link arrow-none waves-effect nav-user" title="Services" href="#" role="button" @click="show()">
                                <i class="mdi mdi-receipt noti-icon"></i>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown" v-bind:class="{ recieptDropdown: (this.showMenu === true)}">
                                <a class="dropdown-item" href="#">Login & Registration</a>
                                <a class="dropdown-item" href="#">Messaging Team Room</a>
                                <a class="dropdown-item" href="#">Work Tracking</a>
                                <a class="dropdown-item" href="#">Skills Management</a>
                                <a class="dropdown-item" href="#">Pay</a>
                                <a class="dropdown-item" href="#">Get Paid</a>
                                <a class="dropdown-item" href="#">Reporting</a>
                            </div>
                        </li>
                        <!-- Messages-->
                        <li class="list-inline-item dropdown notification-list" style="margin-top: 10px !important;">
                            <a class="nav-link arrow-none waves-effect" href="#" role="button" aria-haspopup="false" @click="showEnvelopFunction()">
                                <i class="fa fa-envelope-o fa-lg" id="envelop"></i>
                                <span class="badge badge-danger noti-icon-badge" id="badge">3</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg" id="messageId" v-bind:class="{ recieptDropdown: (this.showEnvelop === true)}">
                                <!-- item-->
                                <div class="dropdown-item noti-title">
                                    <h5><span class="badge badge-danger float-right">745</span>Messages</h5>
                                </div>
                                <!-- item-->
                                <a href="#" class="dropdown-item notify-item">
                                    <div class="notify-icon">
                                        <img src="" alt="user-img" class="img-fluid rounded-circle"> </div>
                                    <p class="notify-details">
                                        <b>Charles M. Jones</b>
                                        <small class="text-muted">Dummy text of the printing and typesetting industry.</small>
                                    </p>
                                </a>
                                <!-- item-->
                                <a href="#" class="dropdown-item notify-item">
                                    <div class="notify-icon">
                                        <img src="" alt="user-img" class="img-fluid rounded-circle"> </div>
                                    <p class="notify-details">
                                        <b>Thomas J. Mimms</b>
                                        <small class="text-muted">You have 87 unread messages</small>
                                    </p>
                                </a>
                                <!-- item-->
                                <a href="#" class="dropdown-item notify-item">
                                    <div class="notify-icon">
                                        <img src="" alt="user-img" class="img-fluid rounded-circle"> </div>
                                    <p class="notify-details">
                                        <b>Luis M. Konrad</b>
                                        <small class="text-muted">It is a long established fact that a reader will</small>
                                    </p>
                                </a>
                                <!-- All-->
                                <a href="#" class="dropdown-item notify-item">
                                        View All
                                    </a>
                            </div>
                        </li>
                        <!-- notification-->
                        <li class="list-inline-item dropdown notification-list">
                            <a class="nav-link arrow-none waves-effect" href="#" role="button" @click="showNotificationFunction()">
                                <i class="fa fa-bell-o" aria-hidden="true" id="bell"></i>
                                <span class="badge badge-danger noti-icon-badge" id="badge">3</span>
                            </a>
                            <div class="dropdown-menu dropdown-menu-right dropdown-menu-lg" id="messageId" v-bind:class="{ recieptDropdown: (this.showNotification === true)}">
                                <!-- item-->
                                <div class="dropdown-item noti-title">
                                    <h5>Notification (3)</h5>
                                </div>
                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item active">
                                    <div class="notify-icon bg-success">
                                        <i class="mdi mdi-cart-outline"></i>
                                    </div>
                                    <p class="notify-details">
                                        <b>Your order is placed</b>
                                        <small class="text-muted">Dummy text of the printing and typesetting industry.</small>
                                    </p>
                                </a>
                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-warning">
                                        <i class="mdi mdi-message"></i>
                                    </div>
                                    <p class="notify-details">
                                        <b>New Message received</b>
                                        <small class="text-muted">You have 87 unread messages</small>
                                    </p>
                                </a>
                                <!-- item-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                    <div class="notify-icon bg-info">
                                        <i class="mdi mdi-martini"></i>
                                    </div>
                                    <p class="notify-details">
                                        <b>Your item is shipped</b>
                                        <small class="text-muted">It is a long established fact that a reader will</small>
                                    </p>
                                </a>
                                <!-- All-->
                                <a href="javascript:void(0);" class="dropdown-item notify-item">
                                        View All
                                    </a>
                            </div>
                        </li>
                        <!-- User-->
                        <li class="list-inline-item dropdown notification-list">
                            <a class="nav-link arrow-none waves-effect nav-user" role="button" @click="showProfileFunction()">
                                <img src="./../assets/profile.jpg" alt="user" class="rounded-circle">
                            </a>
                            <div class="dropdown-menu dropdown-menu-right profile-dropdown" id="showProfile" v-bind:class="{ recieptDropdown: (this.showProfile === true)}">
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
                        <li class="menu-item list-inline-item">
                            <!-- Mobile menu toggle-->
                            <a class="navbar-toggle nav-link">
                                <div class="lines">
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </div>
                            </a>
                            <!-- End mobile menu toggle-->
                        </li>
                    </ul>
                </div>
                <!-- end menu-extras -->
                <div class="menu-extras topbar-custom main-nav">
                    <ul class="list-inline float-right mb-0" id="breadcrumbs-two">
                        <li style="padding-top: 10px;"><span class="service"> SERVICES <i class="fa fa-angle-double-right" aria-hidden="true" id="roleIcon"></i></span></li>
                        <li>
                            <a class="active" href="team.html" data-target="navigation_1">
                                <i class="fa fa-user-o" aria-hidden="true"></i> Profile
                            </a>
                        </li>
                        <li>
                            <a href="#" data-target="navigation_2">
                                <i class="ti-agenda"></i> Get Hired
                            </a>
                        </li>
                        <li>
                            <a href="#" data-target="navigation_3">
                                <i class="fa fa-list-ul"></i> Work
                            </a>
                        </li>
                        <li>
                            <a href="#" class="last" data-target="navigation_4">
                                <i class="fa fa-dollar"></i> Get Paid
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
            <!-- end container -->
        </div>
        <!-- end topbar-main -->
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "TopNav",
  data() {
    return {
      showMenu: false,
      showEnvelop: false,
      showNotification: false,
      showProfile: false
    };
  },
  computed: {
    ...mapGetters({
      getCurrentTab: "getCurrentTab",
      getShow: "getShow"
    })
  },
  methods: {
    ...mapActions(["sendCurrentTab", "showDropdown"]),
    client: function() {
      this.sendCurrentTab("client");
    },
    teamMember: function() {
      this.sendCurrentTab("teamMember");
    },
    hr: function() {
      this.sendCurrentTab("hr");
    },
    companyAdmin: function() {
      this.sendCurrentTab("companyAdmin");
    },
    exchangeAdmin: function() {
      this.sendCurrentTab("exchangeAdmin");
    },
    superAdmin: function() {
      this.sendCurrentTab("superAdmin");
    },
    skills: function() {
      this.sendCurrentTab("skills");
    },
    show: function(e) {
      this.showMenu = !this.showMenu;
    },
    showEnvelopFunction: function(e) {
      this.showEnvelop = !this.showEnvelop;
    },
    showNotificationFunction: function(e) {
      this.showNotification = !this.showNotification;
    },
    showProfileFunction: function(e) {
      this.showProfile = !this.showProfile;
    },
    documentClick(e) {
      let self = this;
      let DropDown_Selector = $(".dropdown__menu");
      if (
        !DropDown_Selector.is(e.target) &&
        DropDown_Selector.has(e.target).length === 0
      ) {
        self.showMenu = false; // problem is this value false for first match dropdown only.
      }
    }
  },
  created() {
    document.onclick = this.documentClick;
  }
};
</script>

<style>
        .topbar-custom {
        border-radius: 0;
        margin-bottom: 0;
    }
    
    #breadcrumbs-two {
        overflow: hidden;
        width: auto;
        margin: 10px;
    }
    
    #breadcrumbs-two .active {
        background: #b9dce8;
        color: #343a40;
    }
    
    #breadcrumbs-two li {
        float: left;
        margin: 0 0.5em 0 1em;
        list-style: none;
        transition: all 0.3s ease-out;
    }
    
    #breadcrumbs-two a::before {
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -1.5em;
        border-width: 1.5em 0 1.5em 1em;
        border-style: solid;
        border-color: #00808e #00808e #00808e transparent;
        left: -1em;
    }
    
    .service {
        color: #909090 !important;
        font-weight: bold;
        font-size: 12px;
    }
    
    #breadcrumbs-two a {
        background: #00808e;
        padding: 0.7em 1em;
        float: left;
        text-decoration: none;
        color: #fff;
        position: relative;
    }
    
    #breadcrumbs-two .active:before {
        border-color: #b9dce8 #b9dce8 #b9dce8 transparent;
    }
    
    #breadcrumbs-two a::after {
        content: "";
        position: absolute;
        top: 50%;
        margin-top: -1.5em;
        border-top: 1.5em solid transparent;
        border-bottom: 1.5em solid transparent;
        border-left: 1em solid #00808e;
        right: -1em;
    }
    #breadcrumbs-two .last::after{
        right: 0em;
    }
    
    #breadcrumbs-two .active:after {
        border-left-color: #b9dce8;
    }
    
    #topnav .navbar-toggle span {
        height: 2px;
        width: 100%;
        background-color: #424858;
        display: block;
        margin-bottom: 5px;
        -webkit-transition: -webkit-transform .5s ease;
        transition: -webkit-transform .5s ease;
        transition: transform .5s ease;
    }
    
    #topnav .navbar-toggle {
        border: 0;
        position: relative;
        padding: 0;
        margin: 0;
        cursor: pointer;
    }
    
    #topnav .navbar-toggle .lines {
        width: 25px;
        display: block;
        position: relative;
        margin: 0 10px 0 0;
        padding-top: 13px;
        height: 23px;
        -webkit-transition: all .5s ease;
        transition: all .5s ease;
    }
    
    #topnav .navbar-toggle span {
        height: 2px;
        width: 100%;
        background-color: #424858;
        display: block;
        margin-bottom: 5px;
        -webkit-transition: -webkit-transform .5s ease;
        transition: -webkit-transform .5s ease;
        transition: transform .5s ease;
    }
    
    .topbar-custom {
        border-radius: 0;
        margin-bottom: 0;
    }
    
    @media (min-width: 992px) {
        #topnav .navbar-toggle {
            display: none;
        }
    }
        @media (min-width: 768px) {
            .navbar-toggle {
                display: block;
            }
        }
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
        #checkIcon {
            font-size: 15px;
            color: red;
        }
        #roleIcon {
            font-size: 17px !important;
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
        .recieptDropdown {
            display: block !important;
        }
        .profile-dropdown {
            width: 190px;
        }
        .dropdown-menu {
            padding: 4px 0;
            font-size: 15px;
            box-shadow: 0 2px 30px rgba(0, 0, 0, 0.08);
            border-color: #b9dce8;
        }
        .dropdown-item {
            padding: 6px 1.5rem;
        }
        #badge {
            position: absolute;
            top: 1px;
            left: 34px;
        }
        .dropdown-menu-lg {
            width: 270px;
        }
        .notification-list .noti-title h5 {
            margin: 0;
            font-size: 14px;
            text-transform: uppercase;
            font-weight: 700;
        }
        .notification-list .notify-item {
            padding: 10px 20px;
        }
        .notification-list .notify-item .notify-icon {
            float: left;
            height: 36px;
            width: 36px;
            line-height: 36px;
            text-align: center;
            margin-right: 10px;
            border-radius: 50%;
            color: #ffffff;
        }
        #messageId {
            position: absolute;
            transform: translate3d(-218px, -40px, 0px);
            top: 0;
            left: 0;
        }
        #showProfile {
            position: absolute;
            transform: translate3d(-218px, -40px, 0px);
            top: 0;
            left: 77px;
        }
        .notification-list .notify-item .notify-details {
            margin-bottom: 0;
            overflow: hidden;
            margin-left: 45px;
            text-overflow: ellipsis;
            white-space: nowrap;
        }
        .notification-list .notify-item .notify-details b {
            font-weight: 500;
        }
        .notification-list .notify-item .notify-details small {
            display: block;
            white-space: normal;
        }
        .dropdown-item.active,
        .dropdown-item:active {
            color: #0a1832;
            text-decoration: none;
            background-color: #eff3f6;
        }
        #bell {
            vertical-align: middle;
            font-size: 24px;
        }
        .nav-user img {
            height: 36px;
            width: 36px;
        }
</style>
