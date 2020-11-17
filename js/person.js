console.log("Hello from script!");

const name = "Karyna Stovman";
const age = 18;
const occupation = "Student";
const city = "Tallinn";
const gender = "Female";

console.log(typeof(name));
console.log(typeof(age));

//Date and Time
const today = new Date ();
let todayDate = today.getDate();
console.log(todayDate);
let todayMonth = today.getMonth();
console.log(todayMonth);
let todayYear = today.getFullYear();
console.log(todayYear);
//let fullDate = today.toLocaleDateString("en-US");
let options = {weekday: "long", year: "numeric", month: "long", day:"numeric"};
let fullDate = today.toLocaleDateString("en-US", options);
console.log(fullDate);

//templates literals
const html = `
<h1> ${fullDate} </h1>
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>Job: ${occupation}</li>
        <li>City: ${city}</li>
        <li>Gender: ${gender}</li>

    </ul>

`;

document.body.innerHTML = html;