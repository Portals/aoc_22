const fs = require("fs");

function inputDataLinesIntegers(filename = "input.txt") {
  return fs
    .readFileSync(filename)
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.split(/,|-/).map((x) => parseInt(x)));
}

function getSolutionPart1() {
  const input = inputDataLinesIntegers();
  let n = 0;
  for (const p of input) {
    const startDiff = p[2] - p[0];
    const endDiff = p[3] - p[1];
    if (startDiff >= 0 && endDiff <= 0) n++;
    else if (startDiff <= 0 && endDiff >= 0) n++;
  }
  return n;
}

function getSolutionPart2() {
  const input = inputDataLinesIntegers();
  let n = 0;
  for (const p of input) {
    const startDiff = p[2] - p[0];
    const endDiff = p[3] - p[1];
    if (startDiff >= 0 && endDiff <= 0) n++;
    else if (startDiff <= 0 && endDiff >= 0) n++;
    else if (startDiff <= 0 && p[0] <= p[3]) n++;
    else if (p[1] >= p[2] && endDiff >= 0) n++;
  }
  return n;
}

console.log("Javascript");
const part = process.env.part || "part2";

if (part === "part1") console.log(getSolutionPart1());
else console.log(getSolutionPart2());

module.exports = {
  getSolutionPart1,
  getSolutionPart2,
  inputDataLinesIntegers,
};
