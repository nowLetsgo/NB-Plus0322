/* 
    session:
        - 服务端存储
        1.客户端发送登录请求，在报文体中携带登录信息
        2.服务端接收请求，创建一个session对象，然后给当前的用户信息创建一个永远不会重复的sessionID，把当前的用户的信息和sessionID组成一个key-value保存在session对象中
        3.服务端返回响应，cookie携带了sessionID
        4.客户端接收响应，把sessionID保存在cookie中
        5.客户端第二次发送请求，会自动携带cookie，cookie中携带有sessionID
        6.服务端通过解析，获取到了客户端请求的cookie中的sessionID,去判断用户信息是否在session对象中保存
        7.如果服务端验证成功，则会响应对应的请求，否则需要再次登录

*/