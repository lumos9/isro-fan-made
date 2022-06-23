<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
</script>

<template>
    <div class="app-container">
        <div class="nav-container">
            <nav class="navbar navbar-expand-lg navbar-dark">
                <div class="container-fluid">
                    <router-link to="/" class="navbar-brand">
                        <img src="./assets/isro_logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">
                        ISRO
                    </router-link>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="nav navbar-nav flex-fill justify-content-end">
                            <li class="nav-item">
                                <router-link to="/" class="nav-link active px-4 view-link">
                                    <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</div>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/about" class="nav-link px-4 view-link">
                                    <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</div>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/missions" class="nav-link px-4 view-link">
                                    <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Missions</div>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/careers" class="nav-link px-4 view-link">
                                    <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Careers</div>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/newsroom" class="nav-link px-4 view-link">
                                    <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Newsroom</div>
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link to="/contact" class="nav-link px-4 view-link">
                                    <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact</div>
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div id="page">
            <router-view />
        </div>
        <footer class="py-4">
            <div><img src="./assets/isro_logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top"> ISRO © {{ new Date().getFullYear() }}</div>
        </footer>
    </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Ubuntu:wght@300;400;500&display=swap');

html {
    scroll-behavior: smooth;
}

#app {
    font-family: 'Ubuntu', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: white;
    background-color: black;
}

.nav-container {
    position: fixed;
    width: -webkit-fill-available;
    z-index: 2;
    height: 6rem;
}

.navbar-brand {
    color: white !important;
    text-decoration: none !important;
}

.navbar {
    background: linear-gradient(to top, rgba(0,0,0, 0) 0%,rgba(0,0,0, 1) 100%) !important;
    padding: 1.5rem !important;
    font-weight: 500;
}

/*.navbar {
  background: transparent !important;
}*/

a {
    color: white !important;
    text-decoration: none !important;
    cursor: pointer;
}

/*
.view-link {
    position: relative;
    padding-bottom: 0.2rem;
}

.view-link::after {
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
    transition: opacity 300ms ease-in-out, transform 300ms ease-in-out;
}

.view-link:hover::after, .view-link:focus::after {
    opacity: 1;
    transform: translate3d(0, 0.2em, 0);
}

.view-link:hover {
    color: white;
}*/

.view-link {
  position: relative;
  color: inherit;
  text-decoration: none;
  line-height: 24px;
}
.view-link:before, .view-link:after {
  content: '';
  position: absolute;
  transition: transform .2s ease-out;
}

/* Fade in
.view-link::after {
    content: '';
    position: absolute;
    transition: transform 0.2s ease-in-out;
} */

.view-link:before, .view-link:after {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-style: solid;
  border-color: white;
}
.view-link:before {
  border-width: 2px 0 2px 0;
  transform: scaleX(0);
}
.view-link:after {
  border-width: 0 2px 0 2px;
  transform: scaleY(0);
}
.view-link:hover:before, .view-link:hover:after {
  transform: scale(1, 1);
}

.explore-button {
    color: white !important;
    border-color: white !important;
}

.explore-button:hover {
    border-color: black !important;
    background-color: black !important;
}

.page-item-container {
    padding-top: 5rem;
    padding-left: 3rem;
    padding-right: 3rem;
}

footer {
    z-index: 2;
}

::-webkit-scrollbar {
    width: 10px;
}
 
::-webkit-scrollbar-track {
    background: rgb(0, 0, 0);
}
 
::-webkit-scrollbar-thumb {
    background: rgb(136, 136, 136);
    border-radius: 8px;
}

::-webkit-scrollbar-thumb:hover {
    background: rgb(100, 100, 100);
}

::-webkit-scrollbar-thumb:hover {
    background: rgb(241, 230, 230);
}
</style>
