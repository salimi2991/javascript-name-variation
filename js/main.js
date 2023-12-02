let inputName = document.querySelector("[name='txt_name']");
let numLetter = document.querySelector(".numLetter");
let space = document.querySelector(".space");
let repeat = document.querySelector(".repeat");
let firstLetter = document.querySelector(".firstLetter");
let lastLetter = document.querySelector(".lastLetter");
let upperCase = document.querySelector(".upperCase");
let lowerCase = document.querySelector(".lowerCase");
let capitalize = document.querySelector(".capitalize");

function getNumLetter(val) {
    return val.length;
}

function getSpace(val) {
    return val.split('').join(' ');
}

function getRepeatLetters(val) {
    let tempArr = val.split("").sort();
    let letters = [];
    let count = 1;

    for (let i = 0; i < tempArr.length; i++) {
        if (tempArr[i] === tempArr[i + 1]) {
            count++;
        } else {
            let v = `${count}${tempArr[i]}`;
            letters.push(v);
            count = 1;
        }
    }
    return letters.join(" ").toUpperCase();
}

function getFirstLetter(val) {
    return val.slice(0, 1);
}

function getLastLetter(val) {
    return val.slice(-1);
}

function getUpperCase(val) {
    return val.toUpperCase();
}

function getLowerCase(val) {
    return val.toLowerCase();
}

function getCapitalize(val) {
    return val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase();
}

inputName.addEventListener("keyup", (e) => {
    e.preventDefault();
    let value = e.target.value.trim();
    numLetter.innerText = getNumLetter(value);
    space.innerText = getSpace(value);
    repeat.innerText = getRepeatLetters(value);
    firstLetter.innerText = getFirstLetter(value);
    lastLetter.innerText = getLastLetter(value);
    upperCase.innerText = getUpperCase(value);
    lowerCase.innerText = getLowerCase(value);
    capitalize.innerText = getCapitalize(value);
})