<template>
    <div class="missions-container">
        <div id="intro" class="shadow-2-strong page-item-container">
            <div id="page-title">
                <div class="display-5">Missions</div>
            </div>
        </div>
        <div class="page-item-container">
            <div v-for="(mission, index) in missionsList" v-bind:key="mission.id" class="mission-item d-flex align-items-center justify-content-center">
                <div class="container">
                    <div class="row p-4 min-vh-100">
                        <div class="col-lg-8">
                            <div :style="{backgroundImage: `url(${mission.image})`}" class="mission-image"></div>
                        </div>
                        <div class="col-lg-4 d-flex align-items-center justify-content-center text-start">
                            <div>
                                <div class="display-6 mb-2">{{ mission.name }}</div>
                                <div class="lead mb-5">{{ mission.date }}</div>
                                <div class="fw-light about-overview">
                                    <p>
                                        {{ mission.overview }}
                                    </p>
                                    
                                </div>
                                <div class="my-5">
                                    <router-link to="/timeline">
                                        <button type="button" class="btn btn-outline-dark btn-md explore-button-opp">Learn More ></button>
                                    </router-link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    data() {
        return {
            missionsList: [
                {     
                    name: 'EOS - 2',
                    id: 'launch - EOS - 2',
                    date: '7th August 2022',
                    year: '2022',
                    image: 'images/eos-2.jpg',
                    overview: 'EOS-02 is an earth observation satellite designed and realised by ISRO. This microsat series satellite offers advanced optical remote sensing operating in infra-red band with high spatial resolution. The bus configuration is derived from IMS-1 bus'
                },
                /*{     
                    name: 'INS-2TD',
                    id: 'launch - INS-2TD',
                    date: '14th February, 2022',
                    year: '2022',
                    image: 'images/ins-2td.jpg',
                    overview: 'INS-2TD a technology demonstrator satellite from ISRO, which is a precursor to India-Bhutan Joint Satellite (INS-2B)'
                },*/
                {     
                    name: 'EOS-04',
                    id: 'launch - EOS - 04',
                    date: '14th February, 2022',
                    year: '2022',
                    image: 'images/eos-4.jpg',
                    overview: 'EOS-04 is a Radar Imaging Satellite designed to provide high quality images under all weather conditions for applications such as Agriculture, Forestry & Plantations, Soil Moisture & Hydrology and Flood mapping'
                },
                {     
                    name: 'EOS-03',
                    id: 'launch - EOS - 03',
                    date: '12th August, 2021',
                    year: '2021',
                    image: 'images/eos-3.jpg',
                    overview: 'EOS-03 is a state-of-the-art agile Earth observation satellite which will be placed in a Geosynchronous Transfer Orbit by GSLV-F10. Subsequently, the satellite will reach the final geostationary orbit using its onboard propulsion system'
                },
                {     
                    name: 'Chandrayan - 2',
                    id: 'launch2',
                    date: '22nd July 2021',
                    year: '2013',
                    image: 'images/chandrayan-2.jpg',
                    overview: 'Chandrayaan-2 mission is a highly complex mission, which represents a significant technological leap compared to the previous missions of ISRO. It comprised an Orbiter, Lander and Rover to explore the unexplored South Pole of the Moon. The mission is designed to expand the lunar scientific knowledge through detailed study of topography, seismography, mineral identification and distribution, surface chemical composition, thermo-physical characteristics of top soil and composition of the tenuous lunar atmosphere, leading to a new understanding of the origin and evolution of the Moon'
                },
                { 
                    name: 'Chandrayan - 1',
                    id: 'launch1',
                    date: '22nd October 2008',
                    year: '2008',
                    image: 'images/chandrayan-1.jpg',
                    overview: "Chandrayaan-1, India's first mission to Moon, was launched successfully on October 22, 2008 from SDSC SHAR, Sriharikota. The spacecraft was orbiting around the Moon at a height of 100 km from the lunar surface for chemical, mineralogical and photo-geologic mapping of the Moon. The spacecraft carried 11 scientific instruments built in India, USA, UK, Germany, Sweden and Bulgaria"
                }
            ]
        }
    }
};
</script>

<style scoped>
#intro {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

.mission-item {
    height: 100vh;
}

.mission-image {
    height: 100%;
    background: no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border-radius: 10px;
}
</style>