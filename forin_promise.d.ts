/**
 * forin_promise
 *
 * @param {Array<any>} _list The array you want to "for in"
 * @param {((_v: any, _k?: any) => Promise<any>)} _func each loop calling function
 * @param {number} [thread_limit=1] how many loop at a same time
 */
declare function forin_promise(_list: Array<any>, _func: (_v: any, _k?: any) => Promise<any>, thread_limit?: number): Promise<void>;
export default forin_promise;
