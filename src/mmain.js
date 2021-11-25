//OpenWeather
const par1 = document.getElementById("par1");
const par2 = document.getElementById("par2");
const par3 = document.getElementById("par3");
const par4 = document.getElementById("par4");
const par5 = document.getElementById("par5");
const par6 = document.getElementById("par6");
const par7 = document.getElementById("par7");

//myfile
const pers11 = document.getElementById("pers11");
const pers12 = document.getElementById("pers12");
const pers13 = document.getElementById("pers13");
const pers21 = document.getElementById("pers21");
const pers22 = document.getElementById("pers22");
const pers23 = document.getElementById("pers23");
const pers31 = document.getElementById("pers31");
const pers32 = document.getElementById("pers32");
const pers33 = document.getElementById("pers33");
const pers41 = document.getElementById("pers41");
const pers42 = document.getElementById("pers42");
const pers43 = document.getElementById("pers43");

//JsonPlaceholder

const name1 = document.getElementById("name1");
const email1 = document.getElementById("email1");
const name2 = document.getElementById("name2");
const email2 = document.getElementById("email2");
const name3 = document.getElementById("name3");
const email3 = document.getElementById("email3");


const openweather = "http://api.openweathermap.org/data/2.5/weather?q=Kyiv,%20UA&APPID=6e0385251f05447580d2eb9af9730ae9";
const my_file = "data.json";
const jsonPlaceholder = "https://jsonplaceholder.typicode.com/users"

let res1;
let res2;
let res3;


fetch(openweather)
    .then(response => response.json())
    .then(r => {
        res1 = r; 
        //console.log(res1)
        par1.textContent =
        `Місто: ${res1.name}`;
        par2.textContent =
        `Облачно: ${res1.clouds.all}%`;
        par3.textContent =
        `Вологість: ${res1.main.humidity}%`;
        par4.textContent =
        `Температура: ${Math.round(res1.main.temp - 273)} ℃`;
        par5.textContent =
        `Макс.температура: ${Math.round(res1.main.temp_max - 273)} ℃`;
        par6.textContent =
        `Мін.температура: ${Math.round(res1.main.temp_min - 273)} ℃`;
        par7.textContent =
        `Відчувається як: ${Math.round(res1.main.feels_like - 273)} ℃`;

    })
    .catch(err => console.log(err))

fetch(jsonPlaceholder)
    .then(response => response.json())
    .then(r => {
        res2 = r; 
        console.log(res2)
        name1.innerHTML = `<b>Ім'я та прізвище:</b> ${res2[0].name}`
        email1.innerHTML = `<b>EMAIL:</b> ${res2[0].email}`
        name2.innerHTML = `<b>Ім'я та прізвище:</b> ${res2[6].name}`
        email2.innerHTML = `<b>EMAIL:</b> ${res2[6].email}`
        name3.innerHTML = `<b>Ім'я та прізвище:</b> ${res2[4].name}`
        email3.innerHTML = `<b>EMAIL:</b> ${res2[4].email}`
    })
    .catch(err => console.log(err))

fetch(my_file)
    .then(response => response.json())
    .then(r => {
        res3 = r; 
        //console.log(res3.person2.age);
        pers11.innerHTML = `<b>Ім'я та прізвище:</b> ${res3.person1.name}`;
        pers12.innerHTML = `<b>Вік:</b> ${res3.person1.age}`;
        pers13.innerHTML = `<b>Хобі:</b> ${res3.person1.hobbies}`;
        pers21.innerHTML = `<b>Ім'я та прізвище:</b> ${res3.person2.name}`;
        pers22.innerHTML = `<b>Вік:</b> ${res3.person2.age}`;
        pers23.innerHTML = `<b>Хобі:</b> ${res3.person2.hobbies}`;
        pers31.innerHTML = `<b>Ім'я та прізвище:</b> ${res3.person3.name}`;
        pers32.innerHTML = `<b>Вік:</b> ${res3.person3.age}`;
        pers33.innerHTML = `<b>Хобі:</b> ${res3.person3.hobbies}`;
        pers41.innerHTML = `<b>Ім'я та прізвище:</b> ${res3.person4.name}`;
        pers42.innerHTML = `<b>Вік:</b> ${res3.person4.age}`;
        pers43.innerHTML = `<b>Хобі:</b> ${res3.person4.hobbies}`;
        })
    .catch(err => console.log(err)) 
