const func_interface_io = require('./ai.export.interface.io');
const func_interface_util = require("./ai.export.interface.util");
const func_interface_string = require('./ai.export.interface.fn.string');

const func_impl_parse = require('./ai.export.impl.fn.parse');
const func_impl_seek = require("./ai.export.impl.fn.seek");

const func_impl_excel = require('./ai.economy.impl.fn.excel');
const func_impl_plugin = require('./ai.economy.impl.fn.plugin');
const func_impl_react = require('./ai.economy.impl.fn.react');
const func_impl_java = require('./ai.economy.impl.fn.java');
const func_impl_execute = require('./ai.economy.impl.fn.execute');
const func_impl_json = require('./ai.economy.impl.fn.json');

const exported = {
    ...func_interface_io,
    ...func_interface_util,
    ...func_interface_string,

    ...func_impl_parse,
    ...func_impl_seek,

    ...func_impl_execute,
    ...func_impl_excel,
    ...func_impl_react,
    ...func_impl_plugin,
    ...func_impl_java,
    ...func_impl_json,
};
/**
 * @overview
 *
 * # Zero Ai研发文档
 *
 * 该文档提供给研发人员直接研发下列工具专用，最新版本`0.3.2`。
 *
 * ## 1. 命令清单
 *
 * * `ai xxx`：基础命令工具。
 * * `aj xxx`：界面工具集。
 *
 * ## 2. Epic使用方法
 *
 * ```js
 * const Ec = require('./epic');
 * // Ec.xxx 调用全程Api
 * ```
 *
 * ## 3. 命令表
 *
 * ### 3.1. 标准命令
 *
 * |命令执行|含义|
 * |---|:---|
 * |ai csv|读取数据文件中的Array数组数据转换成csv的文件格式并输出。|
 * |ai data|专用数据生成器，可生成`Object/Array`两种数据格式。|
 * |ai key|为输入数据中的Array或Object追加`UUID`格式的字段，字段可配置，默认为`field = key`属性。|
 * |ai uk|检查输入数据中是否包含了`field1,field2,field3`属性中的重复数据，直接输出结果。|
 * |ai uuid|随机生成一定数量的UUID字符串，并且拷贝到剪切板中（MacOs）。|
 * |ai init|「前端」生成项目的初始化代码骨架。|
 *
 * ### 3.2. Zero命令
 *
 * |命令执行|含义|
 * |---|:---|
 * |aj icomplex|「模块」生成`ExListComplex`专用模块。|
 * |aj iform|「组件」生成`ExForm`专用组件。|
 * |aj jperm|「后端」生成权限专用的Excel数据文件。|
 * |aj jplugin|「后端」针对新建的Maven项目执行Ox中集成项目的初始化代码骨架。|
 * |aj jinit|「后端」生成项目的初始化代码骨架。|
 *
 */
/**
 * ## ai命令
 *
 * ### 1. 基本使用
 *
 * ai命令的专用语法如下：
 *
 * ```shell
 * ai <command> [options1|options2|options3...]
 * ```
 *
 * ### 2. 命令列表
 *
 * |命令执行|含义|
 * |---|:---|
 * |ai csv|读取数据文件中的Array数组数据转换成csv的文件格式并输出。|
 * |ai data|专用数据生成器，可生成`Object/Array`两种数据格式。|
 * |ai key|为输入数据中的Array或Object追加`UUID`格式的字段，字段可配置，默认为`field = key`属性。|
 * |ai uk|检查输入数据中是否包含了`field1,field2,field3`属性中的重复数据，直接输出结果。|
 * |ai uuid|随机生成一定数量的UUID字符串，并且拷贝到剪切板中（MacOs）。|
 *
 * ### 3. 数据通用格式
 *
 * **带data节点**
 *
 * ```json
 * {
 *     "data": [
 *          {
 *              "name": "Lang1",
 *              "email": "lang.yu1@hpe.com"
 *          },
 *          {
 *              "name": "Lang2",
 *              "email": "lang.yu2@hpe.com"
 *          }
 *     ]
 * }
 * ```
 *
 * **直接格式**
 *
 * ```json
 * [
 *      {
 *          "name": "Lang1",
 *          "email": "lang.yu1@hpe.com"
 *      },
 *      {
 *          "name": "Lang2",
 *          "email": "lang.yu2@hpe.com"
 *      }
 * ]
 * ```
 *
 * @module ai
 */
/**
 * ## aj命令
 *
 * ### 1. 基本使用
 *
 * aj命令的专用语法如下：
 *
 * ```shell
 * aj <command> [options1|options2|options3...]
 * ```
 *
 * ### 2. 命令列表
 *
 * |命令执行|含义|
 * |---|:---|
 * |aj icomplex|「模块」生成`ExListComplex`专用模块。|
 * |aj iform|「组件」生成`ExForm`专用组件。|
 * |aj jperm|「后端」生成权限专用的Excel数据文件。|
 *
 * ### 3. 标准化配置
 *
 * ```js
 * {
 *      module: 'ZT环境变量设置的模块',
 *      language: 'Z_LANGUAGE语言环境变量设置，默认「cn」',
 *      pathRoot: '系统根据执行目录计算的当前项目根目录',
 *      pathResource: '资源目录',
 *      pathUi: '生成代码目录',
 *      namespace: 'Cab.json中所需的名空间值',
 *      input: {
 *          params: {
 *              MODULE: '当前模块的文字描述名称',
 *              API: '构造标准接口`/api/xxx`的RESTful接口专用路径替换部分。',
 *              IDENTIFIER: '模型的统一标识符，最终会绑定到identifier中。'
 *          },
 *          tpl: {
 *              type: '使用的模板tpl文件目录，cab/下的目录名',
 *              source: '「单文件」单文件的拷贝源',
 *              target: '「单文件」单文件的目标拷贝文件'
 *          }
 *      },
 *      runtime: {
 *          namespaceFile: 'Cab.json文件生成路径',
 *          resource: '资源文件的根目录',
 *          resourceFiles: {
 *              'fileName1': '资源文件地址，json后缀，模板则是fileName1.tpl文件',
 *              'fileName2': '......'
 *          },
 *          ui: '代码文件根目录',
 *          uiFiles: {
 *              'fileName1': '代码文件地址，js后缀，模板则是fileName1.tpl文件',
 *              'fileName2': '......'
 *          }
 *      }
 * }
 * ```
 *
 *
 * ### 4. 标准化模板参数
 *
 * > `tpl`文件中替换的部分会使用配置文件中的参数来替换。
 *
 * |参数|替换部分|含义|
 * |:---|---|:---|
 * |MODULE|`#MODULE#`|当前模块的文字描述名称。|
 * |API|`#API#`|构造标准接口`/api/xxx`的RESTful接口专用路径替换部分。|
 * |IDENTIFIER|`#IDENTIFIER#`|模型的统一标识符，最终会绑定到identifier中。|
 * |NAME|`#NAME#`|绑定文件设定，直接赋值`input.params.NAME = tpl.target`生成单文件专用。|
 * |SIGMA|`#SIGMA`|SIGMA统一标识符，用于标识租户、应用。|
 * |ROLE_ID|`#ROLE_ID#`|操作的角色ID。|
 * |PREFIX|无|生成文件专用参数，不在模板中。|
 * |SHEET|无|工作专用的Sheet名，不在模板中。|
 *
 *
 * @module aj
 */
/**
 * ## 调试专用
 *
 * @module _debug
 */
/**
 * ## 研发专用
 *
 * @module _epic
 */
module.exports = exported;