let formInput = document.getElementById("formInput");


formInput.addEventListener('submit', function (e) {
    e.preventDefault();
    let countryName = document.getElementById("countryInput").value;
    let container = document.getElementById("countries")
    let usersAPI = fetch(`https://restcountries.com/v3.1/name/${countryName}`);

    usersAPI.then(api => api.json()).then(data => {
        data.forEach(element => {
            let div = document.createElement("div")
            div.innerHTML =
                `<div class ="container mt-5">
                <div class="card my-3">
                    <div class="card-body m-4 d-flex">
                        <img class="col-4" src="${element.flags.svg}" >
                        <div class="mx-3 align-content-center col-6">
                        <h5 class="text-uppercase"><strong>Official Name : </strong>${element.name.official}</h5>
                        <h6><strong>Common Name : </strong>${element.name.common}</h6>
                        <p class=""><strong>Capital : </strong><span>${element.capital}</span></p>
                        <p class=""><strong>Region : </strong><span>${element.region}</span></p>
                        <p class=""><strong>Area : </strong><span>${element.area} KM<sup>2</sup></span></p>
                        <p class=""><strong>Borders : </strong><span>${element.borders}</span></p>
                        <p class=""><strong>Time Zone : </strong><span>${element.timezones}</span></p>
                        </div>
                    </div>
                </div>
             </div>
        `;
            container.prepend(div)

        });

    })



})
//----For Showing API elements names    
let usersAPI2 = fetch("https://restcountries.com/v3.1/name/germany");
let a = usersAPI2.then(api => api.json());
console.log(a);
//-------------------------------------