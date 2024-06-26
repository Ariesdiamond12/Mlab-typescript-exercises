let sum = (num1: number, num2: number) => {
  return num1 + num2;
};
console.log(sum(5, 9));

let newSum = (x: string, y?: boolean) => {
  if (y) {
    return x.toUpperCase();
  } else {
    return x.toLowerCase();
  }
};
console.log();
