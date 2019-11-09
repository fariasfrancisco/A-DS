function sherlockAndAnagrams(s) {
  function getSubstrings(string) {
    const l = string.length;
    const substrings = [];

    for (let i = 0; i < l; i++) {
      substrings.push([]);

      for (let j = 0; j < l; j++) {
        if (j + i + 1 > l) break;

        substrings[i].push(string.slice(j, j + i + 1));
      }
    }

    return substrings;
  }

  function areAnagrams(s1, s2) {
    const m1 = new Map();
    const m2 = new Map();
    const l = s1.length;
    let char1, char2, amt;

    for (let i = 0; i < l; i++) {
      char1 = s1.charAt(i);
      char2 = s2.charAt(i);

      m1.set(char1, m1.has(char1) ? m1.get(char1) + 1 : 1);
      m2.set(char2, m2.has(char2) ? m2.get(char2) + 1 : 1);
    }

    if (m1.size !== m2.size) return false;

    for (const [char, count] of m1.entries()) {
      amt = m2.get(char);

      if (amt == null || amt !== count) return false;
    }

    return true;
  }

  const subs = getSubstrings(s);
  let l, count = 0;

  for (const substrings of subs) {
    l = substrings.length;

    for (let i = 0; i < l; i++) {
      for (let j = i + 1; j < l; j++) {
        if (areAnagrams(substrings[i], substrings[j])) count++;
      }
    }
  }

  return count;
}
