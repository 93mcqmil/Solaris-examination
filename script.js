const url = "https://majazocom.github.io/Data/solaris.json";
const planetList = document.getElementById("planet-list");

async function getPlanetsData() {
  //Skapat en funktion för att få fram all data i json objektet
  try {
    const data = await fetch(url);
    if (data.ok) {
      const result = await data.json();
      console.log(result);
    } else {
      console.error("Failed to fetch data");
    }
  } catch (error) {
    console.error("An error occurred:", error);
  }
}

getPlanetsData();
