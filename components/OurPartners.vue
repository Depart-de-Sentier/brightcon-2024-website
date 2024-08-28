<script setup lang="ts">
const partnersEnabled = true;
const partners_gold = [
  {
    url: "https://ecoinvent.org",
    imageSrc: "images/sponsors/ECO_Logo_standard_k.svg",
    imageAlt: "Ecoinvent",
    level: "Gold",
  },
];
</script>
<template>
  <div class="background">
    <div class="container">
      <h1 class="text-center text-primary">Brightcon 2024 Sponsors</h1>
      <div v-if="partners_gold.length > 0 && partnersEnabled">
        <h2 class="text-center text-primary">Gold</h2>
        <div
          class="row is-vertical-align is-horizontal-align bg-white with-padding text-dark"
        >
          <div
            v-for="(s, index) in partners_gold"
            :key="index"
            class="card-container"
          >
            <a :href="s.url" target="_blank">
              <NuxtImg :src="s.imageSrc" :alt="s.imageAlt" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  background-color: #ebf8f6;
  padding: 1em;
}
.with-padding {
  padding: 1em;
}
.row {
  justify-content: space-around;
}
</style>
