<template>
    <div class="news-container">
        <div>
            <div class="row container-xxl m-auto" v-for="newsItem in reverseList.slice(0, 1)" v-bind:key="newsItem.id">
                <div class="page-item-container px-0">
                    <div class="fs-2 mb-4 text-start">Latest News</div>
                    <div id="intro" :style="{backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.2)), url(${newsItem.image})`}" class="shadow-2-strong">
                        <div class="p-4">
                            <div calss="fs-3">Published on {{ newsItem.date }}</div>
                            <div class="fs-1 mb-4">{{ newsItem.title }}</div>
                            <div class="lead">{{ newsItem.overview }}</div>
                            <div class="mt-4">
                                <router-link to="/missions">
                                    <button type="button" class="btn btn-outline-dark btn-md explore-button-opp">Read Full Article</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

            <div class="row container-xxl m-auto">
                <div class="fs-2 my-4 text-start p-0" v-if="reverseList.length > 1">Other Articles</div>
                <div v-for="newsItem in reverseList.slice(1)" v-bind:key="newsItem.id" class="col-lg-6 p-1">
                    <div>
                        <div :style="{backgroundImage: `url(${newsItem.image})`}" id="news-item-image"></div>
                        <div class="my-5 text-start">
                            <div class="mb-4">
                                <!---<div>{{ newsItem.date }} - {{ newsItem.time }}</div>-->
                                <div>Published on {{ newsItem.date }}</div>
                                <div class="fs-3">{{ newsItem.title }}</div>
                            </div>
                            <div class="mb-4">{{ newsItem.overview }}</div>
                            <div>
                                <router-link to="/missions">
                                    <button type="button" class="btn btn-outline-dark btn-md explore-button-opp">Read Article</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
class NewsItem {
    constructor(id, date, time, title, image, overview, link) {
        this.id = id;
        this.date = date;
        this.time = time;
        this.title = title;
        this.image = image;
        this.overview = overview;
        this.link = link;
    }
}
export default {
    data() {
        return {
            newsList: [
                new NewsItem(
                    2,
                    '4th October 2022',
                    '9:18 AM IST',
                    'Mars Orbiter - End of Mission',
                    'images/isro.jpg',
                    'Launched on September 24, 2014, Mars Orbiter Mission (MOM) comes to end after 8 years of exceptional science of planet Mars',
                    'https://www.google.com'
                ),
                new NewsItem(
                    2,
                    '4th October 2022',
                    '9:18 AM IST',
                    'Mars Orbiter - End of Mission',
                    'images/isro.jpg',
                    'Launched on September 24, 2014, Mars Orbiter Mission (MOM) comes to end after 8 years of exceptional science of planet Mars',
                    'https://www.google.com'
                ),
                new NewsItem(
                    2,
                    '4th October 2022',
                    '9:18 AM IST',
                    'Mars Orbiter - End of Mission',
                    'images/isro.jpg',
                    'Launched on September 24, 2014, Mars Orbiter Mission (MOM) comes to end after 8 years of exceptional science of planet Mars',
                    'https://www.google.com'
                ),
                new NewsItem(
                    2,
                    '4th October 2022',
                    '9:18 AM IST',
                    'Mars Orbiter - End of Mission',
                    'images/isro.jpg',
                    'Launched on September 24, 2014, Mars Orbiter Mission (MOM) comes to end after 8 years of exceptional science of planet Mars',
                    'https://www.google.com'
                ),
                new NewsItem(
                    2,
                    '20th October 2022',
                    '00:07 AM IST',
                    'ISRO scheduled to launch OneWeb Satellites',
                    'images/news/lvm3-m2-schedule.jpg',
                    'ISRO scheduled to launch 36 OneWeb Satellites on 23rd October 2022 at 00:07 IST',
                    'https://www.google.com'
                ),
                new NewsItem(
                    2,
                    '23rd October 2022',
                    '00:07 AM IST',
                    'ISRO/ NSIL launch 36 OneWeb satellites successfully ',
                    'images/news/lvm3-m2-launch.jpg',
                    'India marks the first dedicated commercial launch for NewSpace India Limited (NSIL) using the LVM3 rocket.',
                    'https://www.google.com'
                )
            ]
        }
    },
    computed: {
        reverseList() {
            return this.newsList.slice().reverse()
        }
    }
}
</script>

<style scoped>
#intro {
    background: no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    height: 600px;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: column;
}

#news-item-image {
    height: 400px;
    background: no-repeat center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
}
</style>
