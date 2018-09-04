<template>
    <div id="sidebar-wrapper">
        <div class="tab" v-for="(val, index) in getLeftMenuData[getPageInfo.name]" :key="index">
            <button class="tablinks" v-bind:class="{ active: (getLeftMenuName.index === index)}" @click="openPageContent(val,index)" id="defaultOpen"><span class="step-num">{{index+1}}</span> <span class="title">{{val.title}} </span><i class="tick fa fa-check-square-o" id="leftMenuIcon" v-if="getLeftMenuName.index === index" aria-hidden="true"></i></button>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'LeftMenuBar',
  watch: {
    getLeftMenuName: function (val) {
      console.log(val.title, 'oooooooooooooooo')
      if (val.title === 'Job Desrciption') {
        this.$router.push('/createNewJob')
      }
      if (val.title === 'Skills Needed') {
        this.$router.push('/SkillNeededPage')
      }
      if (val.title === 'Job Payment Info') {
        this.$router.push('/jobPaymentInfoPage')
      }
      if (val.title === 'Transactional Details') {
        this.$router.push('/transactionalDetailPage')
      }
      if (val.title === 'Submit Info') {
        this.$router.push('/submitInfoPage')
      }
    }
  },
  computed: {
    ...mapGetters({
      getUser: 'getUser',
      getLeftMenuData: 'getLeftMenuData',
      getPageInfo: 'getPageInfo',
      getLeftMenuName: 'getLeftMenuName'
    })
  },
  methods: {
    ...mapActions(['LeftMenuContentName']),
    openPageContent: function (e, index) {
      this.LeftMenuContentName({
        subtitle: e.subtitle,
        title: e.title,
        index: index
      })
      // this.$router.push('/createNewJob')
    }
  }
}
</script>

<style>
.tab button.active {
    background-color: #0097a7;
    color: #fff;
    display: flex;
    border-radius: .25rem;
}
.tab button.active {
    background-color: #0097a7;
    color: #fff;
    display: flex;
    border-radius: .25rem;
}
.tab-container .title {
  font-size: 15.5px;
}
#leftMenuIcon{
  font-size: 21px;
}
</style>
