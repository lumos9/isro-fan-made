<template>
    <div class="about-container">
        <div id="intro" class="shadow-2-strong page-item-container">
            <div class="mainTitle">
                <!--<h6 id="title1" class="w-title">About</h6>-->
                <div class="display-6">To the Moon, Mars and beyond..</div>
            </div>
            <div>
                <div class="lead">
                    India is the only nation to reach Mars in the first attempt
                </div>
            </div>
        </div>
        <div class="container page-item-container">
            <div class="row m-5">
                <div class="col-lg-12">
                    <div class="mb-5">
                        <h1>How It Started</h1>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <div>
                                    <img src="../assets/early.jpeg" class="img-fluid rounded" />
                                    <div class="fst-italic fw-lighter">(Credits: Henri Cartier-Bresson)</div>
                                    <div class="fst-italic fw-lighter mb-3">On the right: engineer, CR Sathya. His assistant, Velappan Nair, transporting one of the very first nose cones to the lab.</div>
                                </div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <div class="fw-light about-overview">
                                    <p>
                                        India decided to go to space when Indian National Committee for Space Research (INCOSPAR) was set up by the Government of India in 1962.
                                        With the visionary Dr. Vikram Sarabhai at its helm, INCOSPAR set up the Thumba Equatorial Rocket Launching Station (TERLS) in Thiruvananthapuram for upper atmospheric research.
                                    </p>

                                    <p>
                                        Indian Space Research Organisation (ISRO), formed in 1969, superseded the erstwhile INCOSPAR.
                                        Vikram Sarabhai, having identified the role and importance of space technology in a nation's development, provided ISRO the necessary direction to function as an agent of development.
                                        ISRO then embarked on its mission to provide the nation, space based services and to develop the technologies to achieve the same independently.
                                    </p>

                                    <p>
                                        Throughout the years, ISRO has upheld its mission of bringing space to the service of the common man, to the service of the nation.
                                        In the process, it has become one of the six largest space agencies in the world. ISRO maintains one of the largest fleet of communication satellites (INSAT) and remote sensing (IRS) satellites, that cater to the ever growing demand for fast and reliable communication and earth observation respectively.
                                        ISRO develops and delivers application specific satellite products and tools to the nation: broadcasts, communications, weather forecasts, disaster management tools, Geographic Information Systems, cartography, navigation, telemedicine, dedicated distance education satellites being some of them. With its achievements in the field of space sciences, ISRO has become of the most effecient space-based organizations on planet Earth
                                    </p>
                                    <div class="m-5">
                                        <router-link to="/timeline">
                                            <button type="button" class="btn btn-outline-dark btn-md explore-button-opp">Explore Timeline</button>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
            </div>
        </div>
        <div class="missions-item bg-image shadow-2-strong page-item-container" id="overview">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="my-5">
                            <h1>How It's Going</h1>
                        </div>
                        <div class="mainTitle">
                            <div class="mb-3">
                                <div class="text-center display-2">
                                    <vue3-autocounter
                                        ref='counter'
                                        :startAmount='0'
                                        :endAmount='550' 
                                        :duration='1'
                                        separator=','
                                        :autoinit='true'/>
                                </div>
                                <div>Total Missions</div>
                            </div>
                            <ul class="list-inline">
                                <li class="list-inline-item px-5 mb-3">
                                    <div class="text-center display-2">
                                        <vue3-autocounter
                                            ref='counter'
                                            :startAmount='0'
                                            :endAmount='112' 
                                            :duration='1'
                                            separator=','
                                            :autoinit='true'/>
                                    </div>
                                    <div>Spacecraft Missions</div>
                                </li>
                                <li class="list-inline-item px-5 mb-3">
                                    <div class="text-center display-2">
                                        <vue3-autocounter
                                            ref='counter'
                                            :startAmount='0'
                                            :endAmount='82' 
                                            :duration='1'
                                            separator=','
                                            :autoinit='true'/>
                                    </div>
                                    <div>Launch Missions</div>
                                </li>
                                <li class="list-inline-item px-5 mb-3">
                                    <div class="text-center display-2">
                                        <vue3-autocounter
                                            ref='counter'
                                            :startAmount='0'
                                            :endAmount='12' 
                                            :duration='1'
                                            separator=','
                                            :autoinit='true'/>
                                    </div>
                                    <div>Student Missions</div>
                                </li>
                                <li class="list-inline-item px-5 mb-3">
                                    <div class="text-center display-2">
                                        <vue3-autocounter
                                            ref='counter'
                                            :startAmount='0'
                                            :endAmount='2' 
                                            :duration='1'
                                            separator=','
                                            :autoinit='true'/>
                                    </div>
                                    <div>Re-entry Missions</div>
                                </li>
                                <li class="list-inline-item px-5 mb-3">
                                    <div class="text-center display-2">
                                        <vue3-autocounter
                                            ref='counter'
                                            :startAmount='0'
                                            :endAmount='342' 
                                            :duration='1'
                                            separator=','
                                            :autoinit='true'/>
                                    </div>
                                    <div>International Missions</div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="mt-4">
                <router-link to="/missions">
                    <button type="button" class="btn btn-outline-dark btn-lg explore-button">Explore All Missions</button>
                </router-link>
            </div>
        </div>
    </div>
</template>

<style scoped>
#intro {
    background: no-repeat center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url("../assets/mars.jpg");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}

.w-title {
    color: white;
}

.missions-item {
    background: no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
}

#overview {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url('../assets/missions_overview.jpg');
}

#title1 {
    font-size: 3rem !important;
}

.w-title {
    color: white;
}

.about-overview p {
    margin: 1;
    text-indent: 2rem;
    text-align: justify;
}
</style>
