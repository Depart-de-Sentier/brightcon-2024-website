<template>
  <div class="container">
    <div class="row">
      <div class="col is-center text-primary bd-success">
        <h2>
          <NuxtLink to="/programme">👉Programme available now👈</NuxtLink>
        </h2>
      </div>
      <div class="col is-center text-primary bd-success">
        <h2>
          <NuxtLink to="https://github.com/Depart-de-Sentier/brightcon-2024-material" target="_blank">📗 Conference Material 📓 </NuxtLink>
        </h2>
      </div>
    </div>
    <div class="row">
      <div class="col hide-xs hide-sm text-right text-grey">
        <div class="">
          <p>
            To stay updated on this annual conference, subscribe to our
            <a href="https://brightway.groups.io/g/brightcon"> mailing list </a
            >.
          </p>
          <p>
            Participants will have the opportunity to become members of
            <a href="https://www.d-d-s.ch">Départ de Sentier</a>.
          </p>
          <p class="row col is-vertical-align is-horizontal-align"></p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.background {
  display: block;
  position: relative;
}
.background:after {
  content: "";
  background: url("/images/leaf.png") center center;
  background-size: cover;
  opacity: 0.1;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

.ilust {
  align-items: stretch;
}
</style>
