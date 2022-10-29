<template>
    <div class="contact-container">
        <div class="full-screen-div page-item-container">
            <div class="mb-3">
                <div class="fs-1 mb-1">Contact Us</div>
                <div class="lead mb-4">Any questions or feedback? Just write a message!</div>
            </div>
            <div class="row m-auto container-xxl d-flex align-items-center justify-content-center">
                <div class="col-lg-6 d-flex align-items-center justify-content-evenly">
                    <div>
                        <div class="mb-5 text-start">
                            <div class="mb-5"><font-awesome-icon class="me-3" :icon="['fas', 'phone']" />+91-80-2217246</div>
                            <div class="mb-5"><font-awesome-icon class="me-3" :icon="['fas', 'envelope']" />icrb@isro.gov.in</div>
                            <div class="mb-5">
                                <div><font-awesome-icon class="me-3" :icon="['fas', 'location-dot']" />Antariksh Bhavan, New BEL Road, Bengaluru, India - 560 094</div>
                            </div>
                            <div class="mb-5">
                                <div><font-awesome-icon class="me-3" :icon="['far', 'clock']" />Monday - Friday, 9 AM - 5 PM, Indian Standard Time</div>
                            </div>
                            <div class="container">
                                <div class="row">
                                    <div class="col fs-5"><font-awesome-icon :icon="['fab', 'twitter']" /></div>
                                    <div class="col fs-5"><font-awesome-icon :icon="['fab', 'instagram']" /></div>
                                    <div class="col fs-5"><font-awesome-icon :icon="['fab', 'youtube']"/></div>
                                    <div class="col fs-5"><font-awesome-icon :icon="['fab', 'linkedin']" /></div>
                                    <div class="col fs-5"><font-awesome-icon :icon="['fab', 'facebook']" /></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="write-us-container">
                        <div>
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="firstName" placeholder="First name">
                                        <label for="firstName">First Name</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating">
                                        <input type="text" class="form-control" id="lastName" placeholder="Last name">
                                        <label for="lastName">Last Name</label>
                                    </div>
                                </div>
                            </div>
                            <div class="row mb-3">
                                <div class="col">
                                    <div class="form-floating">
                                        <input type="email" class="form-control" id="floatingEmail" placeholder="name@example.com">
                                        <label for="floatingEmail">Email address</label>
                                    </div>
                                </div>
                                <div class="col">
                                    <div class="form-floating">
                                        <input type="tel" class="form-control" id="floatingNumber" placeholder="+1 (888) 982 - 9080">
                                        <label for="floatingNumber">Phone Number</label>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="form-floating mb-3">
                                <input type="text" class="form-control" id="floatingSubject" placeholder="Subject">
                                <label for="floatingSubject">Subject</label>
                            </div>
                            <div class="form-floating mb-3">
                                <textarea class="form-control pt-5" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 200px"></textarea>
                                <label for="floatingTextarea2">Question / Feedback</label>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-md btn-outline-dark explore-button-opp">Send</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
</script>

<style scoped>
.write-us-container, .offices-container, .social-container {
    width: 90%;
    margin: auto;
}

.form-control {
    background-color: black;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.368);
}

.contact-heading {
    color: lightgrey;
    border-bottom: 1px solid grey
}
</style>
