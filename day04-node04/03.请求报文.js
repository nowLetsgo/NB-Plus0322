/* 
    get请求报文：
        //1.报文首行（请求的信息：请求方式+主机地址和端口+查询字符串[就是请求携带的数据] 协议名称）
        GET http://127.0.0.1:3000/?user=laowang&pass=123 HTTP/1.1

        //2.报文头部
        Host: 127.0.0.1:3000//主机地址+端口号
        Connection: keep-alive//保持长连接
        Cache-Control: no-cache//是否读取缓存 不读取
        //是否允许使用https：允许
        Upgrade-Insecure-Requests: 1
        //用户代理字符串
        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36
        //客户端可以接收的类型
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng
        //支持的压缩类型
        Accept-Encoding: gzip, deflate, br
        //支持的语言
        Accept-Language: zh-CN,zh;q=0.9

        //3.报文空行（用来间隔报文体）

        //4.报文体（请求的内容，但是get请求的内容都在url地址上，所以get请求报文体为空）

*/

/* 
    POST请求报文
        //1.请求报文首行
        POST http://127.0.0.1:3000/ HTTP/1.1
        //2.请求报文头
        Host: 127.0.0.1:3000
        Connection: keep-alive
        Content-Length: 22
        Cache-Control: max-age=0
        Upgrade-Insecure-Requests: 1
        Content-Type: application/x-www-form-urlencoded
        User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36
        Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng
        Accept-Encoding: gzip, deflate, br
        Accept-Language: zh-CN,zh;q=0.9
        //3.请求报文空行
        
        //4.请求报文体(post请求 发送的数据在报文体中)
        user=laoli&pass=123456

*/