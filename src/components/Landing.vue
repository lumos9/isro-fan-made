<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
    <div class="landing-container">
        <div class="nav-container">
            <nav class="navbar navbar-expand-lg navbar-dark bg-dark py-4">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">ISRO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul class="nav navbar-nav flex-fill justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Overview</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Missions</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Launches</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Careers</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div id="intro" class="bg-image shadow-2-strong"></div>
    </div>
</template>

<style scoped>

.nav-container {
    position: absolute;
    width: -webkit-fill-available;
}

.navbar-brand {
    color: white !important;
}

.navbar {
    background: linear-gradient(to top, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 100%) !important;
}

a {
    color: white !important;
    position: relative;
    padding-bottom: 0.2rem;
}

/* Fade in */
a::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    right: 0;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    height: 0.1em;
    background-color: white;
    opacity: 0;
    transition: opacity 300ms, transform 300ms;
}

a:hover {
    color: white;
}

a:hover::after,
a:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
}

#intro {
    background: url("../assets/isro.jpg") no-repeat center center fixed; 
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 100vh;
}
</style>
