var value = $("input").val();

// $("input").val("설정완료");

function onClick() {
  $("input").attr("placeholder", "이름을 입력하세요");
}

$("input[name=pw]").on("keyup", (e) => {
  // console.log('e.key', e.key);
  // 엔터 키 누르면 콘솔로 해당 input의 값 출력하기
  if (e.key === "Enter") {
    console.log(e.target.value);
  }
});
