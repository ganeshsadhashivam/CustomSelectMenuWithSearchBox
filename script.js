const wrapper = document.querySelector(".wrapper"),
  selectBtn = document.querySelector(".select-btn"),
  searchInp = document.querySelector("input"),
  options = document.querySelector(".options");

let countries = [
  "Afghanistan",
  "Algeria",
  "Argentina",
  "Australia",
  "Bangladesh",
  "Belgium",
  "Bhutan",
  "Brazil",
  "Canada",
  "China",
  "Denmark",
  "Ethiopia",
  "Finland",
  "France",
  "Germany",
  "Hungary",
  "Iceland",
  "India",
  "Indonesia",
  "Iran",
  "Italy",
  "Japan",
  "Malaysia",
  "Maldives",
  "Mexico",
  "Morocco",
  "Nepal",
  "Netherlands",
  "Nigeria",
  "Norway",
  "Pakistan",
  "Peru",
  "Russia",
  "Romania",
  "South Africa",
  "Spain",
  "Sri Lanka",
  "Sweden",
  "Switzerland",
  "Thailand",
  "Turkey",
  "Uganda",
  "Ukraine",
  "United States",
  "United Kingdom",
  "Vietnam",
];

const addCountry = (selectedCountry) => {
  options.innerHTML = "";
  countries.forEach((country) => {
    let isSelected = country == selectedCountry ? "selected" : "";
    // adding each country inside li and inserting all li inside options tag
    let li = `
    <li onclick="updateName(this)" class="${isSelected}">${country}</li>`;
    options.insertAdjacentHTML("beforeend", li);
  });
};

addCountry();

const updateName = (selectedList) => {
  searchInp.value = "";
  addCountry(selectedList.innerText);
  wrapper.classList.remove("active");
  selectBtn.firstElementChild.innerText = selectedList.innerText;
};

searchInp.addEventListener("keyup", () => {
  //creating empty array
  let arr = [];
  let searchedVal = searchInp.value.toLowerCase();
  // returnig all countries from array which are start with user searched value

  arr = countries
    .filter((data) => {
      return data.toLowerCase().startsWith(searchedVal);
    })
    .map((data) => `<li onclick="updateName(this)">${data}</li>`)
    .join("");
  options.innerHTML = arr ? arr : `<p>Oops Country Not Found </p>`;
});

selectBtn.addEventListener("click", () => {
  wrapper.classList.toggle("active");
});
