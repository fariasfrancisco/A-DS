function canWriteNote(magazine, note) {
  const magazineMap = new Map();
  let count;

  for (const word of magazine) {
    magazineMap.set(word, magazineMap.has(word) ? magazineMap.get(word) + 1 : 1);
  }

  for (const word of note) {
    count = magazineMap.get(word);

    if (count == null || count < 1) return false;

    magazineMap.set(word, count - 1);
  }

  return true;
}
