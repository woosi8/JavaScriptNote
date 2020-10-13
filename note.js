// 숫자 나열하기
let options = Array(45)
  .fill()
  .map((elem, index) => {
    return index + 1;
  });

console.log(options)



// 짝수 구해서 더하기
let sum = 0;

for (let i = 1; i <=100 ; i++) {
  if(i % 2 == 0)  {
    sum += i;
  }
}
console.log(sum)

// 홀수 짝수 함수
function solution(num) {
    return (num % 2)? "Odd":"Even"; //2로 나누기 하고 나머지 값이 있으면 홀수, 나머지가 없으면 짝수
}
function isEven(value){
    if (value%2 == 0)
        return true;
    else
        return false;
}

// 홀수,짝수 배열만들기
const arr = [1, 2, 3, 4, 5];
const arr2 = arr.filter(number => number % 2 === 0);
const arr3 = arr.filter(number => number % 2 !== 0);
console.log(arr2); 
console.log(arr3); 

// 숫자 합하기
let sum = 0;
for(let i = 1; i <= 100; i++) {
  sum = sum + i;
}

document.writeln(sum);