const fs = require("fs");

function inputDataLines1(filename = "input.txt") {
  return fs
    .readFileSync(filename)
    .toString()
    .trim()
    .split("\n")
    .map((x) => {
      return {
        f: [...x.substring(0, x.length / 2)],
        s: [...x.substring(x.length / 2)].reduce(
          (p, y) => ({ ...p, [y]: undefined }),
          {}
        ),
      };
    });
}

const prioMap = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
  A: 27,
  B: 28,
  C: 29,
  D: 30,
  E: 31,
  F: 32,
  G: 33,
  H: 34,
  I: 35,
  J: 36,
  K: 37,
  L: 38,
  M: 39,
  N: 40,
  O: 41,
  P: 42,
  Q: 43,
  R: 44,
  S: 45,
  T: 46,
  U: 47,
  V: 48,
  W: 49,
  X: 50,
  Y: 51,
  Z: 52,
};

function getSolutionPart1() {
  const input = inputDataLines1();

  let sum = 0;
  for (const i of input) {
    for (const item of i.f) {
      if (item in i.s) {
        sum += prioMap[item];
        break;
      }
    }
  }
  return sum;
}

function inputDataLines2(filename = "input.txt") {
  const stringRows = fs.readFileSync(filename).toString().trim().split("\n");
  const output = [];
  for (let i = 0; i < stringRows.length; i += 3) {
    output.push({
      a: [...stringRows[i]],
      b: [...stringRows[i + 1]].reduce(
        (p, y) => ({ ...p, [y]: undefined }),
        {}
      ),
      c: [...stringRows[i + 2]].reduce(
        (p, y) => ({ ...p, [y]: undefined }),
        {}
      ),
    });
  }

  return output;
}

function getSolutionPart2() {
  const groups = inputDataLines2();
  let sum = 0;

  for (const group of groups) {
    for (const item of group.a) {
      if (item in group.b && item in group.c) {
        sum += prioMap[item];
        break;
      }
    }
  }

  return sum;
}

console.log("Javascript");
const part = process.env.part || "part2";

if (part === "part1") console.log(getSolutionPart1());
else console.log(getSolutionPart2());

module.exports = {
  getSolutionPart1,
  getSolutionPart2,
};
