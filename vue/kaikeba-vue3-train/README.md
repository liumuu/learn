# Vue3.0 源码训练营

Vue3.0 源码训练营 [Link](https://appaadih2af2521.pc.xiaoe-tech.com/detail/p_5ec4f49f79584_KPb5vcDL/6)

## new

- fast

- tree shaking

- componsition api

- ts support

- custom renderer api

## start

- typescript

- lerna [Link](https://github.com/lerna/lerna)

## tree

Vue3

- runtime-dom

  - runtime-core : reactivity

- reactivity : runtime-core

- compile-dom

  - compile-core

## vue3

### 《深入理解 ES6》

[Link](https://book.douban.com/subject/27072230/)

### Dom

尤大 Vue3.0 直播虚拟 Dom 总结(和 React 对比) [Link](https://juejin.im/post/5e9faa8fe51d4546fe263eda)

### vue2

option-api

```js
data:{},
methods:{}
```

### 按需引入

tree-shaking

```js
const { createApp, reactive, watchEffect, computed } = Vue
```

### template

```js
// compile-dom compile-core
template => render function(){ return dom }

// Proxy
const state = reactive({})

// runtime-dom runtime-core
createApp(App).mount('#app')
```

## tips

### lerna

`lerna ls`
