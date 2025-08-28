if (n <= 1) return 0;
  let sum = 1;
  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) {
      sum += i;
      const j = n / i;
      if (j !== i) sum += j;
    }
  }
  return sum;


for (let i = 1; i <= N; i++) {
  const n = Number(lines[i]);          // ← 数値化が大事！
  const s = sumProperDivisors(n);      // ← 関数は () で呼ぶ

  if (s === n) {
    console.log('perfect');
  } else if (s === n - 1) {
    console.log('nearly');
  } else {
    console.log('neither');
  }
}