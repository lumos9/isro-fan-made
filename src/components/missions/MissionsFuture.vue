<template>
    <div class="missions-item bg-image shadow-2-strong item-container" id="upcoming">
        <div class="container">
            <div class="row">
                <div class="col-lg-12 d-flex flex-column align-items-center justify-content-center">
                    <div class="mainTitle">
                        <p id="mission-date">June 2022</p>
                    </div>
                    <div class="mainTitle">
                        <h1 id="mission-title" class="display-4">Gaganyaan - 1</h1>
                    </div>
                    <div class="mainTitle">
                        <p id="mission-overview">A crewed orbital spacecraft (jointly made by ISRO and HAL) intended to be the basis of the Indian Human Spaceflight Programme. The spacecraft is being designed to carry three people, and a planned upgraded version will be equipped with rendezvous and docking capability. This will be the first of two flight tests prior to the inaugural crewed mission.</p>
                    </div>
                    <div class="mt-4">
                        <router-link to="/missions">
                            <button type="button" class="btn btn-outline-dark btn-lg explore-button">Learn More</button>
                        </router-link>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
#upcoming {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('../../assets/chandrayan 2.jpg');
}

#mission-overview {
    width: 60%;
    justify-content: center;
    margin: 1.5rem auto 0;
    color: lightgray;
}
</style>