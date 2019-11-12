function makeChange(target, coins) {
  coins.sort((a, b) => b - a);
  const l = coins.length;
  let count = 0;

  function recursive(target, coins) {
    const coin = coins[0];
    const times = Math.floor(target / coin);
    console.log(target, times, coins);
    for (let i = 0; i < times; i++) {
      const diff = target - i * coin;
      console.log(diff);
      if (diff === 0) {
        count++;
        return;
      } else if (diff < 0 || coins.length <= 1) return;
      else recursive(target - i * coin, coins.slice(1));
    }
  }

  recursive(target, coins);

  return count;
}
