<template>
    <div>
        <b-nav class="d-flex justify-content-end text-dark" id="topnav">
            <b-nav-item id="role" disabled>ROLE <i class="fa fa-angle-double-right fa-lg" aria-hidden="true"></i></b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === 'client')}" @click="client"><i class="fa fa-check fa-1x" id="check" aria-hidden="true"></i>Client</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === 'teamMember')}" @click="teamMember">Team Member</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === true)}" @click="Hr">HR</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === true)}" @click="CompanyAdmin">Company Admin</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === true)}" @click="exchangeAmin">Exchange Admin</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === true)}" @click="superAdmin">Super Admin</b-nav-item>
            <b-nav-item v-bind:class="{ active: (currentTab === true)}" @click="skills">Skills</b-nav-item>
        </b-nav>
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
    ...mapActions(['sendCurrentTab']),
    client: function () {
      this.sendCurrentTab({
        currentTab: 'client'
      })
    },
    teamMember: function () {
      this.sendCurrentTab({
        currentTab: 'teamMember'
      })
    }
  }
}
</script>

<style>
#topnav{
    border-bottom: 1px solid #eee;
    font-size: 12px;
}
a,
a:hover{
    color: black;
}
#role{
    font-weight: bold;
    color: #909090 !important;
    margin-right: 10px;
}
.fa-lg {
        font-size: 1.53em;
}
#check{
    color: red;
}
.active{
    font-weight: bold;
}
</style>
