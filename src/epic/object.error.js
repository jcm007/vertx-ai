module.exports = {
    fn10001: (arg, type) => `[AI-10001] Argument must be ${type}, but now it's ${arg}`,
    fn10002: (arg, type, expected) => `[AI-10002] Argument must be in (${expected}), but now it's ${arg}`,

    fn10003: (fileType) => `[AI-10003] The fileType=${fileType} is unknown and could not found parser`,
    fn10004: (arg) => `[AI-10004] The executor of command '${arg}' could not be found`,
    fn10005: (arg, expected) => `[AI-10005] The command '${arg}' could not be found, expected '${expected}'`,
    fn10006: (arg) => `[AI-10006] The command missed required arguments: '${arg}'`,

    fn10007: (arg) => `[AI-10007] The file '${arg}' does not exist or it's a directory.`,
    fn10008: (arg) => `[AI-10008] The directory '${arg}' does not exist or it's a file.`,
    fn10009: (arg) => `[AI-10009] The path '${arg}' does not exist.`,

    fn10010: (arg = []) => `[AI-10010] The tool detect more than one project folders, found '${arg.length}', please switch.`,
    fn10011: (arg) => `[AI-10011] 'api' attribute has been missed in current config ${JSON.stringify(arg)}`,
    fn10012: (arg, entity) => `[AI-10012] Duplicated member '${arg}' found in class '${entity}', please check.`,
    fn10013: (arg) => `[AI-10013] Zero system could not analyze the code line type, type = ${arg} is Unknown`,
    fn10014: (arg) => `[AI-10014] More than one 'package' sentence found.${JSON.stringify(arg)}`,
    fn10015: (arg, entity) => `[AI-10015] Duplicated method '${arg}' found in class '${entity}', please check.`,

    fn10016: (arg) => `[AI-10016] Zero UI specification wrong, you could not execute in '${arg}'`,
    fn10017: (arg) => `[AI-10017] Current folder '${arg}' is not project folder, please switch to project root directory`,
    fn10018: (arg) => `[AI-10018] Zero Resource config file missing '${arg}', please check.`,
    fn10019: (arg) => `[AI-10019] This command could run in project root folder only, current folder = ${arg}`,
    fn10020: (arg) => `[AI-10020] The menu data file must be json format with 'data' (Array) node, current = ${arg}`,
    fn10021: (arg, value) => `[AI-10021] The condition '${arg} = ${value}' hit duplicated record in your file.`,
    fn10022: (arg) => `[AI-10022] Could not find root folder of current project. ${arg}`,
    fn10023: (arg) => `[AI-10023] Initialized folder must be empty, current ${arg} is invalid`,
    fn10024: (arg) => `[AI-10024] This operation is not allowed for current path ${arg}`,
    fn10025: (arg) => `[AI-10025] Web control initialized require "actual.data" must be string, current:${arg}`,
    fn10026: (arg) => `[AI-10026] The path is invalid, ${arg}, system support one of ".", "src/components/xxx", "xxx".`,
    fn10027: (arg) => `[AI-10027] The path must be format with "<module>/<page>", could not be others, current = ${arg}`,
    fn10028: (arg) => `[AI-10028] The "module" parameter must be one of "FORM", "FILTER", "HALF", "EDIT" values. current = ${arg}`,
    fn10029: (arg) => `[AI-10029] [DEV] You'll use development command, please set "ZT" environment first, format = "<module>/<page>", current = ${arg}`,
    fn10030: (arg, key) => `[AI-10030] [DEV] This method require "${key}" in your resource file, but current "${key}" = ${arg}`,
    fn10031: (arg) => `[AI-10031] [DEV] Button key must start with "btn", current ${arg}`
};