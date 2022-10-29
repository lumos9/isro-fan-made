<template>
    <div>
        <div id="intro" class="shadow-2-strong page-item-container">
            <!---<video autoplay muted loop id="lv-m3">
                <source src="../../assets/missions/lvm3-m2/new_video.mp4" type="video/mp4">
            </video>-->
            <div>
                <div class="display-4 mb-4">LVM3 M2 / OneWeb India - 1</div>
                <div class="lead">ISRO launches 36 OneWeb satellites to orbit on 23rd October 2022 at 00:07 IST</div>
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
                            LVM3-M2 is the dedicated commercial satellite mission of NewSpace India Limited
                            (NSIL), a Central Public Sector Enterprise (CPSE) under Department of Space,
                            Government of India. With this launch, LVM3 is making its entry into the "Global
                            Commercial Launch Service Market".
                            This mission is being undertaken as part of the commercial arrangement entered into
                            between NSIL and M/s. Network Access Associates Ltd. (M/s. OneWeb Ltd.),
                            a UK based company.
                            As part of this mission, 36 OneWeb Gen-1 satellites, meant for global connectivity
                            needs, will be launched from the Second Launch Pad (SLP) of SDSC-SHAR into circular
                            low earth orbit of 601 km altitude with an inclination of 87.4°.
                            This mission is the 5th flight of LVM3
                        </p>
                    </div>
                    <div class="w-60 m-auto text-start">
                        <div class="fs-5 mb-4"><font-awesome-icon class="me-3" :icon="['fas', 'location-dot']" />Satish Dhawan Space Centre, Sriharikota</div>
                        <div class="fs-5 mb-4"><font-awesome-icon class="me-3" :icon="['far', 'clock']" />22nd October 2022, 18:37 UTC</div>
                        <div class="fs-5 mb-4"><font-awesome-icon class="me-3" :icon="['far', 'clock']" />23rd October 2022, 00:07 IST</div>
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
                        <div class="col d-flex align-items-center justify-content-center">
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
                                                <td class="stats-data">2S200 Ignition</td>
                                                <td class="stats-data">0.00 secs</td>
                                                <td class="stats-data">0.024 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">L110 Ignition</td>
                                                <td class="stats-data">1m 46.48 secs</td>
                                                <td class="stats-data">46.534 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">2S200 Separation</td>
                                                <td class="stats-data">2m 10.30 secs</td>
                                                <td class="stats-data">73.062 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">PLF Separation</td>
                                                <td class="stats-data">2m 49.02 secs</td>
                                                <td class="stats-data">115.483 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">L110 Separation</td>
                                                <td class="stats-data">5m 3.56 secs</td>
                                                <td class="stats-data">282.206 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">C25 Ignition</td>
                                                <td class="stats-data">5m 5.96 secs</td>
                                                <td class="stats-data">286.326 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">C25 Shut-off</td>
                                                <td class="stats-data">15m 45.90 secs</td>
                                                <td class="stats-data">602.380 Km</td>
                                            </tr>
                                            <tr class="stats-row">
                                                <td class="stats-data">Sat-1 Separation</td>
                                                <td class="stats-data">19m 45.90 secs</td>
                                                <td class="stats-data">605.881 Km</td>
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
                            src="../../assets/missions/lvm3-m2/launch-vehicle/lv-1.jpg"
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
                                            <td class="text-end stats-data">LVM3</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Vehicle Height</td>
                                            <td class="text-end stats-data">43.5 m</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Lift-off Mass</td>
                                            <td class="text-end stats-data">644 t</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Number of Stages</td>
                                            <td class="text-end stats-data">3</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Strap-on Motors</td>
                                            <td class="text-end stats-data">2 X S200 (Solid)</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Core Stage</td>
                                            <td class="text-end stats-data">L110 (Liquid)</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Strap-on Motors</td>
                                            <td class="text-end stats-data">C25 (Cryo)</td>
                                        </tr>
                                        <tr class="stats-row">
                                            <td class="text-start stats-data">Fairing</td>
                                            <td class="text-end stats-data">5 m Ogive</td>
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
                            src="../../assets/missions/lvm3-m2/payload/payload-1.jpg"
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
                            src="../../assets/missions/lvm3-m2/gallery/1.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/2.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/3.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/4.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/5.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/6.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/7.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/12.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/9.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/10.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/11.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/8.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                            
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/13.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/15.jpg"
                            class="w-100 shadow-1-strong rounded mb-4"
                            />
                        </div>

                        <div class="col-lg-4 mb-4 mb-lg-0">
                            <img
                            src="../../assets/missions/lvm3-m2/gallery/17.jpg"
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url('../../assets/missions/lvm3-m2/intro.jpg');
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
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url('../../assets/missions/lvm3-m2/overview.jpg');
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