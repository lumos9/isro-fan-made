<template>
    <div class="news-container">
        <div id="intro" class="shadow-2-strong page-item-container">
            <div id="page-title">
                <div class="display-5">Our Story</div>
            </div>
        </div>
    </div>
</template>

<script>
class TimelineItem {
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
            itemsList: [
                new TimelineItem(
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
            return this.itemsList.slice().reverse()
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
</style>
