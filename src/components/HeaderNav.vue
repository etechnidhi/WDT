<template>
    <div>
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
                        <li v-for="(key, index) in role[getRole]" :key="index">
                            <a href="team.html" data-target="navigation_1">
                                <i class="fa fa-user-o" aria-hidden="true"></i> {{key.title}}
                            </a>
                        </li>
                    </ul>
                </div>
                <div class="clearfix"></div>
            </div>
            <!-- end container -->
        </div>

    </div>
</template>

<script>
import role from './../json/role.json'
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'HeaderNav',
  data () {
      return {
        role: role
      }
  }
}
</script>

<style>

</style>
