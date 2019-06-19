# forin_promise

基于 promise 来进行 forin 遍历数组



## 示例 Demo

```typescript
import forin_promise from "forin_promise";
import sleep from "sleep-promise";

let aa = [1,2,3,4,5,6,7,8,9,10,11,"aa","b","c","er"];

async function dododo()
{
    console.log(`forin_promise max thread`);
    
    await forin_promise(aa, async (v,k) =>
    {
        await sleep(Math.random()* 5 * 1000)
        console.log(`value: ${v} ; key: ${k}`);
    }, aa.length)

    console.log(`forin_promise 1 thread`);

    await forin_promise(aa, async (v,k) =>
    {
        await sleep(Math.random()* 5 * 1000)
        console.log(`value: ${v} ; key: ${k}`);
    })
}

dododo()
```

[demo 的 github 仓库](https://github.com/cxwithyxy/forin_promise_demo)



## forin_promise 的使用方法

| 参数  | 类型                  | 说明                                                         |
| ----- | --------------------- | ------------------------------------------------------------ |
| 参数1 | 数组                  | 一个数组，你想怎么样都可以                                   |
| 参数2 | 返回值是Promise的函数 | 一般都是这么写 async(v,k) => {你的代码,自己处理v和k就行了}   |
| 参数3 | 线程数,默认是1        | 就是说有多少个线程在同时执行循环，比方说，数组长度是10的话，那应该有10个循环，当设置线程数是1的时候，就会一个一个循环来走；当线程数等于数组长度的时候，就会同时进行那10个循环了。当然这个线程只是模拟的。 |
|       | Promise               | 返回的是一个 Promise，所以你可以 await 它了。                |

