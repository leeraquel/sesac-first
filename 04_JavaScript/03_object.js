// 1. date 객체

let now = new Date();
console.log(now);

let nowStr = now.toLocaleString();

console.log(now);
console.log(typeof now);

function showResult(result) {
  document.getElementById("result").textContent = result;
}

showResult(nowStr);

result = "<h1>태스트중임</h1><strong>Result</strong>";
document.getElementById("result").innerHTML = result;

const getResult = document.getElementById("result");

getResult.innerHTML = "<ol><li>하나</li><li>둘</li><li>셋</li></ol>";

image = document.getElementById("img");
img.classList.add("image");
img.setAttribute("src", "../assets/누끼루피.png");
getResult.textContent = img.getAttribute("src").toLocaleString();

const flowers = document.querySelectorAll("#flower li");

for (let li of flowers) {
  li.style.backgroundColor = "skyblue";
}

for (let li of flowers) {
  li.classList.add("check");
}

getResult.classList.add("check");

console.log(flowers);
let styles = document.querySelectorAll(".check");
console.log(styles);

for (let li of styles) {
  li.style.color = "red";
}

console.log(flowers);

flowers[0].classList.add("pink");

const parentElement = document.querySelector("#flower");
const childElement = document.querySelector("#flower .pink");

console.log(childElement);

const divArr = [];
for (let i = 0; i < 3; i++) {
  const newDiv = document.createElement("div");
  newDiv.textContent = "안녕";
  divArr.push(newDiv);
}
for (let div of divArr) {
  getResult.append(div);
}
