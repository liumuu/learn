# 拉勾网 Vue.js 3.0 核心源码解析

[https://kaiwu.lagou.com/course/courseInfo.htm?courseId=326#/content](https://kaiwu.lagou.com/course/courseInfo.htm?courseId=326#/content)

## tips

monorope: packages

### vue2

```js
Object.defineProperty(data, 'a', {
  get() {
    // track
  },
  set() {
    // trigger
  },
})
```

### 函数柯里化

```js
// 普通的add函数
function add(x, y) {
  return x + y
}

// Currying后
function curryingAdd(x) {
  return function (y) {
    return x + y
  }
}

add(1, 2) // 3
curryingAdd(1)(2) // 3
```
