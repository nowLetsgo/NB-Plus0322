const {
    exec
} = require("child_process");

function open(port, host) {

    const type = process.platform;
    let open = "";
    /* 
        window:start打开浏览器
        MacOS:open打开浏览器
        Linux:xdg-open打开浏览器
    */

    switch (type) {
        case "win32":
            open = "start";
            break;
        case "darwin":
            open = "open";
            break;
        case "linux":
            open = "xdg-open";
            break;
    }
    exec(`${open} ${host}:${port}`)
}

module.exports = open;