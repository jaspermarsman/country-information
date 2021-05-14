//Maak op basis van de response de volgende string en log dit in de console: [country-naam] is situated in [subarea-name]. It has a population of [amount] people.
//Maak een functie die ongeacht het aantal currencies die in een land gebruikt worden, een string maakt.
// In een land kunnen één of twee currencies gebruikt worden:
//
// 1 valuta: and you can pay with [currency]'s
// 2 valuta's: and you can pay with [currency]'s and [currency]'s

let userInput = "";

async function getCountryInformation() {
    const response = await axios.get(`https://restcountries.eu/rest/v2/name/${userInput}`);
    console.log(response.data);
    const countryName = response.data[0].name;
    const subareaName = response.data[0].subregion;
    const capitalName = response.data[0].capital;
    const countryFlag = response.data[0].flag
    const currencies = (response.data[0].currencies);

    let countryCurrencies = "";
    currencyString(currencies);

    function currencyString(currencies) {

        if (currencies.length < 2) {
            countryCurrencies = `and you can pay with ${response.data[0].currencies[0].name}'s`;
        } else {
            countryCurrencies = `and you can pay with ${response.data[0].currencies[0].name}'s and ${response.data[0].currencies[1].name}'s`;
        }
        return countryCurrencies;
    };

    const countryFlagElement = document.getElementById("flag-image");
    countryFlagElement.setAttribute('src', countryFlag);

    const countryNameElement = document.getElementById("country-name");
    countryNameElement.textContent = `${countryName}`;

    const countryInfoElement = document.getElementById("country-info");
    countryInfoElement.textContent = `${countryName} is situated in ${subareaName}. 
    The capital is ${capitalName} ${countryCurrencies}.`;

    searchElement.value = "";
};


const searchElement = document.getElementById("search-input")
searchElement.addEventListener("keyup", (e) => {
    if (e.key === 'Enter'){
        userInput = e.target.value;
        getCountryInformation();
    }
});

const searchInfoButton = document.getElementById("search-button");
searchInfoButton.addEventListener("click", getInputValue);

function getInputValue(){
    userInput = document.getElementById("search-input").value;
    getCountryInformation();
}



    //opdr6
    // console.log(response.data[0].languages);
    // for(i =0; i < response.data[0].languages.length; i++) {
    //     console.log(response.data[0].languages);
    // }













