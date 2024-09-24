<template>
  <div class="container">
    <div>
      <h1>Programme for Brightcon 2024</h1>

      <div class="card">
        <header>
          <h2>Hackathon 🛠️ - September 23rd - 24th</h2>
        </header>
        <p>
          We will gather to tackle different challenges, in a hackathon mode.
        </p>
      <ContentDoc path="/agenda/hackathon" />
      </div>
      <br />
      <div class="card">
        <header>
          <h2>Conference 📢 - September 25th - 27th</h2>
        </header>
        <p>Our interactive gathering.</p>
      <ContentDoc path="/agenda/conference" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.styled-table {
  border-collapse: collapse;
  margin: 25px 0;
  font-size: 0.9em;
  font-family: sans-serif;
  min-width: 400px;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.15);
}
.styled-table thead tr {
  background-color: #009879;
  color: #ffffff;
  text-align: left;
}
.styled-table th,
.styled-table td {
  padding: 12px 15px;
}
.styled-table tbody tr {
  border-bottom: 1px solid #dddddd;
}

.styled-table tbody tr:nth-of-type(even) {
  background-color: #f3f3f3;
}

.styled-table tbody tr:last-of-type {
  border-bottom: 2px solid #009879;
}
.styled-table tbody tr.active-row {
  font-weight: bold;
  color: #009879;
}
</style>
