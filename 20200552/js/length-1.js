let inc = parseFloat(prompt("변환할 인치"));
let cmc;

cmc = (inc / 0.39370).toFixed(1);
alert(`${inc}인치는 ${cmc}cm 이다.`);