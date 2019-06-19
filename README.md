# forin_promise

基于 promise 来进行 forin 遍历数组



## demo

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

