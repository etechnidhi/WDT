<template>
  <div class="row">
    <div class="col-sm-12">
      <div class="page-title-box">
        <div class="btn-group pull-right">
          <ol class="breadcrumb hide-phone p-0 m-0" id="background">
            <li class="breadcrumb-item"><a href="#">Client Desk</a></li>
            <li class="breadcrumb-item active">Create New Job</li>
          </ol>
        </div>
        <h4 class="page-title" id="title">Create New Job</h4>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PageTitle'
}
</script>

<style>
  .breadcrumb-item+.breadcrumb-item::before {
    display: inline-block;
    padding-right: .5rem;
    padding-left: .5rem;
    color: #868e96;
    content: "/";
}
#title{
  float: left;
  font-weight: bold;
  color: black;
}
#background{
  background: transparent;
}
.breadcrumb-item.active {
    color: #868e96;
}
.page-title-box {
    padding: 1px 0 20px;
}
</style>
