const select = document.querySelectorAll(".currency");
const btn = document.getElementById("btn");
const num = document.getElementById("num");
const ans = document.getElementById("ans");

fetch("https://api.frankfurter.app/currencies")
    .then((data) => data.json())
    .then((data) => {    
        display(data);
    });

function display(data) {
    //Object.entries() method return an array with  key values enumerable (counted) properties of an object.
    const entries = Object.entries(data);
  //  console.log("getting array", entries);
    //console.log("getting curriency", entries[0][0]);
    for (var i = 0; i < entries.length; i++) {
        select[0].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
        select[1].innerHTML += `<option value="${entries[i][0]}">${entries[i][0]}</option>`;
    }
}

btn.addEventListener("click", () => {
    let currency1 = select[0].value;
    let currency2 = select[1].value;
    let value = num.value;

    if (currency1 != currency2) {
        convert(currency1, currency2, value);
    } else {
        num.value = '';
        ans.value = ''; 
        alert("Choose Different Currencies !!!");
    }
});

function convert(currency1, currency2, value) {
    const host = "api.frankfurter.app";
    fetch(
        `https://${host}/latest?amount=${value}&from=${currency1}&to=${currency2}`
    )
        .then((val) => val.json())
        .then((val) => {
           // console.log("getting values",val); //which return object with properties
            console.log(Object.values(val.rates)[0]); // Object.values() method return the array of values of properties of object.
            ans.value = Object.values(val.rates)[0];
        });
}