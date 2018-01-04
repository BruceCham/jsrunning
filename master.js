function time(cur, pre) {
  return (cur - pre) / 1000
}

let c = 2000000000
let actionTime = +new Date()
console.log("第一线程开始时间：", actionTime)
console.log("第一线程开始：", 0)

let work = new Worker("./worker.js")

// 第一种方式：主运行栈 + Worker 任务队列
work.onmessage = e => {
  console.log("master 计算开始", time(+new Date(), actionTime))
  let k
  for (let i = 0; i < c; i++) {
    k = i
  }
  console.log("master 计算结束", time(+new Date(), actionTime))
}

work.postMessage({ c, actionTime })

console.log("master 主线程第一轮eventloop结束")

