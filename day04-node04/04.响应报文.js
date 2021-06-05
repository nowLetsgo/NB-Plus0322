/* 
    GET响应报文：
        //1.响应报文首行(协议名 状态码  状态值)
        HTTP/1.1 200 OK
        //2.响应报文头
        Content-Type: text/plain;charset=utf-8//响应的内容的格式和数据编码
        Date: Sat, 05 Jun 2021 02:26:26 GMT//响应的时间
        Connection: keep-alive//保持长连接
        Keep-Alive: timeout=5//长连接的保持时间
        Content-Length: 9//响应内容的字节长度
        //3.响应报文空行

        //4.响应报文体
        你真棒

*/


/* 
    POST响应报文：
        HTTP/1.1 200 OK
        Content-Type: text/plain;charset=utf-8
        Date: Sat, 05 Jun 2021 02:30:04 GMT
        Connection: keep-alive
        Keep-Alive: timeout=5
        Content-Length: 9

        你真棒


*/