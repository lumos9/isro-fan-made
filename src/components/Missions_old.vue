<template>
    <div class="timeline-container" id="timeline-content">
        <div class="timeline-nav-container container-fluid" id="timeline-nav-content">
            <div class="row timeline-nav">
		        <div class="col-md-auto">
                    <ul class="timeline">
                        <li v-for="(item, index) in items" v-bind:key="index">
                            <!--<div class="row" v-if="index == 0">
                                <div class="col">
                                    <a :href="'#' + item.id" class="timeline-nav-link">
                                        <div>
                                            <div>{{ item.name }}</div>
                                        </div>
                                    </a>
                                </div>
                            </div> -->
                            <div class="row" v-if="index > 0">
                                <div class="col">
                                    <a :href="'#' + item.id" class="timeline-nav-link">
                                        <div>
                                            <!--<div>{{ item.name }}</div>-->
                                            <div>{{ item.year }}</div>
                                        </div>
                                    </a>
                                </div>
                            </div> 
                        </li>
                    </ul>
                    <!--<div class="timeline-nav" v-for="item in items" v-bind:key="item.id">
                        <div class="timeline-nav-item">
                            <a :href="'#' + item.id" class="timeline-nav-link">{{ item.name }}</a>
                        </div>
                    </div>-->
                </div>
            </div>
        </div>
        <div class="timeline-overview" v-for="(item, index) in items" v-bind:key="index">
            <div class="timeline-item bg-image shadow-2-strong" :id="item.id" :data-label="item.name">
                <div class="mainTitle" v-if="index == 0">
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
                <div class="mainTitle" v-else>
                    <h1 id="title1" class="w-title">{{ item.name }}</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            items: [
                {     
                    name: 'Overview',
                    id: 'overview',
                    date: ''
                },
                {     
                    name: 'Chandrayan - 2',
                    id: 'launch2',
                    date: '22nd July 2019',
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
    }
};
/*
    export default {
        mounted() {
            const sections = document.querySelectorAll(".timeline-item");
            const navContainer = document.createElement("div");
            const navItems = Array.from(sections).map((section) => {
                return `<div class="timeline-nav-item" data-for-section="${section.id}">
                            <a href="#${section.id}" class="timeline-nav-link"></a>
                            <span class="nav-label">${section.dataset.label}</span>
                        </div>`;
            });

            navContainer.classList.add("timeline-nav");
            navContainer.innerHTML = navItems.join("");

            const observer = new IntersectionObserver(
                (entries) => {
                document.querySelectorAll(".timeline-nav-link").forEach((navLink) => {
                    navLink.classList.remove("timeline-nav-link-selected");
                });

                const visibleSection = entries.filter((entry) => entry.isIntersecting)[0];

                document
                    .querySelector(
                    `.timeline-nav-item[data-for-section="${visibleSection.target.id}"] .timeline-nav-link`
                    )
                    .classList.add("timeline-nav-link-selected");
                },
                { threshold: 0.5 }
            );

            sections.forEach((section) => observer.observe(section));

            document.getElementById('timeline-nav-content').appendChild(navContainer);
        }
    }*/
</script>

<style scoped>
.timeline-item {
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

#overview {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url('../assets/missions_overview.jpg');
}

.counter {
    font-size: 7vh;
    text-align: center;
}

#launch1 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url('../assets/isro.jpg');
}

#launch2 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.8)), url('../assets/chandrayan 2.jpg');
}

.timeline-nav-container {
    position: fixed;
    width: 20%;
    height: 100%;
    background-color: transparent;
}

.timeline-nav {
    display:flex; 
    justify-content:center;
    align-items:center;
    height:100vh;
}

.timeline-nav-link:after {
    content: none
}

#title1 {
    font-size: 3rem !important;
}

.w-title {
    color: white;
}

.timeline-container {
    background-color: white;
    color: white;
}

.timeline-timeline-nav-link {
    position: absolute;
    top: 50%;
    left: 10%;
}

.timeline-nav-item:before {
    content: '';
    position: absolute;
    top: 5px;
    bottom: 5px;
    width: 5px;
    background: white;
    left: 20%;
    margin-left: -2.5px
}


ul.timeline {
    list-style-type: none;
    position: relative;
}
ul.timeline:before {
    content: '';
    background: #d4d9df;
    display: inline-block;
    position: absolute;
    left: 29px;
    width: 2px;
    height: 100%;
}
ul.timeline > li {
    margin: 20px 0;
    padding-left: 2rem;
    text-align: left;
}

ul.timeline > li:before {
    content: '';
    background: white;
    display: inline-block;
    position: absolute;
    border-radius: 50%;
    border: 3px solid white;
    left: 20px;
    width: 20px;
    height: 20px;
    z-index: 1;
}
</style>