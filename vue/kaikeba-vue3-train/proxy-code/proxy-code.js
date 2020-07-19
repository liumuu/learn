// 原始对象 => 响应式对象
let toProxy = new WeakMap()
// 响应式对象 => 原始对象
let toRaw = new WeakMap()

// 存储依赖关系
let effectStack = []
// 特殊的{} key是object
let targetMap = new WeakMap()

// 收集依赖
function track() {}
// 触发更新
function trigger() {}

function effect() {}

// 响应式代理对象
const baseHandle = {
  get(target, key) {
    // todo 收集依赖 track
    // ? Reflect.get(target, propertyKey[, receiver]) 从一个对象中取属性值
    const res = Reflect.get(target, key)

    return typeof res === 'object' ? reactive(res) : res
  },
  set(target, key, value) {
    const res = Reflect.set(target, key, value)
    // todo 触发更新 trigger

    return res
  },
}

// 响应式
function reactive(target) {
  // 查询缓存
  let observed = toProxy.get(target)
  if (observed) {
    return observed
  }
  if (toRaw.get(target)) {
    return target
  }

  observed = new Proxy(target, baseHandle)
  // 设置缓存
  toProxy.set(target, observed)
  toRaw.set(observed, target)

  return observed
}

function computed() {}
