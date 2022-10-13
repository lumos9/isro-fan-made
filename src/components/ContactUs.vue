<template>
    <div class="contact-container">
        <div class="page-item-container container">
            <div class="write-us-container">
                <div class="display-5 my-5">Write to Us</div>
                    <div>
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
                                <textarea class="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 300px"></textarea>
                                <label for="floatingTextarea2">Question / Feedback</label>
                            </div>
                            <div>
                                <button type="submit" class="btn btn-lg btn-outline-dark explore-button-opp">Send</button>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="offices-container my-4">
                <div class="display-5 mb-4">Offices</div>
                <div class="d-flex align-items-center justify-content-center">
                        <div>
                            <div class="mb-4">
                                <div class="contact-heading mb-2">Hours of Operation</div>
                                <div>(Indian Standard Time)</div>
                                <div>Monday - Friday</div>
                                <div>9 AM - 5 PM</div>
                            </div>
                            <div class="mb-4">
                                <div class="contact-heading mb-2">Address</div>
                                <div>ISRO Headquarters</div>
                                <div>Antariksh Bhavan</div>
                                <div>New BEL Road</div>
                                <div>Bengaluru, India - 560 094</div>
                            </div>
                            <div class="mb-4">
                                <div class="contact-heading mb-2">Contact Info</div>
                                <div><font-awesome-icon icon="envelope" />icrb@isro.gov.in</div>
                                <div><font-awesome-icon icon="phone" />+91-80-22172465</div>
                            </div>
                        </div>
                    </div>
            </div>
            <div class="social-container">
                <div class="display-5 my-5">Follow Us</div>
                    <div class="d-flex align-items-center justify-content-center">
                        <div class="container">
                            <div class="row">
                                <div class="col fs-1"><font-awesome-icon :icon="['fab', 'twitter']" /></div>
                                <div class="col fs-1"><font-awesome-icon :icon="['fab', 'instagram']" /></div>
                                <div class="col fs-1"><font-awesome-icon :icon="['fab', 'youtube']"/></div>
                                <div class="col fs-1"><font-awesome-icon :icon="['fab', 'linkedin']" /></div>
                                <div class="col fs-1"><font-awesome-icon :icon="['fab', 'facebook']" /></div>
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
    height: -webkit-fill-available;
    width: 80%;
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
