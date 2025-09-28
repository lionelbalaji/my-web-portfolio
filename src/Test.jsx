import React from "react";

const Test = () => {
  const arr = [5, 5, 5, 5], k = 2  

  let maxsum=0,windowsum=0

  for(let i=0;i<k;i++){
    windowsum+=arr[i]
  }
  maxsum=windowsum
   for(let i=k;i<arr.length;i++){
      windowsum=windowsum+arr[i]-arr[i-k]
      maxsum=Math.max(maxsum,windowsum)
   }
  console.log(maxsum)

  return <div>test</div>;
};

export default Test;
