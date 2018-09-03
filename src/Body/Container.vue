<template>
    <div class="tab-container">
        <div id="sidebar-wrapper">
            <div class="tab">
    
                <button class="tablinks" onclick="openCity(event, 'project')" id="defaultOpen"><span class="step-num">1</span> <span class="title">Job Description</span>  <i class="tick mdi mdi-checkbox-marked-outline"></i></button>
                <button class="tablinks" onclick="openCity(event, 'skills')"><span class="step-num">2</span> <span class="title">Skills Needed</span></button>
                <button class="tablinks" onclick="openCity(event, 'job')"><span class="step-num">3</span> <span class="title">Job Payment Info</span></button>
                <button class="tablinks" onclick="openCity(event, 'trans')"><span class="step-num">4</span> <span class="title">Transactional Details</span></button>
                <button class="tablinks" onclick="openCity(event, 'search')"><span class="step-num">5</span> <span class="title">Submit Info</span></button>
            </div>
        </div>
        <div id="myinfo" class="tabcontent">
            <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
    
                <div class="card-body">
                    <h3 class="mt-0 header-title">Confirm My Info</h3>
    
                    <div class="form-group row">
                        <label class="control-label col-sm-2">Joe Smith</label>
                        <div class="col-sm-6"><a href="">joesmith@gmail.com</a></div>
                        <div class="col-sm-4">
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" checked="checked" class="custom-control-input" id="customCheck1" data-parsley-multiple="groups" data-parsley-mincheck="2">
                                <label class="custom-control-label small" for="customCheck1">Keep my Name and Email private</label>
                            </div>
                        </div>
    
                    </div>
                    <div class="form-group">
                        <label class="control-label">Screen Name or Nick Name</label>
                        <input maxlength="100" type="text" required="required" class="form-control" placeholder="Your Nick Name...">
                    </div>
                    <button class="btn btn-primary nextBtn pull-right" type="button">Next</button>
                </div>
            </div>
        </div>
    
        <div id="project" class="tabcontent">
            <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
    
                <div class="card-body">
                    <h3 class="mt-0 header-title">Job Description</h3>
                    <!--  <div class="form-group">
                        <label class="control-label">Job Type</label> 
                        <select class="form-control">
                                                 <option></option>
                                                <option>Web Development</option>
                                                <option>Wordpress</option>
                                            </select>
                    </div> -->
                    <div class="form-group">
                        <label class="control-label">Job Title</label>
                        <input maxlength="" type="text" required="required" class="form-control" placeholder="Enter Job Title">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Job Description</label>
                        <textarea required="" class="form-control" rows="4" placeholder="Describe the work to be done"></textarea>
                    </div>
                    <div class="form-group">
                        <label>What type of Job do you have?</label>
                        <div>
                            <div class="form-check radio-pink-gap ">
                                <input name="group103" type="radio" class="form-check-input with-gap" id="radio109">
                                <label class="form-check-label" for="radio109">One-time Job</label>
                            </div>
    
                            <div class="form-check radio-pink-gap">
                                <input name="group103" type="radio" class="form-check-input with-gap" id="radio110" checked>
                                <label class="form-check-label" for="radio110">Ongoing Job</label>
                            </div>
    
                            <div class="form-check radio-pink-gap">
                                <input name="group103" type="radio" class="form-check-input with-gap" id="radio111">
                                <label class="form-check-label" for="radio111">I am not sure</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <button class="btn btn-primary " type="button">Previous</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-primary pull-right" type="button">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
        <div id="skills" class="tabcontent">
            <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
                <div class="card-body">
                    <div class="row">
                        <div class="col-md-4">
                            <div class="form-group">
                                <h3 class="mt-0 header-title">Primary Skills</h3>
                                <ul class="list-unstyled">
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 1 <i class="close fa fa-check"></i></span>
                                    </li>
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 2 <i class="close fa fa-check"></i></span>
                                    </li>
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 3 <i class="close fa fa-check"></i></span>
                                    </li>
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 4 <i class="close fa fa-times"></i></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="search-skill">
                                <div class="form-group has-feedback has-search">
                                    <span class="fa fa-search form-control-feedback"></span>
                                    <input type="text" class="form-control" placeholder="" style="padding-left: 1.75em;">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <h3 class="mt-0 header-title">Proficient Skills</h3>
                                <ul class="list-unstyled">
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 1 <i class="close fa fa-check"></i></span>
                                    </li>
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 2 <i class="close fa fa-times"></i></span>
                                    </li>
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 3 <i class="close fa fa-check"></i></span>
                                    </li>
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 4 <i class="close fa fa-check"></i></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="search-skill">
                                <div class="form-group has-feedback has-search">
                                    <span class="fa fa-search form-control-feedback"></span>
                                    <input type="text" class="form-control" placeholder="" style="padding-left: 1.75em;">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <div class="form-group">
                                <h3 class="mt-0 header-title">Additional Skills</h3>
                                <ul class="list-unstyled">
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 1 <i class="close fa fa-check"></i></span>
                                    </li>
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 2 <i class="close fa fa-check"></i></span>
                                    </li>
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 3 <i class="close fa fa-check"></i></span>
                                    </li>
                                    <li>
                                        <span class="badge badge-pill light-blue waves-effect">Skill 4 <i class="close fa fa-times"></i></span>
                                    </li>
                                </ul>
                            </div>
                            <div class="search-skill">
                                <div class="form-group has-feedback has-search">
                                    <span class="fa fa-search form-control-feedback"></span>
                                    <input type="text" class="form-control" placeholder="" style="padding-left: 1.75em;">
                                </div>
                            </div>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-primary " type="button">Previous</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-primary pull-right" type="button">Next</button>
                        </div>
                    </div>
                    PNote: Auto search implement to search skills and hit Enter button to add Skills in the above list.
                </div>
            </div>
        </div>
        <div id="job" class="tabcontent">
            <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
                <div class="card-body">
                    <h3 class="mt-0 header-title">Job Payment Info</h3>
                    <div class="form-group">
                        <label class="control-label">How would you like to pay?</label>
                        <select class="form-control" style="width: 30%;">                                            
                                                <option>Pay a Fixed Price</option>
                                                <option>Pay by the Hour</option>
                                            </select>
                    </div>
                    <div class="form-group">
                        <label class="control-label">Budget</label>
                        <div class="input-group bootstrap-touchspin" style="width: 30%;">
                            <span class="input-group-addon bootstrap-touchspin-prefix">$</span>
                            <input maxlength="100" type="text" required="required" class="form-control" placeholder="" style="width: 30%;">
                        </div>
                    </div>
                    <div class="form-group">
                        <label class="control-label">How long do you expect this job to last?</label>
                        <select class="form-control" style="width: 30%;">
                            <option>More than 6 months</option>
                            <option>3 to 6 months</option>
                            <option>1 to 3 months</option>
                            <option>Less than 1 month</option>
                            <option>Less than 1 week</option>
                        </select>
                    </div>
                    <div class="form-group">
                        <label>How many freelancers do you need to hire for this job?</label>
                        <div>
                            <div class="form-check radio-pink-gap ">
                                <input name="group103" type="radio" class="form-check-input with-gap" id="radio112">
                                <label class="form-check-label" for="radio109"> I want to hire one freelancer </label>
                            </div>
                            <div class="form-check radio-pink-gap">
                                <input name="group103" type="radio" class="form-check-input with-gap" id="radio113" checked>
                                <label class="form-check-label" for="radio110"> I need to hire more than one freelancer </label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <button class="btn btn-primary " type="button">Previous</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-primary pull-right" type="button">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="trans" class="tabcontent">
            <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
                <div class="card-body">
                    <h3 class="mt-0 header-title">Transactional Details</h3>
                    <div class="form-group">
                        <label class="control-label">Project Title</label>
                        <input maxlength="100" type="text" required="required" class="form-control" placeholder="">
                    </div>
                    <div class="form-group">
                        <label class="control-label">Account Number</label>
                        <input maxlength="100" type="text" required="required" class="form-control" placeholder=""> </div>
                    <div class="form-group">
                        <label class="control-label">Payment Method</label>
                        <div>
                            <div class="form-check radio-pink-gap ">
                                <input name="group103" type="radio" class="form-check-input with-gap" id="radio109">
                                <label class="form-check-label" for="radio114">Payment Method 1</label>
                            </div>
                            <div class="form-check radio-pink-gap">
                                <input name="group103" type="radio" class="form-check-input with-gap" id="radio110" checked="">
                                <label class="form-check-label" for="radio115">Payment Method 2</label>
                            </div>
                            <div class="form-check radio-pink-gap">
                                <input name="group103" type="radio" class="form-check-input with-gap" id="radio111">
                                <label class="form-check-label" for="radio116">Payment Method 3</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-6">
                            <button class="btn btn-primary " type="button">Previous</button>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-primary pull-right" type="button">Next</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="search" class="tabcontent">
            <div class="card m-b-30 setup-content" id="step-1" style="display: flex;">
                <div class="card-body">
                    <h3 class="mt-0 header-title">Search Info</h3>
                    <div class="form-group">
                        <label class="control-label">Search Keywords</label>
                        <textarea required="" class="form-control" rows="4" placeholder="Enter comma separated keywords."></textarea>
                    </div>
                    <div class="form-group">
                        <div>
                            <div class="custom-control custom-checkbox">
                                <input type="checkbox" class="custom-control-input" id="customCheck2" data-parsley-multiple="groups" data-parsley-mincheck="2">
                                <label class="custom-control-label" for="customCheck1">Display Public</label>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-2">
                            <button class="btn btn-primary " type="button">Previous</button>
                        </div>
                        <div class="col-md-2">
                            <button class="btn btn-primary pull-left" type="button">Save as Draft</button>
                        </div>
                        <div class="col-md-8">
                            <a href="exchangedesk/emails.html"> <button class="btn btn-primary pull-right" type="button">Post Job</button></a>
                        </div>
                    </div>
                </div>
            </div>
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
