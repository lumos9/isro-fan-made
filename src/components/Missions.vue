<template>
    <div class="container page-item-container">
        <div v-for="(mission, index) in missionsList" v-bind:key="mission.id" class="mission-item d-flex align-items-center justify-content-center">
            <div class="row mx-2">
                <div class="col-lg-12">
                    <div class="mb-5">
                        <h1>{{ mission.name }}</h1>
                    </div>
                    <div class="container">
                        <div class="row">
                            <div class="col-lg-6">
                                <div :style="{backgroundImage: `url(${mission.image})`}" class="mission-image"></div>
                            </div>
                            <div class="col-lg-6 d-flex align-items-center justify-content-center">
                                <div>
                                    <div class="lead my-5">{{ mission.date }}</div>
                                    <div class="fw-light about-overview">
                                        <p>
                                            Indian Space Research Organisation (ISRO), formed in 1969, superseded the erstwhile INCOSPAR.
                                            Vikram Sarabhai, having identified the role and importance of space technology in a nation's development, provided ISRO the necessary direction to function as an agent of development.
                                            ISRO then embarked on its mission to provide the nation, space based services and to develop the technologies to achieve the same independently.
                                        </p>
                                        
                                    </div>
                                    <div class="m-5">
                                        <router-link to="/timeline">
                                            <button type="button" class="btn btn-outline-dark btn-lg explore-button-opp">Learn More</button>
                                        </router-link>
                                    </div>
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
                    name: 'Future',
                    id: 'launch3',
                    year: 'Future',
                    image: 'images/future.jpg'
                },
                {     
                    name: 'Chandrayan - 2',
                    id: 'launch2',
                    date: '22nd July 2021',
                    year: '2013',
                    image: 'images/chandrayan-2.jpg'
                },
                { 
                    name: 'Chandrayan - 1',
                    id: 'launch1',
                    date: '22nd September 2019',
                    year: '2019',
                    image: 'images/isro.jpg'
                }
            ]
        }
    }
};
</script>

<style scoped>
.mission-item {
    height: -webkit-fill-available;
}

.mission-image {
    height: 500px;
    background: no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    border-radius: 30px;
}
</style>