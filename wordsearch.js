const wordSearch = (letters, word) => {
  const horizontalJoin = letters.map((ls) => ls.join(""));
  const verticalJoin = letters[0].map((col, i) =>
    letters.map((row) => row[i]).join("")
  );

  const checkWordIn = (lineArr) => {
    const reverseWord = word.split("").reverse().join("");
    for (line of lineArr) {
      if (line.includes(word)) return true;
      if (line.includes(reverseWord)) return true;
    }
  };

  if (checkWordIn(horizontalJoin)) return true;
  if (checkWordIn(verticalJoin)) return true;

  return false;
};

module.exports = wordSearch;
