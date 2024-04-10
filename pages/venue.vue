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
    <ul>
      <li>
        🚅 by Train. <i>First</i>: don't get confused! Hamburg has three train
        stations in the inner city - Main Station, Dammtor and Altona - going
        from east to west. They are all very well connected to certain
        city-parts and most of the long distance trains (ICE and IC) pass
        through all of them. Although Main Station being the one where you can
        catch basically all major lines of the public transport system.
      </li>
      <li>
        ✈ By Plane. Hamburg Airport in Poppenbüttel is directly connected to
        the city with the S-Bahn S1. The line spans from the Airport in the east
        to the western part of Hamburg and passes Main Station as well as
        Altona.
      </li>
      <li>
        🚗 By Car. There are two highways surrounding Hamburg: the A7 builds the
        south-north connection ➡️ Flensburg/Kiel and Denmark, whereas the A1
        connects to the east - ➡️Berlin. In principal Hamburg is quite free of
        parking fees, only in the inner city center you'll have to pay for
        parking spots. Most hotels have parking lots though.
      </li>
    </ul>

    <h3>How to reach ZAL Tech Center</h3>

    Located at Hein-Saß-Weg 22 in Finkenwerder the ZAL Tech Center is a little
    off the grid. Nevertheless it's well connected to Hamburg through ferry and
    the big tunnle under the Elbe. Once landed in Finkenwerder it's a 10 minute
    walk to the Center itself (alongside the canal, it's cute). By ferry: We
    suggest Ferry 62, starting at S1, S3, U3 - Landungsbrücken, departing in a
    15-minute frequent. It's a 30-minute ride on the Elbe, with stops at
    Fischmarkt, Dockland and Övelgönne (better option for those coming from the
    Altona station). By bus/car: With wheels it's the Bus 150 starting in Altona
    going through the Elbtunnel. Caution: depending on the time, this option is
    not suggested due to frequent traffic jams.

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
