export function ACORN(
  seed = new Date().getTime(),
  moduloPower = 60,
  order = 10
) {
  let M = 2 ** moduloPower;

  let temp = +seed.toString().split("").reverse().join("");
  seed = seed * temp;

  seed = seed % M;

  if (seed % 2 === 0) {
    seed++;
  }

  let seed2 = (seed + 2) % M;

  const memo = [];
  for (let i = 0; i < order + 1; i++) {
    memo.push([]);
    for (let j = 0; j < order + 1; j++) {
      memo[i].push(null);
    }
  }

  const go = (m, n) => {
    if (m === 0) {
      return seed;
    } else if (n === 0) {
      return seed2;
    } else {
      const getCached = (m, n) => {
        if (memo[m][n] !== null) {
          return memo[m][n];
        }
        const result = go(m - 1, n) + go(m, n - 1);
        memo[m][n] = result;
        return result;
      };

      return getCached(m, n) % M;
    }
  };

  let xk = go(order, order);

  return xk / M;
}
