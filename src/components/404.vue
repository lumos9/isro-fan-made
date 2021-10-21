<template>
    <div class="404-container">
        <div id="notFound" class="intro bg-image shadow-2-strong page-item-container">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12 d-flex flex-column align-items-center justify-content-center">
                        <div class="mainTitle">
                            <div class="display-1">OOPS!</div>
                            <div class="display-2">404 PAGE NOT FOUND</div>
                            <div class="mt-4">
                            <router-link to="/">
                                <button type="button" class="btn btn-outline-dark btn-lg back-to-home">Go Home</button>
                            </router-link>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@500&display=swap');
.intro {
    background: no-repeat center;
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

#notFound {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.4)), url("../assets/notFound.png");
}

.mainTitle {
    font-family: 'Orbitron', sans-serif;
}

.back-to-home {
    color: white !important;
    border-color: white !important;
}

.back-to-home:hover {
    border-color: black !important;
    background-color: black !important;
}
</style>