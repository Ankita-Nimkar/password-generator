const btn = document.querySelector(".generatePassword");
const password1 = document.querySelector(".password1");
const password2 = document.querySelector(".password2");
const passwordSelect = document.querySelector("#password-select");
const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];
let passwordOne = "";
let passwordTwo = "";
var valueSelect;
let retainPasswordOne;
let retainPasswordTwo;
let isReplace = false;
// passwor length
function onChange() {
  valueSelect = passwordSelect.value;
  console.log(valueSelect);
}
passwordSelect.onchange = onChange;
if (!valueSelect) valueSelect = 16;
//generate password
function generatePassword() {
  for (i = 0; i < valueSelect; i++) {
    let randomNoOne = Math.floor(Math.random() * characters.length);
    let randomNoTwo = Math.floor(Math.random() * characters.length);
    passwordOne += characters[randomNoOne];
    passwordTwo += characters[randomNoTwo];
  }
  console.log(passwordOne.length);
  password1.value = passwordOne;
  password2.value = passwordTwo;
  retainPasswordOne = passwordOne;
  retainPasswordTwo = passwordTwo;
  passwordOne = "";
  passwordTwo = "";
}

// copy password
function copy() {
  console.log("hello");
  if (password1.value !== "") {
    navigator.clipboard.writeText(password1.value);
    alert("Copied password");
  } else alert("please generate password");
}

//new password
function newPassword() {
  passwordOne = "";
  passwordTwo = "";

  password1.value = passwordOne;
  password2.value = passwordTwo;
}

//toggle symbols
const toggleSymbol = document.querySelector(".toggleSymbols");
function toggleSymbols() {
  if (password1.value !== "") {
    if (isReplace === false) {
      password1.value = password1.value.replace(
        /[&\/\\#,+()$~%.'":*?<>{}]/g,
        ""
      );
      password2.value = password2.value.replace(
        /[&\/\\#,+()$~%.'":*?<>{}]/g,
        ""
      );
      isReplace = true;
    } else {
      password1.value = retainPasswordOne;
      password2.value = retainPasswordTwo;
      isReplace = false;
    }
  } else return;
}

/////toggle numbers
const toggleNumber = document.querySelector(".toggleNumbers");
function toggleNumbers() {
  if (password1.value !== "") {
    if (isReplace === false) {
      password1.value = password1.value.replace(/[0-9]+/g, "");
      password2.value = password2.value.replace(/[0-9]+/g, "");
      isReplace = true;
    } else {
      password1.value = retainPasswordOne;
      password2.value = retainPasswordTwo;
      isReplace = false;
    }
  } else return;
}
