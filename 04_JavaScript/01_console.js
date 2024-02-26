console.log("Starting...");

const first = 1;
let second = 2;
var third = 3;

second = function (value) {
  return console.log(value);
};

second("connected!");

const myName = "Rachel";

console.log(myName);

if (myName === "Rachel") {
  console.log("true");
}

// Quiz. 아래의 배열에서 "아이스크림" 콘솔에 찍기
const letters = [
  "사",
  "스",
  "자",
  "크",
  "진",
  "안",
  "리",
  "이",
  "가",
  "수",
  "림",
  "나",
  "아",
  "으",
  "차",
  "운",
];

console.log(letters[12], letters[7], letters[1], letters[3], letters[10]);

const introduce = {
  name: "이다영",
  interest: ["health", "food", "water"],
  hobby: "knitting",
  isLeader: false,
  mbti: "INTP",
};

console.log(introduce);

function sum(num1, num2) {
  return num1 + num2;
}

console.log(sum(3, 6));

function multiply(num1, num2) {
  return num1 * num2;
}

console.log(multiply(7, 3));

function square(num) {
  return num * num;
}

console.log(square(3));

let ifOdd = function odd(num) {
  if (num % 2 == 0) {
    return `${num}은 짝수입니다.`;
  } else return `${num}은 홀수입니다.`;
};

let result = ifOdd(20942);
console.log(result);
