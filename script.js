const url = "https://majazocom.github.io/Data/solaris.json";
const allPlanets = document.querySelectorAll(".allPlanets");
const overlay = document.getElementById("overlay");
let dataInfo; //Var tvunget att göra data global så att den är tillgänglig på andra delar i koden
const getPlanetsData = async () => {
  //Skapat en funktion för att få fram all data i json objektet
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed");
    }
    const data = await response.json();
    dataInfo = data;

    console.log(data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

//funktion för klick funktionen.

allPlanets.forEach(function (planet) {
  planet.addEventListener("click", function () {
    const clickedElementId = planet.id;
    //minaplaneter(clickedElementId);

    const items = dataInfo.find((item) => item.name === clickedElementId);
    if (items) {
      overlay.style.display = "block";
      overlay.style.display = "flex";

      console.log(items);
    }
    showOverlay(items);
    createStars();
  });
});

getPlanetsData();

function showOverlay(planet) {
  document.querySelector(".planetName").textContent = `${planet.name}`;
  document.querySelector(
    ".planetLatinName"
  ).textContent = `${planet.latinName}`;
  document.querySelector(".planetDescription").textContent = `${planet.desc}`;
  document.querySelector(
    ".cirkumFerence"
  ).textContent = `${planet.circumference}`;
  document.querySelector(".distance").textContent = `${planet.distance}`;
  document.querySelector(".maxTemperatur").textContent = `${planet.temp.day}`;
  document.querySelector(".minTemperatur").textContent = `${planet.temp.night}`;
  document.querySelector(".månar").textContent = `${planet.moons.join(", ")}`;
}
function returnOverlay() {
  overlay.style.display = "none";
}
const starContainer = document.getElementById("stars");
function createStars() {
  for (let i = 0; i < 99; i++) {
    const star = document.createElement("div");
    star.className = "star";
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    starContainer.appendChild(star);
  }
}
