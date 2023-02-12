<template>
    <div>
        <div id="intro" class="shadow-2-strong page-item-container">
            <!---<video autoplay muted loop id="lv-m3">
                <source src="../../assets/missions/sslv-d2_eos-07/new_video.mp4" type="video/mp4">
            </video>-->
            <div>
                <div class="display-4 mb-4">SSLV-D2 / EOS-07</div>
                <div class="lead">ISRO launches 3 satellites to orbit on 10th February 2023 at 09:18 AM IST</div>
                <div>
                    <div class="row my-4" v-if="days >= 0 && (hours > 0 || minutes > 0 || seconds > 0)">
                        <div class="col-lg-12 d-flex flex-column align-items-center justify-content-center">
                            <div>
                                <div class="fs-1 my-4"><font-awesome-icon class="me-3" :icon="['fas', 'rocket']" />Launch Countdown</div>
                                <ul class="list-inline">
                                    <li class="list-inline-item px-5 mb-3 timer">
                                        <div class="text-center display-3">{{ days }}</div>
                                        <div v-if="days > 1 || days == 0">Days</div>
                                        <div v-else-if="days == 1">Day</div>
                                    </li>
                                    <li class="list-inline-item px-5 mb-3 timer">
                                        <div class="text-center display-3">{{ hours }}</div>
                                        <div v-if="hours > 1 || hours == 0">Hours</div>
                                        <div v-else-if="hours == 1">Hour</div>
                                    </li>
                                    <li class="list-inline-item px-5 mb-3 timer">
                                        <div class="text-center display-3">{{ minutes }}</div>
                                        <div v-if="minutes > 1 || minutes == 0">Minutes</div>
                                        <div v-else-if="minutes == 1">Minute</div>
                                    </li>
                                    <li class="list-inline-item px-5 mb-3 timer">
                                        <div class="text-center display-3">{{ seconds }}</div>
                                        <div v-if="seconds > 1 || seconds == 0">Seconds</div>
                                        <div v-else-if="seconds == 1">Second</div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="my-4" v-if="days == 0 && hours <= 2">
                            <button type="button" class="btn btn-outline-dark btn-md explore-button-opp my-2 me-2">Watch Live Coverage</button>
                        </div>
                    </div>
                    <div class="my-4" v-else>
                        <button type="button" class="btn btn-outline-dark btn-md explore-button-opp my-2 me-2"><font-awesome-icon class="me-2" :icon="['fas', 'video']" />Launch Video</button>
                    </div>
                </div>
            </div>
        </div>
        <div>
            <div id="overview" class="full-screen-div d-flex align-items-center justify-content-center page-item-container">
                <div class="overview-content">
                    <div class="fs-1 mb-4">Overview</div>
                    <div id="overview-text" class="container lead">
                        <p>
                            The second developmental flight of Small Satellite Launch Vehicle (SSLV), SSLV-D2 is successfully launched on February 10, 2023 at 09:18 hours IST from the first launch pad at SDSC SHAR, Sriharikota. SSLV-D2 is intended to inject EOS-07, Janus-1 and AzaadiSAT-2 satellites into 450 km circular orbit, in its 15 minutes flight.

                            SSLV caters to the launch of up to 500 kg satellites to Low Earth Orbits on ‘launch-on-demand’ basis. It provides low-cost access to Space, offers low turn-around time and flexibility in accommodating multiple satellites, and demands minimal launch infrastructure. It is configured with three solid propulsion stages and a velocity terminal module. It is a 34 m tall, 2 m diameter vehicle having a lift-off mass of 120 t.

                            EOS-07 is 156.3 kg satellite designed, developed and realized by ISRO. New experiments include mm-Wave Humidity Sounder and Spectrum Monitoring Payload. Janus-1, a 10.2 kg satellite belongs to ANTARIS, USA. A 8.7 kg satellite AzaadiSAT-2 is a combined effort of about 750 girl students across India guided by Space Kidz India, Chennai.
                        </p>
                    </div>
                    <div class="w-60 m-auto text-center">
                        <div class="fs-5 mb-4"><font-awesome-icon class="me-3" :icon="['fas', 'location-dot']" />Satish Dhawan Space Centre, Sriharikota</div>
                        <div class="fs-5 mb-4"><font-awesome-icon class="me-3" :icon="['far', 'clock']" />10th February 2023, 09:18 AM UTC</div>
                        <div class="fs-5 mb-4"><font-awesome-icon class="me-3" :icon="['far', 'clock']" />10th February 2023, 09:18 AM IST</div>
                    </div>
                    
                </div>
                
            </div>
            <div id="launchvideo" class="full-screen-div d-flex align-items-center justify-content-center">
                <div>
                    <div class="fs-1 mb-5">Launch Video</div>
                    <div>
                        <iframe class="youtube-video" src="https://www.youtube.com/embed/dao7OrlESmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                </div>
            </div>
            <div id="timeline" class="full-screen-div d-flex align-items-center justify-content-center">
                <div class="container-xxl m-auto row">
                    <div class="fs-1 mb-5">Timeline</div>
                        <div class="col d-flex align-items-center justify-content-center mb-5">
                            <div class="stats">
                                <div class="table-responsive">
                                    <table class="stats-table lead">
                                        <tbody>
                                            <tr class="stats-row fw-normal">
                                                <th class="stats-data">Event</th>
                                                <th class="stats-data">Flight Time</th>
                                                <th class="stats-data">Altitude</th>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">SS1 Ignition</td>
                                                <td class="stats-data">0.00 secs</td>
                                                <td class="stats-data">0.00 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">SS2 Ignition</td>
                                                <td class="stats-data">1m 46.48 secs</td>
                                                <td class="stats-data">94 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">SS1 Separation</td>
                                                <td class="stats-data">2m 10.30 secs</td>
                                                <td class="stats-data">94 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">S2C Separation</td>
                                                <td class="stats-data">2m 49.02 secs</td>
                                                <td class="stats-data">103 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">SPLF Separation</td>
                                                <td class="stats-data">5m 3.56 secs</td>
                                                <td class="stats-data">149 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">SS2 Separation</td>
                                                <td class="stats-data">5m 5.96 secs</td>
                                                <td class="stats-data">423 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">SS3 Ignition</td>
                                                <td class="stats-data">1m 46.48 secs</td>
                                                <td class="stats-data">429 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">SS3 Separation</td>
                                                <td class="stats-data">1m 46.48 secs</td>
                                                <td class="stats-data">450 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">VTM Ignition</td>
                                                <td class="stats-data">1m 46.48 secs</td>
                                                <td class="stats-data">450 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">EOS-07 Separation</td>
                                                <td class="stats-data">15m 45.90 secs</td>
                                                <td class="stats-data">450 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">Janus-1 Separation</td>
                                                <td class="stats-data">15m 45.90 secs</td>
                                                <td class="stats-data">450 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">AzaadiSAT-2 Separation</td>
                                                <td class="stats-data">19m 45.90 secs</td>
                                                <td class="stats-data">450 Km</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                </div>
            </div>
            <div id="launchvehicle" class="full-screen-div d-flex align-items-center justify-content-center">
                <div class="container-xxl m-auto row">
                    <div class="fs-1 mb-5">Launch Vehicle</div>
                    <div class="col-lg-6">
                        <div id="lv-image">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/launch-vehicle/1.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>
                    </div>
                    <div class="col-lg-6 my-5 d-flex align-items-center justify-content-center">
                        <div class="stats">
                            <div class="fs-3 mb-2">Stats</div>
                            <div>
                                <table class="stats-table lead">
                                    <tbody>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Vehicle Name</td>
                                            <td class="text-end stats-data">SSLV-D2</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Vehicle Height</td>
                                            <td class="text-end stats-data">34 m</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Vehicle Diameter</td>
                                            <td class="text-end stats-data">2 m</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Lift-off Mass</td>
                                            <td class="text-end stats-data">~ 119 t</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="payload" class="full-screen-div d-flex align-items-center justify-content-center">
                <div class="container-xxl m-auto row">
                    <div class="fs-1 mb-5">Payload</div>
                    <div class="col-lg-6">
                        <div id="payload-image">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/payload/payload-1.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>
                    </div>
                    <div class="col-lg-6 my-5 d-flex align-items-center justify-content-center">
                        <div class="stats">
                            <div class="fs-3 mb-2">Stats</div>
                            <div>
                                <table class="stats-table lead">
                                    <tbody>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Number of Satellites</td>
                                            <td class="text-end stats-data">36</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Each Satellite Mass</td>
                                            <td class="text-end stats-data">150 Kg</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Total Mass</td>
                                            <td class="text-end stats-data">5,796 Kg</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!---<div id="science" class="full-screen-div d-flex align-items-center justify-content-center">
                <div>
                    <div class="fs-1 mb-5">Science</div>
                </div>
            </div>-->
            <div id="gallery" class="container full-screen-div d-flex align-items-center justify-content-center">
                <div>
                    <div class="fs-1 mb-5">Gallery</div>
                    <!-- Gallery -->
                    <div class="row text-center text-lg-start">
                        <div class="col-lg-4 col-md-12 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/1.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/2.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/3.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/4.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/5.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/6.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/7.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/12.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/9.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/10.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/11.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/8.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/13.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/15.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/sslv-d2_eos-07/gallery/17.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>
                    </div>
                    <!-- Gallery -->
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    data() {
        return {
            diff: (new Date("10/22/2022 18:37:00 UTC").getTime() - new Date().getTime()) / 1000,
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };
    },
    created() {
        var secs = parseInt(this.diff, 10);
        this.days = this.pad(Math.floor(secs / (3600 * 24)), 2);
        secs -= this.days * 3600 * 24;
        this.hours = this.pad(Math.floor(secs / 3600), 2);
        secs -= this.hours * 3600;
        this.minutes = this.pad(Math.floor(secs / 60), 2);
        secs -= this.minutes * 60;
        this.seconds = this.pad(secs, 2);
    },
    mounted() {
        const stopCountdown = setInterval(() => {
            this.diff -= 1;
            var secs = parseInt(this.diff, 10);
            this.days = this.pad(Math.floor(secs / (3600 * 24)), 2);
            secs -= this.days * 3600 * 24;
            this.hours = this.pad(Math.floor(secs / 3600), 2);
            secs -= this.hours * 3600;
            this.minutes = this.pad(Math.floor(secs / 60), 2);
            secs -= this.minutes * 60;
            this.seconds = this.pad(secs, 2);
            if (!this.diff) {
                clearInterval(stopCountdown);
            }
        }, 1000);
    },
    methods: {
        pad(num, size) {
            num = num.toString();
            while (num.length < size) num = "0" + num;
            return num;
        }
    }
};
</script>

<style scoped>
#intro {
    background: no-repeat center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url('../../assets/missions/sslv-d2_eos-07/intro.jpg');
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

#overview {
    background: no-repeat center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url('../../assets/missions/sslv-d2_eos-07/overview.jpg');
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}

.overview-content {
    background-color: rgb(0, 0, 0, 0.7);
    padding: 3rem;
    border-radius: 25px;

}

#overview-text p {
    margin: 1;
    text-indent: 2rem;
    text-align: justify;
}

.stats {
    width: 80%;
    margin: auto;
}

.stats-table {
    width: 100%;
    text-align: center;
}

th, td {
    width: 33.33%;
}

.stats-row {
    border-bottom: 0.2px solid grey;
    padding: 3rem;
}

.stats-data {
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>