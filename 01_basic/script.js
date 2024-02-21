document.getElementById("rotateBtn").addEventListener("click", function () {
  document.getElementById("transformBox").style.transform = "rotate(45deg)";
});

document.getElementById("scaleBtn").addEventListener("click", function () {
  document.getElementById("transformBox").style.transform = "scale(1.5)";
});

document.getElementById("translateBtn").addEventListener("click", function () {
  document.getElementById("transformBox").style.transform = "translateX(50px)";
});

document.getElementById("skewBtn").addEventListener("click", function () {
  document.getElementById("transformBox").style.transform = "skewX(20deg)";
});

document.getElementById("flipContainer").addEventListener("click", function () {
  var flipper = document.getElementById("flipper");
  var rotation =
    flipper.style.transform === "rotateY(180deg)"
      ? "rotateY(0deg)"
      : "rotateY(180deg)";
  flipper.style.transform = rotation;
});
