<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
    <div class="landing-container">
        <div id="intro" class="bg-image shadow-2-strong page-container">
            <div id="logo"></div>
            <div class="mainTitle">
                <!--<h1 id="title1" class="w-title">I<div class="fullform">ndian</div> S<div class="fullform">pace</div> R<div class="fullform">esearch</div> O<div class="fullform">rganisation</div></h1>-->
                <h1 id="title1" class="w-title">Indian Space Research Organisation</h1>
            </div>
            <div class="mainTitle">
                <h2 id="title2" class="w-title">Department of Space</h2>
            </div>
            <div class="mainTitle">
                <h4 id="title3" class="w-title">Government of India</h4>
            </div>
            <div id="india_flag"></div>
        </div>
    </div>
</template>

<style scoped>
#intro {
    background: no-repeat center;
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url("../assets/isro.jpg");
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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

#title1 {
    font-size: 3rem !important;
}

.w-title {
    color: white;
}
</style>
