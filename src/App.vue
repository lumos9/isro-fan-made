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
                <!--<img src="./assets/isro_logo.png" alt="" width="30" height="24" class="d-inline-block align-text-top">-->
                ISRO
              </router-link>
              <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
              </button>
              <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="nav navbar-nav flex-fill justify-content-center">
                      <li class="nav-item">
                          <router-link to="/" class="nav-link active px-4">
                            <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Home</div>
                          </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/about" class="nav-link px-4">
                          <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">About</div>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/missions" class="nav-link px-4">
                          <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Missions</div>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/careers" class="nav-link px-4">
                          <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Careers</div>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/contact" class="nav-link px-4">
                          <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Contact Us</div>
                        </router-link>
                      </li>
                      <li class="nav-item">
                        <router-link to="/updates" class="nav-link px-4">
                          <div data-bs-toggle="collapse" data-bs-target=".navbar-collapse.show">Updates</div>
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
  
  <!--<Landing msg="Landing" />-->
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
    position: relative;
    padding-bottom: 0.2rem;
    text-decoration: none !important;
    cursor: pointer;
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

.page-container {
  padding-top: 8rem;
  padding-left: 3rem;
  padding-right: 3rem;
  padding-bottom: 6rem;
}

footer {
  z-index: 2;
}
</style>
