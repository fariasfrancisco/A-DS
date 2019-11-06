// Given two string, how many characters should be removed from each string to make them anagrams
function countCharactersToAnagram (word1, word2) {
  const l1 = word1.length;
  const l2 = word2.length;
  const map1 = new Map();
  const map2 = new Map();
  const set = new Set();
  let count = 0;
  let i, charCount1, charCount2;

  word1 = word1.toLowerCase();
  word2 = word2.toLowerCase();

  for (i = 0; i < l1; i++) {
    charCount1 = map1.get(word1.charAt(i))
    
    if (charCount1 != null) map1.set(word1.charAt(i), charCount1 + 1)
    else map1.set(word1.charAt(i), 1)

    set.add(word1.charAt(i))
  }

  for (i = 0; i < l2; i++) {
    charCount2 = map2.get(word2.charAt(i))
    
    if (charCount2 != null) map2.set(word2.charAt(i), charCount2 + 1)
    else map2.set(word2.charAt(i), 1)

    set.add(word2.charAt(i))
  }

  for (const [i, entry] of set.entries()) {
    charCount1 = map1.get(entry);
    charCount2 = map2.get(entry);
    count += charCount1 != null ? charCount2 != null ? Math.abs(charCount2 - charCount1) : charCount1 : charCount2;
  }

  return count;
}
