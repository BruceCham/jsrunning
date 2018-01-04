function time(cur, pre){
  return (cur-pre)/1000
}
let aT = +new Date()
console.log('第二线程开始时间：', aT)
this.postMessage("主线程可以开始了")
this.onmessage = function(event){
    let {c,actionTime} = event.data;
    console.log('worker 计算开始：', time(+new Date(), actionTime))
    let j
    for(let i = 0;i< c;i++){
      j = i
    }
    console.log('worker 计算结束：', time(+new Date(), actionTime))
};