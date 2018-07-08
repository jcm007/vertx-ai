const key = require('./ai.key');
const data = require('./ai.data');
const java = require('./java/ai.java');
const react = require('./react/ai.react');
const rs = require('./json/ai.rs');
const exported = {
    ...key,
    ...data,
    // Java代码处理
    ...java,
    // React代码处理
    ...react,
    // Json资源文件处理
    ...rs
};
module.exports = exported;