const arr = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "A",
  "C",
  "V",
  "D",
  "S",
  "E",
  "F",
  "B",
];
console.log(arr);

// extra code

// let str = [];
// let int = [];
// for (let i = 0; i <= arr.length; i++) {
//   if (typeof arr[i] === "string") {
//     str.push(arr[i]);
//   } else if (typeof arr[i] === "string") {
//     int.push(arr[i]);
//   }
// }
// console.log(str);
// console.log(int);

let hex1 = arr.slice(0, 6);
let hex2 = arr.slice(9, 11);

let combinehex1 = hex1.concat(hex2);

const hexCode = (combinehex) => {
  let a = combinehex.sort(() => Math.random() - 0.5).join("");
  return `#${a}`;
};

// console.log(hexCode(combinehex1));

let btn = document.querySelector("#btn");
let hexShow = document.querySelector(".color");
btn.addEventListener("click", function () {
  const random = hexCode(combinehex1);
  document.body.style.backgroundColor = random;
  hexShow.textContent = random;
  console.log(random);
});
