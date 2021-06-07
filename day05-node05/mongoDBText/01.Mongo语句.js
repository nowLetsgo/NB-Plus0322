/* 
    // 查看当前Mongo中所有的数据库
    show databases

    //使用或者创建一个数据库
    use atguigu

    //查看当前所在的数据库
    db

    // 新增一条数据
    db.student.insert({name:"小龙女",age:612,sex:"女"})

    //新增多条数据
    db.student.insert([{name:"杨过",age:600,sex:"男"},{name:"尹志平",age:702,sex:"男"}])



    // 查找当前集合所有的数据
    db.student.find()

    //查找当前集合 所有年龄为302的数据
    db.student.find({age:302})

    //查找当前集合 所有男的数据
    db.student.find({sex:"男"})

    //查找当前集合 id为某个值的（id是自动生成的）
    db.student.find({_id:ObjectId("60bd89542154201d5853b42a")})

    //查找当前集合  年龄小于等于600岁的
    db.student.find({age:{$lte:600}})

    //查找当前集合  年龄大于等于600岁的
    db.student.find({age:{$gte:600}})

    //查找当前集合  年龄大于600岁的
    db.student.find({age:{$gt:600}})

    //查找当前集合  年龄小于600岁的
    db.student.find({age:{$lt:600}})

    //查找当前集合 年龄大于等于600  或 性别是男 的数据
    db.student.find({$or:[{age:{$gte:600}},{sex:"男"}]})

    //查找当前集合 年龄符和 600 302 612的条件的时候
    db.student.find({age:{$in:[600,302,612]}})

    //查找当前集合 以小为开头 （正则表达式）
    db.student.find({name:/^小/})

    //查找符合where条件的
    db.student.find({$where:function(){
        return this.age>600 || this.age<40
    }})

    //查找符合条件的数据  并限制显示的字段 只显示name 和 id
    db.student.find({},{name:1})
    //查找符合条件的数据  并限制显示的字段 只显示name 和 id和age
    db.student.find({},{name:1,age:1})
    //查找符合条件的数据  并限制显示的字段 只显示name和age
    db.student.find({},{name:1,age:1,_id:0})
    //查找符合条件的数据  并限制显示的字段 不显示age
    db.student.find({},{age:0})


    //修改某个符合条件的数据
    db.student.updateOne({sex:"男"},{$set:{age:2}})
    //修改所有符合条件的数据
    db.student.updateMany({sex:"男"},{$set:{age:4}})
    
    //删除某个符合条件的数据
    db.student.deleteOne({age:36})
*/