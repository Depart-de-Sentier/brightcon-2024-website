<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-2">
          <span class="text-dark">September 23-27 2024</span>
          <br />
          <span class="text-dark">Hamburg, Germany</span>
        </div>
        <div class="col-8">
          <div class="container">
            <div class="row is-center">
              <span>
                <NuxtLink to="/" class="conftittle"> Brightcon 2024 </NuxtLink>
              </span>
            </div>
            <div class="row is-center confsubtittle">
              <span> Open sustainability event </span>
            </div>
          </div>
          <div class="col-2">
            <span />
          </div>
        </div>
      </div>
      <nav class="nav">
        <div class="nav-left">
          <NuxtLink to="/aboutbc" class="button success">
            <span>About</span>
          </NuxtLink>
          <NuxtLink to="/register" class="button primary icon">
            <span>Register </span>
            <img
              src="https://icongr.am/feather/credit-card.svg?size=16&amp;color=ffffff"
              alt="register"
            />
          </NuxtLink>
          <NuxtLink to="/programme" class="button primary icon"
            >Programme
            <img
              src="https://icongr.am/clarity/calendar.svg?size=16&amp;color=ffffff"
              alt="icon"
          /></NuxtLink>
          <NuxtLink to="/calls" class="button primary icon"
            >Calls
            <img
              src="https://icongr.am/clarity/wand.svg?size=16&amp;color=ffffff"
              alt="icon"
            />
          </NuxtLink>
        </div>
        <div class="nav-center"></div>
        <div class="nav-right">
          <NuxtLink to="/venue" class="button dark">Venue</NuxtLink>
          <NuxtLink
            to="https://app.element.io/#/room/#brightway/brightcon:matrix.org"
            target="_blank"
            class="button secondary"
          >
            Chat
          </NuxtLink>
          <NuxtLink
            to="https://app.element.io/#/room/#brightcon-tech:matrix.org"
            target="_blank"
            class="button seconday"
          >
            Support
          </NuxtLink>
          <NuxtLink to="/sponsoring" class="button outline">
            Sponsoring
          </NuxtLink>
        </div>
      </nav>
    </div>
  </div>
</template>
<style scoped>
.conftittle {
	font-size: 2.8em;
}
.confsubtittle {
	font-size: 1.4em;
}
</style>
