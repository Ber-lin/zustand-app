//  最短编辑距离
(function minDistance(str1, str2) {
  let len1 = str1.length,
    len2 = str2.length;

  let dp = Array.from(Array(len1 + 1), () => Array(len2 + 1));
  dp[0][0] = 0;

  for(let i=1;i<len1;i++){
    dp[i][0]=dp[i-1][0]+1
  }
  for(let i=1;i<len2;i++){
    dp[0][i]=dp[0][i-1]+1
  }
  for(let i=1;i<len1;i++){
    for(let j=1;j<len2;j++){
        if(str1[i-1]===str2[i-1]){
            dp[i][j]=dp[i-1][j-1]
        }else{
            dp[i][j]=Math.min(dp[i-1][j-1],dp[i-1][j],dp[i][j-1])+1
        }
    }
  }
  console.log(dp);
})('intention','execution')
