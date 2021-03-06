/* 
    在理论上网络模型分为7层 被称作为OSI七层网络模型
    在应用实践上分为四层，被称作为TCP/IP四层网络模型
    - 应用层
        - TCP/IP协议的应用层对应这OSI的应用层、会话层、表示层
        - 应用层：为用户的应用提供支持和网络访问(HTTP)
        - 会话层：负责网络中的通信
        - 表示层：负责转化数据，对数据的加密和压缩

    - 传输层
        - 提供应用程序接口（TCP）
        - 对数据进行检测，流量控制

    - 网络层
        - 解决数据由一个计算机的ip如何发送到目标计算机的过程（IP）
        - 包含了MAC地址 IP地址 

    - 链路层
        - 将数据转化为电子的形式在传输介质上传播
*/