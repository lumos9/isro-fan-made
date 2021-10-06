<template>
    <div class="missions-container" id="missions-content">
        <div class="page-container missions-item bg-image shadow-2-strong" id="overview">
            <div class="mainTitle">
                <div>
                    <div class="counter">
                        <vue3-autocounter
                            ref='counter'
                            :startAmount='0'
                            :endAmount='550' 
                            :duration='1'
                            separator=','
                            :autoinit='true'/>
                    </div>
                    <div>Total Missions</div>
                </div>
                <ul class="list-inline">
                    <li class="list-inline-item px-5">
                        <div class="counter">
                            <vue3-autocounter
                                ref='counter'
                                :startAmount='0'
                                :endAmount='112' 
                                :duration='1'
                                separator=','
                                :autoinit='true'/>
                        </div>
                        <div>Spacecraft Missions</div>
                    </li>
                    <li class="list-inline-item px-5">
                        <div class="counter">
                            <vue3-autocounter
                                ref='counter'
                                :startAmount='0'
                                :endAmount='82' 
                                :duration='1'
                                separator=','
                                :autoinit='true'/>
                        </div>
                        <div>Launch Missions</div>
                    </li>
                    <li class="list-inline-item px-5">
                        <div class="counter">
                            <vue3-autocounter
                                ref='counter'
                                :startAmount='0'
                                :endAmount='12' 
                                :duration='1'
                                separator=','
                                :autoinit='true'/>
                        </div>
                        <div>Student Missions</div>
                    </li>
                    <li class="list-inline-item px-5">
                        <div class="counter">
                            <vue3-autocounter
                                ref='counter'
                                :startAmount='0'
                                :endAmount='2' 
                                :duration='1'
                                separator=','
                                :autoinit='true'/>
                        </div>
                        <div>Re-entry Missions</div>
                    </li>
                    <li class="list-inline-item px-5">
                        <div class="counter">
                            <vue3-autocounter
                                ref='counter'
                                :startAmount='0'
                                :endAmount='342' 
                                :duration='1'
                                separator=','
                                :autoinit='true'/>
                        </div>
                        <div>International Missions</div>
                    </li>
                </ul>
            </div>
        </div>
        <div class="missions-list-container">
            <div class="missions-list-nav-container">
                <ul class="missions-list-nav">
                    <li v-for="(item, index) in items" v-bind:key="index" v-on:click="currentTab = item.year">
                        <div>{{ item.year }}</div>
                    </li>
                </ul>
            </div>
            <component v-bind:is="currentTabComponent"></component>
        </div>
    </div>
</template>

<script>
import Missions2019 from "./missions/Missions2019.vue";
import Missions2021 from "./missions/Missions2021.vue";
import MissionsFuture from "./missions/MissionsFuture.vue";

export default {
    data() {
        return {
            currentTab: 'Future',
            items: [
                {     
                    name: 'Future',
                    id: 'launch3',
                    year: 'Future'
                },
                {     
                    name: 'Chandrayan - 2',
                    id: 'launch2',
                    date: '22nd July 2021',
                    year: '2021'
                },
                { 
                    name: 'Chandrayan - 1',
                    id: 'launch1',
                    date: '22nd September 2019',
                    year: '2019'
                }
            ]
        }
    },
    computed: {
        currentTabComponent() {
            return 'Missions' + this.currentTab;
        }
    },
    components: {
        Missions2019,
        Missions2021,
        MissionsFuture
    }
};
</script>

<style scoped>
.missions-item {
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

.missions-list-container {
    height: 100vh;
}

.missions-list-nav {
    padding: 0;
}

.missions-list-nav > li {
    list-style: none;
    margin-top: 15px;
    cursor: pointer;
}

.missions-list-nav > li:hover {
    text-decoration: underline;
}

.missions-list-nav-container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    width: 10%;
    height: 100vh;
    position: absolute;
    padding-left: 5vw;
    padding-top: 3rem;
    padding-bottom: 3rem;
}

#overview {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url('../assets/missions_overview.jpg');
}

.counter {
    font-size: 7vh;
    text-align: center;
}

#title1 {
    font-size: 3rem !important;
}

.w-title {
    color: white;
}
</style>