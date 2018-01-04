# jsrunning

js 单线程运行验证

```txt
浏览器中有三个常驻的线程，分别是JS引擎，界面渲染，事件响应。
网络请求ajax、I/O流、事件响应，是开辟了新的线程。

webworker ？？？
```

1. `webworker` 开辟了新的线程
2. 主线程第一次 `EventLoop` 结束之后，子线程才开始运行。
3. 主线程与子线程之间的 `onmessage` 回调事件，并行执行，互不影响。
4. 子线程是独立的线程，所以不会影响 `UI` 的渲染。

总结：大计算量的代码，可以放在子线程中执行，执行结束后 `postmessage` 给主线程，主线程在 `onmessage` 中执行回调函数。
**注意：** 主线程的 onmessage 函数依然在 eventloop 中，影响 UI 渲染
