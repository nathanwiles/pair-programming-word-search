const wordSearch = (letters, word) => { 
    const horizontalJoin = letters.map(ls => ls.join(''))
    for (line of horizontalJoin) {
        if (line.includes(word)) return true
    }
    return false;
}

module.exports = wordSearch