const num1 = parseInt(prompt("첫번째 수 :"));
const num2 = parseInt(prompt("두번째 수 :"));

for (let i = 1; i <=num1 && i <= num2; i++) {
  if (num1 % i == 0 && num2 % i == 0) {
    console.log(`최대공약수는 ${i}입니다`);
  }
}