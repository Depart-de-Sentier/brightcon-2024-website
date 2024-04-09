<template>
  <div class="container">
    <h1>Venue</h1>
    <h2>Location</h2>
    Brightcon 2024 will take place in the premises of the ZAL TechCenter of
    <a href="https://www.dlr.de">German Aerospace Center</a> in <b>Hamburg</b>,
    Germany.a

    <div container>
      <a href="https://zal.aero/en/directions/">
        <div class="row">
          <div class="col-3">
            <div class="card">
              <p>ZAL TechCenter</p>
              <p>Hein-Saß-Weg 22</p>
              <p>21129 Hamburg, Germany</p>
	      <p>+49 40 248 595 0</p>
	      <p>info@zal.aero</p>
            </div>
          </div>
        </div>
      </a>
    </div>

    <!--

    <h3>Conference location</h3>
    The conference of Sept. 25-27 will be held on German Aerospace Center premises.
    -->
    <h3>How to reach Hamburg</h3>
    <a href="https://www.hamburg-travel.com/">
      From Hamburg Tourismus website:
    </a>
    <ul>
      <li>
        🚅 by Train. Hamburg's four long-distance train stations, the Central
        Train Station, Hamburg Dammtor, Hamburg-Altona and Hamburg-Harburg, all
        of which are integrated in Germany's ICE network, make Hamburg very easy
        to reach.
      </li>
      <li>
        ✈ By Plane. The route network of the Helmut Schmidt Airport is
        extensive. Numerous airlines fly to international and national
        destinations. Within Germany there are direct flights to Munich,
        Stuttgart, Cologne and many other cities.
      </li>
    </ul>
    <!-- 
    <h2>Accomodation</h2>
    <b>
    </b>
    <h3>Alternatives</h3>
    Please note that the room availability is guaranteed for a limited period.
    We strongly suggest booking your stay as soon as possible. 
    -->
  </div>
</template>

<script setup lang="ts">
const hotels = [{}];
</script>
<style>
.with-indent {
  text-indent: 1.5rem;
}
.hotel-card {
  display: flex;
  flex-direction: column;
}
.grow {
  flex-grow: 1;
}
</style>
