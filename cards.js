let cardsList = document.querySelector(".cards");
let cards = [];

const apiTest = {
  title: "API Test",
  link: "https://lepperson11.github.io/JSAPI/",
};
const weatherSite = {
  title: "Weather Site",
  link: "https://lepperson11.github.io/WeatherSite2/",
};
const memoryGame = {
  title: "Memory Game",
  link: "https://lepperson11.github.io/JSMemoryGame/",
};
cards.push(apiTest, weatherSite, memoryGame);
// look up what an object in JavaScript is, when you find the syntax for an object, include a title and a url link
// Look up how to push an object to an array
cards.map((item) => {
  cardsList.innerHTML += `<div class="cards">
      <div class="card">
        <div class="card-inner">
          <div class="card-front">
            <h2>${item.title}</h2>
          </div>
          <div class="card-back">
            <a href="${item.link}">Project Link</a>
          </div>
        </div>
      </div>
      <!-- container end-->
    </div>`;
});
