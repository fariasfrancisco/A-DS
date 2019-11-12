// Given two string, how many characters should be removed from each string to make them anagrams
function countCharactersToAnagram(word1, word2) {
  function populateMap(word) {
    const l = word.length;
    const map = new Map();
    let char;

    for (let i = 0; i < l; i++) {
      char = word.charAt(i);

      map.set(char, map.has(char) ? 1 : map.get(char) + 1);
      set.add(char);
    }

    return map;
  }

  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  const set = new Set();
  const map1 = populateMap(word1);
  const map2 = populateMap(word2);
  let count = 0;
  let charCount1, charCount2;

  for (const [i, entry] of set.entries()) {
    charCount1 = map1.get(entry);
    charCount2 = map2.get(entry);
    count += charCount1 != null ? charCount2 != null ? Math.abs(charCount2 - charCount1) : charCount1 : charCount2;
  }

  return count;
}
