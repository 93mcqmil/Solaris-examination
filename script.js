const url = "https://majazocom.github.io/Data/solaris.json";
const allPlanets = document.querySelectorAll(".allPlanets");
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
      document.getElementById("overlay").style.display = "block";

      console.log(items);
    }
  });
});

getPlanetsData();
