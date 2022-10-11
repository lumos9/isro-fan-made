<template>
    <div class="news-container">
        <div id="intro" class="shadow-2-strong page-item-container">
            <div id="page-title">
                <div class="display-5">News + Media</div>
            </div>
        </div>
        <div id="news-list" class="page-item-container container">
            <div class="container" v-for="(newsItem, index) in reverseList" v-bind:key="newsItem.id">
                <div class="row mb-5" v-if="index == 0">
                    <div class="col-lg-6 mb-4">
                        <div :style="{backgroundImage: `url(${newsItem.image})`}" id="latest-news-item-image"></div>
                    </div>
                    <div class="col-lg-6 d-flex align-items-center justify-content-center text-start px-4 mb-4">
                        <div>
                            <div class="mb-4">
                                <div>{{ newsItem.date }} - {{ newsItem.time }}</div>
                                <div class="fs-3">{{ newsItem.title }}</div>
                            </div>
                            <div class="mb-4 lead">{{ newsItem.overview }}</div>
                            <div>
                                <router-link to="/missions">
                                    <button type="button" class="btn btn-outline-dark btn-md explore-button-opp">Read Article</button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
                <div v-else class="row mb-5">
                    <div class="col-lg-6 mb-4">
                        <div :style="{backgroundImage: `url(${newsItem.image})`}" id="latest-news-item-image"></div>
                    </div>
                    <div class="col-lg-6 d-flex align-items-center justify-content-center text-start px-4 mb-4">
                        <div>
                            <div class="mb-4">
                                <div>{{ newsItem.date }} - {{ newsItem.time }}</div>
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
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}

    #news-list {
        min-height: -webkit-fill-available;
        width: 80%;
        margin: auto;
    }

    .latest-news-item, .news-item {
        padding: 1rem;
    }

    #latest-news-item-image {
        height: 400px;
        background: no-repeat center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        border-radius: 30px;
    }
</style>
