<template>
  <div class="container">
    <h2>Testimonials from Brightcon 2023</h2>
    <div v-for="q in quotes" :key="q.name">
      <div class="row">
        <div class="col">
          <div class="card">
            <header>
              <h4>
                <NuxtLink :to="q.linkedIn">{{ q.name }} </NuxtLink>
              </h4>
              <h5>{{ q.designation }}</h5>
            </header>
            <p>
              <i>{{ q.reviewMore }} </i>
            </p>
            <div class="imgbox" v-if="q.imgUrl">
              <NuxtImg
                :src="q.imgUrl"
                alt=""
                format="webp"
                fit="cover"
                width="64"
                height="64"
              />
            </div>
            <div>
              <footer class="is-left">
                <div v-if="q.github">
                  <a
                    class="button clear outline is-paddingless icon-only"
                    :href="q.github"
                    rel="noopener"
                    target="__blank"
                  >
                    <github-icon />
                  </a>
                </div>
                <a
                  class="button clear outline is-paddingless icon-only"
                  :href="q.linkedIn"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon></linked-in-icon>
                </a>
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const quotes = ref([
  {
    name: "Heath LOGAN",
    designation: "Postdoc at DTU Sustain",
    reviewTitle: "",
    imgUrl: "/images/participants/heath-logan.jpg",
    reviewMore: `Without a doubt, Brightcon 2023 set the golden standard for academic conferences. The tutorial-based sessions prioritized learning, problem solving, and skills development for experts and beginners alike. These sessions transformed the idea of scientific dissemination from ivory tower didactic lectures to accessible pedagogic and community focused discourses.  The community attending this conference were welcoming and open to practitioners of every level. In all the hackathon, tutorial-based sessions, open discussions, networking opportunities, and engagement with online participants created an environment that encouraged questions and inspired growth both within the Brightway community as well as also among the participants attending.`,
    linkedIn: "https://www.linkedin.com/in/heathermlogan/",
    github: "https://github.com/hmlogan",
  },
  {
    name: "Selim YOUSSRY",
    designation: "CEO & Co-founder Sapiologie",
    reviewtitle: "",
    imgUrl: "/images/participants/selim-headshot.jpg",
    reviewMore:
      "Meeting in person at Brightcon in 2023 was enriching and motivating for me. The energy and emulation from open source events reminds everyone why working in sustainability is more than just a job, it is a purpose. I look forward to more efforts being standardized and open through such initiatives, and to this year's Brightcon.",
    linkedIn: "https://www.linkedin.com/in/syoussry/",
    github: "https://github.com/selimyoussry",
  },
  {
    name: "Amelie MÜLLER",
    designation: "PhD Candidate, Industrial Ecology at Leiden University and VITO",
    reviewtitle: "",
    imgUrl: "/images/participants/amelie-muller.jpg",
    reviewMore:"Attending Brightcon 2023 has been fantastic as it is the meeting place for LCA researchers working with open-source tools in python, such as Brightway. In fact, one of my current projects has been significantly inspired by the discussions at Brightcon and I met my current collaborators there. Brightcon is not your usual conference – it’s very hands-on, low-hierarchy and living its sustainable mission by serving only vegetarian/vegan food. I’m highly looking forward to this year’s edition.",
    linkedIn: "https://www.linkedin.com/in/amelie-m%C3%BCller-b3003b20a/",
    github: "https://github.com/muelleram",
  },
]);
</script>

<style scoped>
.card-container {
  flex-grow: 1;
}
.linkedInIcon {
  fill: blue;
}
.imgbox {
  margin-right: 1rem;
}
.card {
  padding: 2rem 4rem;
  border-radius: 0.9rem;
}
</style>
