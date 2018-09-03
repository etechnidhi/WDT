<template>
    <div id="sidebar-wrapper">
        <div class="tab">
            <button class="tablinks" onclick="openCity(event, 'project')" id="defaultOpen"><span class="step-num">1</span> <span class="title">Job Description</span>  <i class="tick fa fa-check-square-o"></i></button>
            <button class="tablinks" onclick="openCity(event, 'skills')"><span class="step-num">2</span> <span class="title">Skills Needed</span></button>
            <button class="tablinks" onclick="openCity(event, 'job')"><span class="step-num">3</span> <span class="title">Job Payment Info</span></button>
            <button class="tablinks" onclick="openCity(event, 'trans')"><span class="step-num">4</span> <span class="title">Transactional Details</span></button>
            <button class="tablinks" onclick="openCity(event, 'search')"><span class="step-num">5</span> <span class="title">Submit Info</span></button>
        </div>
    </div>
</template>

<script>
export default {
  name: 'Container'
}
</script>

<style>
</style>
