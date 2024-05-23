<template>
  <div class="container">
    <h2>
      Images from <a href="https://2023.brightcon.link">Brightcon 2023</a>
    </h2>
    <div class="row">
      <div class="col">
        <carousel :items-to-show="1" :autoplay="4000">
          <slide v-for="slide in previmgs" :key="slide">
            <NuxtImg :src="slide" />
          </slide>
          <template #addons>
            <navigation />
            <pagination />
          </template>
        </carousel>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts">
const previmgs = [
  "/images/onlyinbc/1.jpg",
  "/images/onlyinbc/2.jpg",
  "/images/onlyinbc/3.jpg",
  "/images/onlyinbc/4.jpg",
  "/images/onlyinbc/5.jpg",
  "/images/onlyinbc/6.jpg",
  "/images/onlyinbc/7.jpg",
  "/images/onlyinbc/8.jpg",
  "/images/onlyinbc/9.jpg",
  "/images/onlyinbc/10.jpg",
  "/images/onlyinbc/11.jpg",
  "/images/onlyinbc/12.jpg",
  "/images/onlyinbc/13.jpg",
  "/images/onlyinbc/14.jpg",
  "/images/onlyinbc/15.jpg",
];
</script>
<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}
</style>
