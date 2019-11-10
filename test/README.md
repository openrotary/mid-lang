# 接口文档

---

```
#define error 
	if(res.status !== 200) {
		throw new Error(res.msg)
	}
#end

    #define find
	if(res.status !== 200) {
		throw new Error(res.msg)
	}
#end
```

#### getUserData get /v1/user/data


> 计算机科学裡的宏是一种抽象（Abstraction），它根据一系列预定义的规则替换一定的文本模式。 解释器或编译器在遇到宏时会自动进行这一模式替换。 对于编译语言，宏展开在编译时发生，进行宏展开的工具常被称为宏展开器。 宏这一术语也常常被用于许多类似的环境中，它们是源自宏展开的概念，这包括键盘宏和宏语言。
> 是这样的


* Name !:String - 用户姓名
* isAdmin - 是否管理员
* id:Number!

#### postUserDetail get /v1/user/detail


* Name !:String - 用户姓名
* isAdmin - 是否管理员
* id:Number !

> 细节
