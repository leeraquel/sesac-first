// console.log("hi1");

// setTimeout(() => {
//   console.log("hi2");
// }, 1000);

// console.log("hi3");

// const id = prompt("your id");
// let userId;
// console.log("trying to login");

// setTimeout(() => {
//   userId = "raquel01";
//   console.log("get user id");
// }, 2000);

// if (userId === id) {
//   console.log("login success");
// } else {
//   console.log("login error");
// }

// console.log("--------------------");
// userId = "test";
// setTimeout(function () {
//   console.log("waiting for login...");
//   if (id === userId) {
//     console.log("login success");
//   } else {
//     console.log("login failure");
//   }
// }, 1000);

// console.log("promise");
// const id = prompt("enter your id");
// const promise = new Promise((resolve, reject) => {
//   console.log("promise start");

//   setTimeout(() => {
//     userId = "test";
//     if (userId === id) {
//       resolve(userId);
//     } else {
//       reject(new Error("Invalid user"));
//     }
//   }, 2000);
// });

// promise
//   .then((data) => {
//     console.log(`userId는 ${data}입니다.`);
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Promise 종료");
//   });

// const headers = new Headers({
//   "Content-Type": "application/json",
//   "x-api-key": "DEMO-API-KEY",
// });

// var requestOptions = {
//   method: "GET",
//   headers: headers,
//   redirect: "follow",
// };

// // fetch(
// //   "https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1",
// //   requestOptions
// // )
// //   .then((response) => response.text())
// //   .then((result) => console.log(result))
// //   .catch((error) => console.log("error", error));

function createCatPhoto() {
  fetch("https://api.thecatapi.com/v1/images/search")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const img = document.createElement("img");
      img.src = data[0].url;
      img.setAttribute("width", 500);

      document.querySelector("#cat").append(img);
    });
}

createCatPhoto();

async function getMovieData() {
  let keyword = "love";
  const h3 = document.querySelector("h3");
  h3.innerHTML = `검색된 키워드 = ${keyword}`;
  const response = await fetch();
  //api key
  const movieData = await response.json();
  console.log(movieData.Search);
  return movieData.Search;
}

async function createMovieData() {
  const movieData = await getMovieData();
  movieData.map(function (data) {
    const ul = document.querySelector("ul");

    const li = document.createElement("li");
    const poster = document.createElement("img");
    const title = document.createElement("p");
    poster.src = data.Poster;
    poster.alt = data.Title;
    title.textContent = data.Title;

    li.append(poster);
    li.append(title);
    ul.append(li);
  });
}
