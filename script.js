const url = "https://majazocom.github.io/Data/solaris.json";
const allPlanets = document.querySelectorAll(".allPlanets");
const getPlanetsData = async () => {
  //Skapat en funktion för att få fram all data i json objektet
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed");
    }
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("An error occurred:", error);
  }
};

//funktion för klick funktionen.
allPlanets.forEach(function (planet) {
  planet.addEventListener("click", function () {
    const clickedElementId = planet.id;
    //information(clickedElementId);
    console.log(clickedElementId);
  });
});
getPlanetsData();
