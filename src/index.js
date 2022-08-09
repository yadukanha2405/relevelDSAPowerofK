import "./styles.css";

document.getElementById("app").innerHTML = `
<h1>Hello Vanilla!</h1>
<div>
  We use the same configuration as Parcel to bundle this sandbox, you can find more
  info about Parcel 
  <a href="https://parceljs.org" target="_blank" rel="noopener noreferrer">here</a>.
</div>
`;

let power = Array(31).fill(0);
let pre = Array(31).fill(0);

let PowerOfK = (k) => {
  let x = 1;
  for (let i = 0; i < 31; i++) {
    power[i] = x;

    x *= k;
  }

  pre[0] = 1;
  for (let i = 1; i < 31; i++) {
    pre[i] = pre[i - 1] + power[i];
  }
};

let Sum = (n, k) => {
  let result = (n * (n + 1)) / 2;
  for (let i = 0; i < 31; i++) {
    if (power[i] > n) {
      result -= 2 * pre[i - 1];
      break;
    }
  }
  return result;
};

let n = 5;
let k = 3;
PowerOfK(k);
console.log(Sum(n, k));
