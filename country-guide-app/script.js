let searchBtn = document.getElementById("input-button")
let countryInput = document.getElementById("input-text")
let result = document.getElementById("result")

searchBtn.addEventListener("click", () =>{
    let countryName = countryInput.value;
    let finalURL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`
    console.log(finalURL)
    fetch(finalURL)
    .then((response) => response.json())
    .then((data) => {
        console.log(data[0]);
        console.log(data[0].capital[0]);
        console.log(data[0].flags.svg);
        console.log(data[0].name.common);
        console.log(data[0].continents[0]);
        console.log(Object.keys(data[0].currencies)[0]);
        console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
        console.log(Object.values(data[0].languages).toString().split(",").join(", "));

        result.innerHTML = `
            <img src="${data[0].flags.svg}"
            id="bandeira-country">
            <h1 id="name-country">${data[0].name.common}</h1>
            <div id="information-country">
            <p class="text-count">Capital:  ${data[0].capital[0]}</p>
            <p class="text-count">Continent:  ${data[0].continents[0]}</p>
            <p class="text-count">Population:  ${data[0].population}</p>
            <p class="text-count">Currency: ${data[0].currencies[Object.keys(data[0].currencies)].name}</p>
            <p class="text-count">Common Languages:  ${Object.values(data[0].languages).toString().split(",").join(", ")}</p>
        </div>
        `
    }).catch((error) => {
        alert("Could not find this country")
    })
})