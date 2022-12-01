const fs = require("fs");

function inputDataLinesIntegers(filename = "input.txt") {
  const inputRows = fs.readFileSync(filename).toString().trim().split("\n");
  const outputRows = [];
  let current = [];

  inputRows.forEach((x) => {
    x = parseInt(x);
    if (isNaN(x)) {
      outputRows.push(current);
      current = [];
    } else {
      current.push(x);
    }
  });

  if (current.length > 0) {
    outputRows.push(current);
  }

  return outputRows;
}

function getSolutionPart1() {
  const c = inputDataLinesIntegers();

  const highest = c.reduce(
    (highest, current) =>
      Math.max(
        highest,
        current.reduce((x, y) => x + y, 0)
      ),
    0
  );
  return highest;
}

function getSolutionPart2() {
  const c = inputDataLinesIntegers();

  const sum = (arr) => arr.reduce((x, y) => x + y, 0);

  const highestThree = c.reduce(
    (highestThree, current) =>
      [
        Math.max(highestThree[0], sum(current)),
        highestThree[1],
        highestThree[2],
      ].sort(),
    [sum(c[0]), sum(c[1]), sum(c[2])].sort()
  );

  return sum(highestThree);
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
