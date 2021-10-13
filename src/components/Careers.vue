<template>
    <div class="careers-container">
        <div id="intro" class="shadow-2-strong page-item-container">
            <div id="page-title">
                <div class="display-5">Want to build the future?</div>
                <div class="display-6">Join the team to make a difference</div>
            </div>
            <div id="input-container">
                <form class="row g-3 custom-align">
                    <div class="col-lg-6">
                        <input type="search" class="form-control form-control-lg" id="jobSearch" placeholder="Search Job Title" v-model="searchQuery">
                    </div>
                    <div class="col-lg-4">
                        <select id="location" class="form-select form-select-lg" title="Location" v-model="selected">
                            <option selected>All locations</option>
                            <option>Sriharikota, Andhra Pradesh</option>
                            <option>Bengaluru, Karnataka</option>
                        </select>
                    </div>
                </form>
            </div>
            <div class="result-container">
                <div id="result-heading" class="mb-4">
                    <h4 v-if="searchQuery == ''" class="d-lg-flex justify-content-center flex-lg-wrap">
                        <div class="px-1 mt-2">Open positions</div>
                        <div class="px-1 mt-2">at</div>
                        <div class="px-1 mt-2">{{ selected }}</div>
                    </h4>
                    <h4 v-else-if="filteredJobs.length == 0 && selected != 'All locations'">No open positions for '{{searchQuery}}' at {{ selected }}</h4>
                    <h4 v-else-if="filteredJobs.length == 0 && selected == 'All locations'">No open positions for '{{searchQuery}}'</h4>
                </div>
                <div class="result-set" v-if="filteredJobs.length > 0">
                    <table class="table">
                        <thead>
                            <tr>
                                <th class="col-md-auto">#</th>
                                <th class="col-md-auto">Date Posted</th>
                                <th class="col-md-auto">Job Title</th>
                                <th class="col-md-auto">Location</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-for="job in filteredJobs" v-bind:key="job.id">
                                <th scope="row">{{ job.id }}</th>
                                <td class="col-md-auto">{{ job.datePosted }}</td>
                                <td class="col-md-auto">
                                    <a v-bind:href="job.link" target="_blank">
                                        {{ job.title }}
                                    </a>
                                </td>
                                <td class="col-md-auto">{{ job.location }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
class Job {
    constructor(id, datePosted, title, link, location) {
        this.id = id;
        this.datePosted = datePosted;
        this.title = title;
        this.link = link;
        this.location = location;
    }
}
export default {
    data() {
        return {
            searchQuery: '',
            selected: 'All locations',
            jobsList: [
                new Job(
                    1,
                    '03 Oct 2021',
                    'Software Engineer',
                    'https://www.google.com',
                    'Sriharikota, Andhra Pradesh'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                ),
                new Job(
                    2,
                    '02 Oct 2021',
                    'Chief Engineer II',
                    'https://www.google.com',
                    'Bengaluru, Karnataka'
                )
            ]
        }
    },
    computed: {
        filteredJobs() {
            return this.jobsList.filter(job => {
                return (job.location.toLowerCase().includes(this.selected.toLowerCase())
                         || this.selected.toLowerCase() === 'all locations') &&
                        job.title.toLowerCase().includes(this.searchQuery.toLowerCase())
            })
        }
    }
}
</script>


<style scoped>
#intro {
    min-height: 100vh;
    display: flex;
    align-items: center;
    flex-direction: column;
}

#page-title {
    margin-top: 20vh;
    margin-bottom: 4vh;
}

#input-container {
    min-width: 80%;
    margin: 0 auto;
}

.custom-align {
    display: flex;
    justify-content: center;
}

#jobSearch, #location {
    background-color: black;
    color: white;
    border: 1px solid rgba(255, 255, 255, 0.368);
}

.result-container {
    min-width: 60%;
    margin-top: 4vh;
    overflow-wrap: break-word;
}

.result-set {
   margin-top: 3vh;
}

table {
    color: white !important;
}

thead, tr {
    border-bottom-color: rgba(255, 255, 255, 0.1);
}
</style>