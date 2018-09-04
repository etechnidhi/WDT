<template>
     <div class="card m-b-30 setup-content form" style="display: flex;" id="step-1">
            <div class="card-body form-body">
              <h3 class="mt-0 header-title loginHeader">LOGIN</h3>
              <div class="form-content">
                <div class="form-group">
                  <label class="control-label inputLabel">Email</label>
                  <input maxlength="50" type="text" required="required" class="form-control" v-model="email" placeholder="Enter Email">
                </div>
                <div class="form-group">
                  <label class="control-label inputLabel">Password</label>
                  <input maxlength='16' type='password' required='required' class='form-control' placeholder='Enter Password' v-model="password">
                </div>
                <button class="btn btn-primary button" type="button" @click="login">Login</button>
             </div>
            </div>
            <div class="error" v-if="isError == true">
              <p>{{getErrorMessage}}</p>
            </div>
        </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LoginForm',
  data () {
    return {
      email: '',
      password: ''
    }
  },
  watch: {
    getUser: function (value) {
      if (value.email) {
        this.$router.push('/home')
      }
    }
  },
  computed: {
    ...mapGetters({
      isError: 'isError',
      getErrorMessage: 'getErrorMessage',
      getUser: 'getUser'
    })
  },
  methods: {
    ...mapActions(['sendRole', 'sendError', 'loginDetail']),
    login: function () {
      this.loginDetail({
        email: this.email,
        password: this.password
      })
    }
  }
}
</script>

<style>
.form {
  margin-top: 100px !important;
  width: 50%;
  margin: 0 auto;
}
.inputLabel {
  float: left;
}
.button {
  float: right;
}
</style>
