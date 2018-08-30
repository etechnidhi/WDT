<template>
     <div class="card  setup-content form" style="display: flex;" id="step-1">
            <div class="card-body form-body">
			 <h3 class="mt-0 header-title loginHeader">LOGIN</h3>
             <div class="form-content">
                <div class="form-group">
                    <label class="control-label inputLabel">Email Id</label>
                    <input maxlength="50" type="text" required="required" class="form-control" v-model="email" placeholder="Enter Email">
                </div>
                <div class="form-group">
                    <label class="control-label inputLabel">Password</label>
					 <input maxlength="16" type="password" required="required" v-model="password" class="form-control" placeholder="Enter Password">
                </div>
                <button class="btn btn-primary button" type="button">Login</button>
             </div>
            </div>
        </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'LoginForm',
  computed: {
    ...mapGetters({

    })
  },
  methods: {
    ...mapActions([])
  }
}
</script>

<style>
.form{
    width: 55%;
    margin: 0 auto;
    margin-top: 65px;
    border: 25px !important;
    border-radius: 8px;
}
.form-body{
    padding: 0;
}
.loginHeader{
    color: #00808e;
    margin-top: 50px !important;
    letter-spacing: 0.02em;
}
.form-content{
    padding: 50px;
    padding-top: 25px !important;
}
.inputLabel{
    float: left;
    font-weight: 600;
    font-size: 18px;
}

.button {
     width: 100%;
    padding: 10px;
    font-size: 20px;
    margin-top: 20px;
 }
</style>
