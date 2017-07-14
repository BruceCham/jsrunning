function p(count){
  return new Promise((resolve)=>{
    resolve()
  })
}

function time(cur, pre){
  return (cur-pre)/1000
}

let c = 2000000000
let actionTime = +new Date()

console.log( '主线程开始：', 0 )

p(c).then(()=>{
  console.log( '队列任务开始：', time(+new Date(), actionTime) )
  let j
  for(let i = 0;i< c;i++){
    j = i
  }
  console.log(j)
  
  console.log( '队列任务完成',  time(+new Date(), actionTime) )
}).catch((e)=>{
  console.log(e)
})

console.log( '主线程开始2：',  time(+new Date(), actionTime) )

let k
for(let i = 0;i< c;i++){
  k = i
}

console.log( '主线程结束：',  time(+new Date(), actionTime) )