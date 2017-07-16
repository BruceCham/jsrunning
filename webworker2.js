function time(cur, pre){
  return (cur-pre)/1000
}
let aT = +new Date()
console.log('第二线程开始时间：', aT)
this.onmessage = function(event){
    let {c,actionTime} = event.data;
    console.log('第二线程开始：', time(+new Date(), actionTime))
    let j
    for(let i = 0;i< c;i++){
      j = i
    }
    this.postMessage(j);
    console.log('第二线程结束：', time(+new Date(), actionTime))
};