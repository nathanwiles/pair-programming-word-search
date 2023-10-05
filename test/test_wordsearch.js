const chai = require("chai");
const assert = chai.assert;

const wordSearch = require("../wordsearch.js");

describe("#wordSearch()", function () {
  it("should return false if the word is not present", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "FRANK"
    );

    assert.isFalse(result);
  });

  it("should return true if the word is present horizontaly", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["Y", "F", "C", "F", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "SEINFELD"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is reversed horizontaly", function () {
    const result = wordSearch(
      [
        ["A", "W", "C", "F", "Q", "U", "A", "L"],
        ["S", "E", "I", "N", "F", "E", "L", "D"],
        ["D", "R", "A", "W", "K", "C", "A", "B"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "S", "Y", "E", "R", "L"],
        ["B", "F", "R", "E", "N", "E", "Y", "B"],
        ["U", "B", "T", "W", "A", "P", "A", "I"],
        ["O", "D", "C", "A", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "BACKWARD"
    );

    assert.isTrue(result);
  });

  it("should return true if the word is present vertically", () => {
    const result = wordSearch(
      [
        ["A", "W", "C", "V", "Q", "U", "A", "L"],
        ["S", "E", "I", "E", "F", "E", "L", "D"],
        ["Y", "F", "C", "R", "Q", "U", "A", "L"],
        ["H", "M", "J", "T", "E", "V", "R", "G"],
        ["W", "H", "C", "I", "Y", "E", "R", "L"],
        ["B", "F", "R", "C", "N", "E", "Y", "B"],
        ["U", "B", "T", "A", "A", "P", "A", "I"],
        ["O", "D", "C", "L", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "VERTICAL"
    );
    assert.isTrue(result);
  });

  it("should return true if the word is reversed vertically", () => {
    const result = wordSearch(
      [
        ["A", "W", "C", "L", "Q", "U", "A", "L"],
        ["S", "E", "I", "A", "F", "E", "L", "D"],
        ["Y", "F", "C", "C", "Q", "U", "A", "L"],
        ["H", "M", "J", "I", "E", "V", "R", "G"],
        ["W", "H", "C", "T", "Y", "E", "R", "L"],
        ["B", "F", "R", "R", "N", "E", "Y", "B"],
        ["U", "B", "T", "E", "A", "P", "A", "I"],
        ["O", "D", "C", "V", "K", "U", "A", "S"],
        ["E", "Z", "K", "F", "Q", "U", "A", "L"],
      ],
      "VERTICAL"
    );
    assert.isTrue(result);
  });
});
