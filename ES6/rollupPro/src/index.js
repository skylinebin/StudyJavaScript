// import util1 from './util1.js'
// import { fn1, fn2 } from './util2.js'

// console.log(util1);
// fn1()
// fn2()

// class MathHandle {
//   constructor (x, y) {
//     this.x = x;
//     this.y = y;
//   }
//   add () {
//     return this.x + this.y;
//   }
// }

// const m = new MathHandle(1, 2);

// console.log(typeof MathHandle); // 'function'
// // console.log(MathHandle.prototype) // 函数的(显式)原型
// console.log(MathHandle.prototype.constructor === MathHandle) // true 原型的 constructor 属性 等于 构造函数 MathHandle 本身
// console.log(m.__proto__ === MathHandle.prototype) //true m 是 new 出来的实例 实例的隐式原型 == 构造函数的显式原型

// function
// 可见 class 本身就是 语法糖 就是 'function'

// true
// 'class' 也有一个显式原型，显式原型的 constructor 属性 也是 'class' 本身

// true
// m 实例也有隐式原型 等于 'class' 的显式原型


class Animal {
  constructor (name) {
    this.name = name;
  }
  
  eat() {
    console.log(`${this.name} eat`);
  }
}

class Dog extends Animal{
  constructor (name) {
    super(name);  // ! there is super when class extends
    this.name = name;
  }
  say() {
    console.log(`${this.name} say`);
  }
}

const husky = new Dog('Husky');
husky.eat();
husky.say();

/* // 箭头函数可以解决 this 的指代问题
function fn() {
  console.log('real', this); // real {a:100}

  var arr = [1, 2, 3];
  arr.map(item => {
    console.log(this); // {a: 100}
  })
}
fn.call({
  a: 100
}); */