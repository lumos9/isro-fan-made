<template>
    <div class="about-container">
        <div id="intro" class="shadow-2-strong page-item-container">
            <div class="mainTitle">
                <!--<h6 id="title1" class="w-title">About</h6>-->
                <div class="display-6">To the Moon, Mars and beyond..</div>
            </div>
            <div>
                <div>
                    India is the only nation to reach Mars in the first attempt
                </div>
            </div>
        </div>
        <div class="container page-item-container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="m-3">
                        <h1>How It Started</h1>
                    </div>
                    <div class="d-flex align-items-center justify-content-center flex-wrap">
                        <div class="p-3">
                            <img src="../assets/story1.jpg" class="img-fluid rounded" />
                            <div class="p-3 fst-italic fw-lighter">Dr.Sarabhai and Dr.Kalam. A photograph from the early stages of the Indian space programme</div>
                        </div>
                        <div class="text-center">
                            <div class="p-3 fw-light">
                                <p>
                                    India decided to go to space when Indian National Committee for Space Research (INCOSPAR) was set up by the Government of India in 1962.
                                    With the visionary Dr. Vikram Sarabhai at its helm, INCOSPAR set up the Thumba Equatorial Rocket Launching Station (TERLS) in Thiruvananthapuram for upper atmospheric research.
                                </p>

                                <p>
                                    Indian Space Research Organisation, formed in 1969, superseded the erstwhile INCOSPAR.
                                    Vikram Sarabhai, having identified the role and importance of space technology in a Nation's development, provided ISRO the necessary direction to function as an agent of development.
                                    ISRO then embarked on its mission to provide the Nation space based services and to develop the technologies to achieve the same independently.
                                </p>

                                <p>
                                    Throughout the years, ISRO has upheld its mission of bringing space to the service of the common man, to the service of the Nation.
                                    In the process, it has become one of the six largest space agencies in the world. ISRO maintains one of the largest fleet of communication satellites (INSAT) and remote sensing (IRS) satellites, that cater to the ever growing demand for fast and reliable communication and earth observation respectively.
                                    ISRO develops and delivers application specific satellite products and tools to the Nation: broadcasts, communications, weather forecasts, disaster management tools, Geographic Information Systems, cartography, navigation, telemedicine, dedicated distance education satellites being some of them.
                                </p>

                                <p>
                                    To achieve complete self reliance in terms of these applications, it was essential to develop cost efficient and reliable launch systems, which took shape in the form of the Polar Satellite Launch Vehicle (PSLV).
                                    The famed PSLV went on to become a favoured carrier for satellites of various countries due to its reliability and cost efficiency, promoting unprecedented international collaboration.
                                    The Geosynchronous Satellite Launch Vehicle (GSLV) was developed keeping in mind the heavier and more demanding Geosynchronous communication satellites.
                                </p>

                                <p>
                                    Apart from technological capability, ISRO has also contributed to science and science education in the country.
                                    Various dedicated research centres and autonomous institutions for remote sensing, astronomy and astrophysics, atmospheric sciences and space sciences in general function under the aegis of Department of Space.
                                    ISRO's own Lunar and interplanetary missions along with other scientific projects encourage and promote science education, apart from providing valuable data to the scientific community which in turn enriches science.
                                </p>

                                <p>
                                    Future readiness is the key to maintaining an edge in technology and ISRO endeavours to optimise and enhance its technologies as the needs and ambitions of the country evolve.
                                    Thus, ISRO is moving forward with the development of heavy lift launchers, human spaceflight projects, reusable launch vehicles, semi-cryogenic engines, single and two stage to orbit (SSTO and TSTO) vehicles, development and use of composite materials for space applications etc
                                </p>
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
                        <div class="m-3">
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
</style>
