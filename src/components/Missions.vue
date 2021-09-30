<template>
    <div class="timeline-container" id="timeline-content">
        <div class="timeline-nav-container" id="timeline-nav-content"></div>
        <div class="timeline-overview">
            <div class="timeline-item bg-image shadow-2-strong" id="launch1" data-label="Chandrayan-2">
                <div class="mainTitle">
                    <h1 id="title1" class="w-title">Chandrayan-2</h1>
                </div>
            </div>
            <div class="timeline-item bg-image shadow-2-strong" id="launch2" data-label="Chandrayan-1">
                <div class="mainTitle">
                    <h1 id="title1" class="w-title">Chandrayan-1</h1>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
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
    }
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

#launch1 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('../assets/chandrayan 2.jpg');;
}

#launch2 {
    background-image: linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('../assets/isro.jpg');;
}

.timeline-nav-container {
    position: fixed;
    width: 15%;
    height: 100%;
    background-color: black;
}

.timeline-nav {
    position: relative;
    top: 50%;
    left: 5%;
}

/*
.timeline-nav {
  --nav-gap: 15px;
  padding: var(--nav-gap);
  position: fixed;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

.timeline-nav-item {
  align-items: center;
  display: flex;
  flex-direction: row-reverse;
  margin-bottom: var(--nav-gap);
}

.timeline-nav-link:hover ~ .timeline-nav-label {
  opacity: 1;
}

.timeline-nav-label {
  color: #000000;
  font-weight: bold;
  opacity: 0;
  transition: opacity 0.1s;
}

.timeline-nav-link {
  background: rgba(0, 0, 0, 0.3);
  border-radius: 50%;
  height: var(--nav-gap);
  margin-left: var(--nav-gap);
  transition: transform 0.1s;
  width: var(--nav-gap);
}

.timeline-nav-link-selected {
  background: #000000;
  transform: scale(1.4);
}*/

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

.timeline {
    width: 80%;
    margin: auto;
    margin-top: 10rem;
}

.timeline-timeline-nav-link {
    position: absolute;
    top: 50%;
    left: 10%;
}
</style>