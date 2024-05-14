

// function kokAlti(x) {
//   for (let i = 0; i <= x / 2; i++) {
//     if (i * i === x) {
//       return i;
//     }
//   }
//   return `${x} ededinin koku yoxdur`;
// }

// let result = kokAlti(27);
// console.log(result);

// function count(str) {
//   let saitlər = 0;
//   let samitlər = 0;
//   const saits = "aıoueəiöü";
//   const samits = "bcdfghjklmnpqrstvwxz";

//   for (let i = 0; i < str.length; i++) {
//     let char = str[i].toLowerCase();
//     switch (true) {
//       case saits.includes(char):
//         saitlər++;
//         break;
//       case samits.includes(char):
//         samitlər++;
//         break;
//       default:
//         break;
//     }
//   }

//   return {
//     saits: saitlər,
//     samits: samitlər,
//   };
// }

// const result = count("salam ürək");
// console.log(`Saitler: ${result.saits}, Samitler: ${result.samits}`);

function combine(arr) {
  let element = arr.join("");
  return element;
}

let elements = [1, "test", 8, "any text"];
console.log(combine(elements));
