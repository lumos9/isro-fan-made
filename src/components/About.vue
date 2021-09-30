<script setup>
import { ref } from 'vue'

defineProps({
  msg: String
})

const count = ref(0)
</script>

<template>
    <div class="missions-container">
        <div id="intro" class="bg-image shadow-2-strong">
            <div class="mainTitle">
                <h1 id="title1" class="w-title">About</h1>
            </div>
        </div>
    </div>
</template>

<style scoped>
#intro {
    background: no-repeat center center fixed;
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url("../assets/isro.jpg");
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

#title1 {
    font-size: 3rem !important;
}

.w-title {
    color: white;
}
</style>
