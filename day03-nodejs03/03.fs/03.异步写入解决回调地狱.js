const fs = require("fs");
const path = require("path");

//得到文件路径
const filePath = path.resolve(__dirname, "text.txt");


(async () => {
    const fd = await new Promise((resolve, reject) => {
        fs.open(filePath, "a", (err, fd) => {
            //错误处理 调用reject
            if (err) {
                reject(err);
                return;
            }

            resolve(fd);
        })
    });
    await new Promise((resolve, reject) => {
        fs.write(fd, "牵着你的手", (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve();
        })
    });
    const re = await new Promise((resolve, reject) => {
        fs.close(fd, (err) => {
            if (err) {
                reject(err);
                return;
            }

            resolve("全部完成")
        })
    });

    return re;
})()
.then((data) => {
        console.log(data);
    })
    .catch((err) => {
        console.log(err);
    })