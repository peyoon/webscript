let num = prompt("숫자하나를 입력하세요 : ");

if(num != null){
  if (parseInt(num) > 0) {
    alert ("양수입니다");
  }
  else if (parseInt(num) < 0) {
    alert ("음수입니다");
  }
  else if (parseInt(num) == 0) {
    alert ("0입니다");
  }
  else {
    alert ("잘못입력했습")
  }
}