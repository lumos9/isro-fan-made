<template>
    <div class="landing-container">
        <!--<div id="latestUpdate" class="intro bg-image shadow-2-strong page-item-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 d-flex flex-column align-items-center justify-content-center">
                        <div class="mainTitle">
                            <h1 id="title1" class="display-5 timer">COUNTDOWN TO NEXT LAUNCH</h1>
                            <ul class="list-inline">
                                <li class="list-inline-item px-5 mb-3 timer" v-if="days > 0">
                                    <div class="text-center display-1">{{ days }}</div>
                                    <div v-if="days > 1">Days</div>
                                    <div v-else-if="days == 1">Day</div>
                                </li>
                                <li class="list-inline-item px-5 mb-3 timer" v-if="hours > 0">
                                    <div class="text-center display-1">{{ hours }}</div>
                                    <div v-if="hours > 1">Hours</div>
                                    <div v-else-if="hours == 1">Hour</div>
                                </li>
                                <li class="list-inline-item px-5 mb-3 timer">
                                    <div class="text-center display-1">{{ minutes }}</div>
                                    <div v-if="minutes > 1 || minutes == 0">Minutes</div>
                                    <div v-else-if="minutes == 1">Minute</div>
                                </li>
                                <li class="list-inline-item px-5 mb-3 timer">
                                    <div class="text-center display-1">{{ seconds }}</div>
                                    <div v-if="seconds > 1 || seconds == 0">Seconds</div>
                                    <div v-else-if="seconds == 1">Second</div>
                                </li>
                            </ul>
                        </div>-->
                        <!--<div class="display-6">{{ formatedCountdown || "countdown over" }}</div>-->
                    <!--</div>
                </div>
            </div>
        </div>-->
        <div id="overview" class="intro bg-image shadow-2-strong page-item-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 d-flex flex-column align-items-center justify-content-center">
                        <div id="logo"></div>
                        <div class="mainTitle">
                            <!--<h1 id="title1" class="w-title">I<div class="fullform">ndian</div> S<div class="fullform">pace</div> R<div class="fullform">esearch</div> O<div class="fullform">rganisation</div></h1>-->
                            <h1 id="title1" class="display-4">Indian Space Research Organisation</h1>
                        </div>
                        <div class="mainTitle">
                            <h2 id="title2" class="display-6">Department of Space</h2>
                        </div>
                        <div class="mainTitle">
                            <h4 id="title3" class="display-6">Government of India</h4>
                        </div>
                        <div id="india_flag"></div>
                        <div class="mt-4">
                            <router-link to="/missions">
                                <button type="button" class="btn btn-outline-dark btn-lg explore-button">Explore Missions</button>
                            </router-link>
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
            diff: (new Date("06/26/2022").getTime() - new Date().getTime()) / 1000,
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
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');
.intro {
    background: no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

#latestUpdate {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url("../assets/isro_animated.jpeg");
}

#overview {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url("../assets/isro.jpg");
}

.timer {
    font-family: 'Orbitron', sans-serif;
}

.fullform {
    display: inline-block;
}

#logo {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../assets/isro_logo.png");
    width: 20vh;
    height: 20vh;
}

#india_flag {
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    background-image: url("../assets/india_flag.jpg");
    width: 5vh;
    height: 3.5vh;
}
</style>
