<template>
    <div class="news-container">
        <div id="news-list" class="page-item-container container">
            <div v-for="(newsItem, index) in reverseList" v-bind:key="newsItem.id">
                <div v-if="index == 0" class="d-flex align-items-center latest-news-item">
                    <div class="flex-shrink-0 ">
                        <div :style="{backgroundImage: `url(${newsItem.image})`}" id="latest-news-item-image"></div>
                        <!---<img :src="newsItem.image" class="rounded" alt="..." width="400" height="500">-->
                    </div>
                    <div class="d-flex flex-column mb-3 text-start px-4">
                        <div>{{ newsItem.date }}</div>
                        <div class="pb-5">{{ newsItem.time }}</div>
                        <div class="pb-5 fs-2">{{ newsItem.title }}</div>
                        <div class="pb-5 lead">{{ newsItem.overview }}</div>
                        <div class="mt-4">
                            <router-link to="/missions">
                                <button type="button" class="btn btn-outline-dark btn-md explore-button">Read Article</button>
                            </router-link>
                        </div>
                    </div>
                </div>
                <div v-else class="d-flex align-items-center news-item" >
                    <div class="flex-shrink-0">
                        <div :style="{'background-image': `url(${newsItem.image})`}" id="news-item-image"></div>
                        <!---<img src="../assets/isro.jpg" class="rounded" alt="..." width="400" height="500">-->
                    </div>
                    <div class="flex-grow-1 ms-3">
                        {{ newsItem.overview }}
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
                    'ISRO\'s Mars Orbiter - End of Mission',
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
    #news-list {
        min-height: -webkit-fill-available;
        width: 80%;
        margin: auto;
    }

    .latest-news-item, .news-item {
        padding: 1rem;
    }

    .latest-news-item {
        border-bottom: 1px solid white;
    }

    #latest-news-item-image {
        width: 400px;
        height: 500px;
        background: no-repeat center;
        -webkit-background-size: cover;
        -moz-background-size: cover;
        -o-background-size: cover;
        background-size: cover;
        border-radius: 30px;
    }
</style>
