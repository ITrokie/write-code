/* 
函数柯里化：将一个使用多个参数的函数转换成一系列使用若干个参数的函数的技术
*/
function curry(fn, args) {
    var length = fn.length;

    args = args || [];

    return function () {
        // [].slice.call(arguments):将类数组转为数组
        var newArgs = args.concat([].slice.call(arguments))
        if (newArgs.length < length) {
            return curry.call(this, fn, newArgs);
        }
        return fn.apply(this, newArgs)
    }
}





function muil(a, b, c) {
    return a * b * c
}


var myCurry = curry(muil);

console.log(myCurry(2, 3)(4))
console.log(myCurry(2)(3)(4))