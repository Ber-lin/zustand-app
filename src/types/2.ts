enum EMOpType {
  /** 后面追加 */
  Append,
  /** 删除 */
  Delete,
  /** 保持不变 */
  Hold,
}
(function minDistance(word1: string, word2: string) {
  const m = word1.length;
  const n = word2.length;
  const dp = Array.from({ length: m + 1 }, () =>
    Array.from({ length: n + 1 }, () => 0)
  );
  for (let i = 1; i <= m; i++) {
    dp[i][0] = i;
  }
  for (let i = 1; i <= n; i++) {
    dp[0][i] = i;
  }
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1];
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
      }
    }
  }

  console.log(dp);
  const ops: { type: EMOpType; index: number; otherIndex?: number }[] = [];
  let i = m;
  let j = n;
  while (i >= 0 || j >= 0) {
    if (j && dp[i][j] === dp[i][j - 1] + 1) {
      ops.push({ type: EMOpType.Append, index: j - 1 });
      j--;
    } else if (i && dp[i][j] === dp[i - 1][j] + 1) {
      ops.push({ type: EMOpType.Delete, index: i - 1 });
      i--;
    } else if (i && j && dp[i][j] === dp[i - 1][j - 1] + 1) {
      ops.push({ type: EMOpType.Delete, index: i - 1 });
      ops.push({ type: EMOpType.Append, index: j - 1 });
      i--;
      j--;
    } else if (i && j && dp[i][j] === dp[i - 1][j - 1]) {
      ops.push({ type: EMOpType.Hold, index: i - 1 });
      i--;
      j--;
    } else {
      i--;
      j--;
    }
  }
  console.log(ops);
}
)('horse','ros')