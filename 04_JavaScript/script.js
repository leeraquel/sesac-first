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
