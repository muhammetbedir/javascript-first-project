let name = prompt("Adınız Nedir?");
let myName = document.querySelector("#myName");
myName.innerHTML = name;

let clock = document.querySelector("#myClock");
let today = new Date();
let days = [
  "Pazar",
  " Pazartesi ",
  "Salı",
  "Çarşamba",
  "Perşembe",
  "Cuma",
  "Cumartesi",
];

clock.textContent =
  today.getHours() +
  ":" +
  today.getMinutes() +
  ":" +
  today.getSeconds() +
  " " +
  days[today.getDay()];
