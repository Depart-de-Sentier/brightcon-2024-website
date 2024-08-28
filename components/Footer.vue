<template>
  <footer>
    <div>
      <div class="container">
        <hr />
        <div class="row">
          <div class="col">
            <div class="row is-center">
              <b>Brightcon 2024 is organized by:</b>
            </div>
            <div class="row is-center">
              <a href="https://www.d-d-s.ch/">
                <NuxtImg
                  format="webp"
                  class="logo-img"
                  src="/images/dds-logo.png"
                  alt="Départ de Sentier (DdS)"
                />
              </a>
            </div>
          </div>
          <div class="col">
            <div class="row is-center">
              <b>Brightcon 2024 is hosted by:</b>
            </div>
            <div class="row is-center">
              <br />
              <a href="https://www.dlr.de">
                <NuxtImg
                  class="logo-img"
                  src="/images/DLR_Logo_EN_black.svg"
                  alt="German Aerospace Center"
                />
              </a>
            </div>
          </div>
        </div>

        <div class="text-center">
          <b>Organizing committee</b>
        </div>

        <div class="row">
          <div class="col is-center affrow">
            <ul>
              <li>
                Chris Mutel
                <br />
                <a
                  href="https://github.com/cmutel"
                  rel="noopener"
                  target="__blank"
                >
                  <github-icon />
                </a>
                <a
                  href="https://www.linkedin.com/in/christopher-mutel-61b263b2"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
              <li>
                Karin Treyer
                <br />
                <a
                  href="https://github.com/KarinTreyer"
                  rel="noopener"
                  target="__blank"
                >
                  <github-icon />
                </a>
                <a
                  href="https://www.linkedin.com/in/karintreyer0777"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
              <li>
                Tom&aacute;s Navarrete Guti&eacute;rrez
                <br />
                <a
                  href="https://github.com/tngTUDOR"
                  rel="noopener"
                  target="__blank"
                >
                  <github-icon />
                </a>
                <a
                  href="https://www.linkedin.com/in/tom4m3"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
                <a
                  href="https://twitter.com/tomasN_list?t=l00iN9miHddObV3Ljy8m2A&s=09"
                  rel="noopener"
                  target="__blank"
                >
                  <twitter-icon />
                </a>
              </li>
            </ul>
          </div>
          <div class="col is-center">
            <ul>
              <li>
                Antonia Rahn
                <br />
                Institute of Maintenance, Repair and Overhaul, German Aerospace
                Center, Hamburg
                <br />
                <a
                  href="https://www.linkedin.com/in/antonia-rahn-3a6730162/"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
              <li>
                Joana Albano
                <br />
                Institute of Maintenance, Repair and Overhaul, German Aerospace
                Center, Hamburg
                <br />
                <a
                  href="https://www.linkedin.com/in/joana-albano-8a080175/"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
              <li>
                Rahul Ramesh Nair
                <br />
                Institute of Networked Energy Systems, German Aerospace Center,
                Oldenburg
                <br />
                <a
                  href="https://www.linkedin.com/in/rahul-ramesh-nair/"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
              <li>
                Svenja Kirsch
                <br />
                Institute of Maintenance, Repair and Overhaul, German Aerospace
                Center, Hamburg
                <br />
                <a
                  href="https://www.linkedin.com/in/svenja-kirsch-aa9778232/"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
              <li>
                Urte Brand
                <br />
                Institute of Networked Energy Systems, German Aerospace Center,
                Oldenburg
                <br />
                <a
                  href="https://www.linkedin.com/in/dr-urte-brand-daniels-798a5260/"
                  rel="noopener"
                  target="__blank"
                >
                  <linked-in-icon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <b>Follow us on X</b>
        </div>
        <div class="row text-left">
          <div class="col">
            <a
              href="https://twitter.com/brightcon_media"
              rel="noopener"
              target="__blank"
            >
              <twitter-icon />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-light">
      <div class="container with-padding-top with-padding-bottom">
        <route-recap></route-recap>
      </div>
      <div class="with-padding-bottom">
        <div class="text-center">
          ©2024 <a href="https://www.d-d-s.ch/">Départ de Sentier</a>,
          <a href="https://www.dlr.de">German Aerospace Center</a>
          | Contact Us | <NuxtLink to="/legal"> Legal Info </NuxtLink> |
          <NuxtLink to="/code-of-conduct"> Code of Conduct </NuxtLink>
        </div>
      </div>
    </div>
  </footer>
</template>

<style @scoped>
/* footer {
    position: fixed;
    width: 100%;
    bottom: 0;
} */
.with-padding-top {
  padding-top: 2em;
}
.with-padding-bottom {
  padding-bottom: 1em;
}
.logo-img {
  height: 84px;
}
.affrow {
  display: flex;
  alignt-items: flex-start;
}
</style>
