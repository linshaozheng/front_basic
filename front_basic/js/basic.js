/** 1.Js 三个组成部分
 * ECMAScript、DOM和BOM
 *
 */
console.log("hello linsz this is js world!")

/**
 * 2.
 * JavaScript中一共有5种基本数据类型: – 字符串型(String)
 * – 数值型(Number)
 * – 布尔型(Boolean)
 * – null型(Null)
 * – undefined型(Undefined)
 *
 */
var a = '123';
console.log(a)

var b = '34';
console.log(parseInt(b))
console.log(parseFloat(b))

var c = 100.4;
console.log(Number(c));
console.log(parseInt(c));

//undefined
var msg;
console.log(msg);

//object
var d = null
console.log(typeof d);

//判断 null and undefined 是否相等 true
console.log(null == undefined);

// === 的使用 不进行类型转换
console.log("11" == 11);  //true
console.log("11" === 11);  //false


console.log("===================");
/**
 * 3. 对象
 * 对象的创建
 */
var per = new Object();
per.name = "曹操";
per.age = 100;
console.log(per.name,per.age);

var per2 = {
    name: "曹丕",
    age: "50"
}
console.log(per2.name,per2.age);

/**
 * 遍历数组 这个方法多少有点憨
 * 注意 elem 拿到的是数组的下标   不同于java中的增强for 拿到的是元素
 */
var e =[1,3,4,6];
for (var elem in e) {
    console.log(e[elem]);
}

console.log("-------function------------")
/**
 * JavaScript 把函数也归类为 对象的一部分
 * 函数的两种书写方式
 * 我记得 es6 写法 函数还有第三种写法  把function 直接干掉
 */
var sum1 = function(a, b) {
    return a+b;
}
console.log(sum1(3,2))

function sum2(a, b) {
    this.a = 10;
    console.log("this.a ",this.a)
    console.log(arguments.callee);  //差不多意思是是把当前函数原样输出
    return a+b;
}
console.log(sum2(1,1));
console.log("-------")
console.log(sum1(12, 4).prototype);

//Array
var arr = new Array(10,23,34,24,45);
for (let num of arr) {
    console.log(num)
}






