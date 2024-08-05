<template>
  <div class="container">
    <div class="row">
      <div class="col text-primary is-center">
        <h2><NuxtLink to="/register"> Registration is open !</NuxtLink></h2>
      </div>
    </div>
    <div class="row ilust is-vertical-align">
      <!-- is-vertical-align is-horizontal-align hero"> -->

      <div class="col card">
        <header>In person</header>
        <NuxtLink
          to="https://events.d-d-s.ch/event/brightcon2024/registration"
          target="_blank"
          class="button is-center"
        >
          <b>Hackathon + Conference </b>
        </NuxtLink>
        <br />
        <NuxtImg
          src="/images/illustrations/undraw_teamwork_hpdk.svg"
          format="webp"
          alt="hackathon+conference registration"
        />
        <footer>
          <NuxtLink to="/register">fees and details ...</NuxtLink>
        </footer>
      </div>
      <div class="col card">
        <header>In person</header>
        <NuxtLink
          to="https://events.d-d-s.ch/event/brightcon2024/registration"
          target="_blank"
          class="button is-center"
        >
          <b> Conference only </b>
        </NuxtLink>
        <br />
        <NuxtImg
          src="/images/illustrations/undraw_conference_re_2yld.svg"
          format="webp"
          alt="in person registration"
        />
        <footer>
          <NuxtLink to="/register">fees and details ...</NuxtLink>
        </footer>
      </div>
      <div class="col card">
        <header>On-line</header>
        <NuxtLink
          to="https://events.d-d-s.ch/event/brightcon2024virtual/registration"
          target="_blank"
          class="button is-center"
        >
          <b>Conference only </b>
          <i> on-line</i>
        </NuxtLink>
        <br />
        <NuxtImg
          src="/images/illustrations/undraw_conference_call_b0w6.svg"
          format="webp"
          alt="on-line registration only"
        />
        <footer>
          <NuxtLink to="/register">fees and details ...</NuxtLink>
        </footer>
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
