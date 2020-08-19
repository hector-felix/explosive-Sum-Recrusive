let array = [];

function sum(n, m = n) {
  console.log(`N: ${n}`)
  if (n == 0) 
    return 1;
  if (n < 0 || m == 0) 
    return 0;
  if (array[n] && array[n][m]) {
    console.log(`Array n: ${array[n]} Array NM: ${array[n][m]}`);
    return array[n][m];
  }
  let total = sum(n, m - 1) + sum(n - m, m);
  console.log(`Total: ${total}`);
  if (!array[n]) {
    array[n] = [];
  }
  array[n][m] = total;
  return total;
}


console.log(sum(3));
// //Basic
// sum(1) // 1
// sum(2) // 2  -> 1+1 , 2
// sum(3) // 3 -> 1+1+1, 1+2, 3
// sum(4) // 5 -> 1+1+1+1, 1+1+2, 1+3, 2+2, 4
// sum(5) // 7 -> 1+1+1+1+1, 1+1+1+2, 1+1+3, 1+2+2, 1+4, 5, 2+3
// sum(10) // 42
// //Explosive
// sum(50) // 204226
// sum(80) // 15796476
// // sum(100) // 190569292