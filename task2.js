/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
  let a = 0
  let b = 0
  for(let i=0; i<num_list.length; i++){
      if(num_list[i]%2==0){
          a += 1
      }else{
          b += 1
      }
  }
  return [a,b];
}