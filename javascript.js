let minimum = document.getElementById("minimumnumber");
let maximum = document.getElementById("maximumnumber");

let rollbutton = document.getElementById("rollbutton");
let resetbutton = document.getElementById("resetbutton");

let outputplace = document.getElementById("outputplace");

console.log(minimum.value);

rollbutton.addEventListener("click", function(){    
    let maximumconverted = Number(maximum.value);
    let minimumconverted = Number(minimum.value);

    let randomnumber = Math.floor(Math.random() * (maximumconverted - minimumconverted + 1)) + minimumconverted;
    outputplace.innerText = randomnumber;
});

resetbutton.addEventListener("click", function(){
    maximum.value = NaN;
    minimum.value = NaN;

    outputplace.innerText = 0;
});