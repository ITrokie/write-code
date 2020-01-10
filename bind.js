/* 
bind：1.返回一个绑定this的函数 2.接收多个参数  3.支持函数柯里化
*/

var obj = {
    name: 'Itrokie',
    getName() {
        return this.name;
    }
}


var getName = obj.getName
console.log(obj.getName())
console.log(getName())

Function.prototype.myBind = function (context) {
    var self = this;
    var args = [].slice.call(arguments, 1)

    return function () {
        var newArgs = args.concat([].slice.call(arguments))
        return self.apply(context, newArgs)
    }
}


var bindGetName = obj.getName.myBind(obj)
console.log(bindGetName())
