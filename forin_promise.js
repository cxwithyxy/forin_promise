"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
}
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = __importDefault(require("lodash"));
const p_limit_1 = __importDefault(require("p-limit"));
/**
 * forin_promise
 *
 * @param {Array<any>} _list The array you want to "for in"
 * @param {((_v: any, _k?: any) => Promise<any>)} _func each loop calling function
 * @param {number} [thread_limit=1] how many loop at a same time
 */
async function forin_promise(_list, _func, thread_limit = 1) {
    let limit = p_limit_1.default(thread_limit);
    let queque = [];
    lodash_1.default.forEach(_list, (v, k) => {
        queque.push(limit(async () => {
            await _func(v, k);
        }));
    });
    await Promise.all(queque);
}
exports.default = forin_promise;
