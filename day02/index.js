const fs = require("fs");

function inputDataLinesIntegers(filename = "input.txt") {
  return fs
    .readFileSync(filename)
    .toString()
    .trim()
    .split("\n")
    .map((x) => x.split(" "));
}

function getSolutionPart1() {
  const games = inputDataLinesIntegers();
  const moveTranslation = { X: "A", Y: "B", Z: "C" };
  const pointsTranslation = { A: 1, B: 2, C: 3 };
  let score = 0;

  const result = (opponentMove, myMove) => {
    if (opponentMove === myMove) {
      return 3;
    }

    switch (opponentMove) {
      case "A":
        return myMove === "B" ? 6 : 0;
      case "B":
        return myMove === "C" ? 6 : 0;
      case "C":
        return myMove === "A" ? 6 : 0;
    }
  };

  for (let [opponentMove, myMove] of games) {
    myMove = moveTranslation[myMove];
    score += pointsTranslation[myMove];
    score += result(opponentMove, myMove);
  }
  return score;
}

function getSolutionPart2() {
  const games = inputDataLinesIntegers();

  const table = {
    X: {
      A: "C",
      B: "A",
      C: "B",
    },
    Y: {
      A: "A",
      B: "B",
      C: "C",
    },
    Z: {
      A: "B",
      B: "C",
      C: "A",
    },
  };

  let score = 0;

  const pointsMoveTranslation = { A: 1, B: 2, C: 3 };
  const resultTranslation = { X: 0, Y: 3, Z: 6 };

  for (const [opponentMove, desiredOutcome] of games) {
    const myMove = table[desiredOutcome][opponentMove];
    score += pointsMoveTranslation[myMove] + resultTranslation[desiredOutcome];
  }

  return score;
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
