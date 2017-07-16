function time(cur, pre){
  return (cur-pre)/1000
}

let c = 2000000000
let actionTime = +new Date()
console.log('第一线程开始时间：',actionTime)
console.log( '第一线程开始：', 0 )

let work = new Worker('./webworker2.js')

// 第一种方式：主运行栈 + Worker 任务队列
work.onmessage = (e)=>{
  console.log(e)
  console.log( '双线程结束',  time(+new Date(), actionTime) )
}
work.postMessage({c,actionTime})

let k
for(let i = 0;i< c;i++){
  k = i
}
console.log( '第一线程结束：',  time(+new Date(), actionTime) )


// 为了消除 js文件加载的耗时造成误差，我们采用第二种方式
// 把代码都放在任务队列中
// setTimeout(()=>{
//   work.onmessage = (e)=>{
//     console.log(e)
//     console.log( '双线程结束',  time(+new Date(), actionTime) )
//   }
//   work.postMessage({c,actionTime})

//   let k
//   for(let i = 0;i< c;i++){
//     k = i
//   }
//   console.log( '第一线程结束：',  time(+new Date(), actionTime) )
// },0)

