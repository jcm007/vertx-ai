const Log = require('./ai.log');
const Fx = require('./ai.fx');
const U = require('underscore');
const fs = require('fs');
const inflect = require('i')();
const path = require('path');
const SEPRATOR = path.sep;

const _eachFn = (executor, callback, method = "") => {
    if (U.isFunction(executor)) {
        return callback();
    } else {
        Log.warn(`[Zero AI] (${method}) The 'executor' argument must be function, but now ${executor}`);
    }
};

const itPair = (first = [], second = [], executor = () => {
}) => {
    const length = first.length > second.length ? first.length : second.length;
    _eachFn(executor, () => {
        for (let idx = 0; idx < length; idx++) {
            const firstArg = first[idx];
            const secondArg = second[idx];
            executor(firstArg, secondArg, idx);
        }
    }, "itPair")
};

const itObject = (object = {}, executor = () => {
}) => {
    const target = {};
    _eachFn(executor, () => {
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const value = object[key];
                target[key] = executor(key, value)
            }
        }
    }, "itObject");
    return target;
};
/**
 * ## `Ec.itArray`
 *
 * ### 1. 基本介绍
 *
 * 迭代输入的数组，然后执行函数`executor`，该函数签名如下，它有两个参数：
 *
 * ```js
 * function(item, index){
 *
 * }
 * ```
 *
 * ### 2. 内置参数
 *
 * |参数|类型|含义|
 * |---|---|:---|
 * |item|`Object/<Any>`|每一个数组中的元素，任意类型。|
 * |index|Number|该元素在数组中的索引值。|
 *
 * @memberOf module:epic
 * @param {Array} array 被迭代的数组
 * @param {Function} executor 第二参数，必须是一个标准的JavaScript函数
 * @returns {Array} 返回执行完成后的数组
 */
const itArray = (array = [], executor = () => {
}) => {
    const target = [];
    _eachFn(executor, () => array.forEach((item, index) => {
        const each = executor(item, index);
        target.push(each);
    }), "itArray");
    return target;
};

const itFileSync = (path = "", callback) => {
    if (fs.existsSync(path)) {
        const etat = fs.statSync(path);
        if (etat.isDirectory()) {
            const dir = fs.readdirSync(path);
            itArray(dir, (item) => Fx.fxContinue(!item.startsWith('_') && !item.startsWith('.'), () => {
                let divider = path.endsWith(SEPRATOR) ? "" : SEPRATOR;
                let hitFile = path + divider + item;
                itFileSync(hitFile, callback);
            }))
        } else {
            callback(path);
        }
    } else {
        Log.warn(`路径不存在：${path}`)
    }
};

const itCompress = (object = {}, prefix = "") => {
    const items = [];
    const result = {};
    itObject(object, (key, value) => {
        if (key.startsWith(prefix)) {
            items.push(value);
        } else {
            result[key] = value;
        }
    });
    Fx.fxContinue(0 < items.length, () => {
        const prefixes = inflect.pluralize(prefix);
        result[prefixes] = items;
    });
    return result;
};
module.exports = {
    itPair,
    itCompress,
    itFileSync,
    itObject,
    itArray
};