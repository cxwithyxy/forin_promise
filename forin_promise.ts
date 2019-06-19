import _ from "lodash"
import pLimit from "p-limit";


/**
 * forin_promise
 *
 * @param {Array<any>} _list The array you want to "for in"
 * @param {((_v: any, _k?: any) => Promise<any>)} _func each loop calling function
 * @param {number} [thread_limit=1] how many loop at a same time
 */
async function forin_promise(_list: Array<any>, _func: (_v: any, _k?: any) => Promise<any>, thread_limit: number = 1)
{
    let limit:Function = pLimit(thread_limit)
    let queque:Array<any> = [];
    _.forEach(_list, (v,k) =>
    {
        queque.push(limit(async () =>
        {
            await _func(v, k)
        }))
    })
    await Promise.all(queque)
}

export default forin_promise