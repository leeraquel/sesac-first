// 1. date 객체

let now = new Date();
console.log(now);

now = now.toLocaleString();

console.log(now);
console.log(typeof now);

function showResult(result) {
  document.getElementById("result").innerHTML = result;
}

showResult(now);
