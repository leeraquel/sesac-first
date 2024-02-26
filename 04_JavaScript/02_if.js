const userId = "lee";
const userPassword = "password";

/**유저 정보를 받고 적절한 얼럿창을 띄움 */
function loginUser() {
  const inputId = prompt("Enter your id");
  if (inputId === userId) {
    const inputPassword = prompt("Enter your password");
    if (inputPassword === userPassword) {
      alert(`hi ${userId}! welcome!`);
    } else {
      alert(`wrong password`);
    }
  } else alert("wrong id");
}

// loginUser();

//------switch문

let x = 6;
switch (x) {
  case 3:
    console.log("x is 3");
    break;
  case 4:
    console.log("x is 4");
    break;
  case 5:
    console.log("x is 5");
    break;
  default:
    console.log(`x is ${x}`);
}

const checkSwitch = function switchCase() {
  // let x = prompt("enter the number X");
  // x = parseInt(x, 10);
  x = 30;
  switch (x) {
    case 3:
      console.log("x is 3");
      return "x is 3";
    case 4:
      console.log("x is 4");
      return "x is 4";
    case 5:
      console.log("x is 5");
      return "x is 5";
    default:
      console.log(`x is ${x}`);
      return `x is ${x}`;
  }
};

let result = checkSwitch();

document.getElementById("result").innerHTML = result;

function grade() {
  // const inputNum = prompt("please enter your points");
  const num = parseInt(inputNum, 10);
  function cal() {
    switch (num) {
      default:
        return "no grade";
      case 10:
        return "grade 1";
      case 20:
        return "grade 2";
      case 30:
        return "grade 3";
    }
  }
  return cal();
}

// result = grade();
// document.getElementById("result").innerHTML = result;

const checkTime = function () {
  let now = new Date().getHours();
};

function forState() {
  for (let i = 5; i >= 1; i--) {
    console.log("test", i);
  }
}
forState();

function forAdd() {
  let n = 10;
  let result = 0;
  for (let i = 0; i < n; i++) {
    result += i;
  }
  return result;
}

result = forAdd();

document.getElementById("result").innerHTML = result;

let cafe = ["americano", "latte", "espresso", "tea"];
function menu() {
  let cafeteria = "";
  for (let i = 0; i < cafe.length; i++) {
    console.log(cafe[i]);
    cafeteria += cafe[i] + ` `;
  }
  return cafeteria;
}

result = menu();

document.getElementById("result").innerHTML = result;

let numArr = [99, 88, 77, 66, 55];
let numSum = 0;

for (let i = 0; i < numArr.length; i++) {
  numSum += numArr[i];
  console.log(numSum);
}

result = numSum;

document.getElementById("result").innerHTML = result;

function oddNumber() {
  for (let i = 2; i < 100; i++) {
    if (i % 2 === 0) {
      console.log(i);
    }
  }
}
oddNumber();

function timesTable() {
  for (let i = 2; i < 10; i++) {
    for (let j = 1; j < 10; j++) {
      console.log(`${i} * ${j} = ${i * j}`);
    }
  }
}

timesTable();
