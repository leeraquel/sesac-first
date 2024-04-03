//common js 를 이용한 require 실습
/*
CommonJS 란? 웹 브라우저 밖의 자바스크립트를 위한 모듈 생태계의 규칙을 설립하기 위한 프로젝트입니다.
개념은 간단합니다. '.js' 파일 간의 어떻게 의존성을 가지게 할지 정해주는 것입니다. commonJS라는 개념이 존재하는 이유는 자바스크립트를 범용적으로 모듈화를 높이기 위해서입니다.

npm init 명령어로 자동으로 해당 프로젝트의 package.json 생성가능
npm install
*/

//module01 쓰기
const Person = require("./module01.cjs");
console.log(Person);

//run js in terminal -> node module_require.cjs 하면 됨.

console.log(typeof Person);

console.log(Person.colors);

Person.sayName("장원영");
const me = new Person.Person("AnhYouJin", 20);

console.log(me);

console.log(me.getBornYear());

//가지고 싶은 변수, 함수, 클래스만 가져오기

const { sayName } = require("./module01.cjs");
// destructuring

sayName("가을양");

const { colors, sayName2 } = require("./module02.cjs");

sayName2("강동원");
