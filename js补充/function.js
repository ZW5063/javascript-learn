// 匿名函数
// 匿名函数之函数表达式
// 把一个匿名函数本身作为一个值赋值给其他东西
// 这种函数一般不是手动执行，而是靠其他程序驱触发进行
document.body.onclick = function () { };
setTimeout(function () { }, 1000);

// 自执行函数 立即执行函数
(function (n) {
    // n => 100
})(100);
