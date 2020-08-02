// * vue3
const isObject = (v) => typeof v === 'object' && v !== null

function reactive(obj) {
  if (!isObject) {
    return obj
  }

  return new Proxy(obj, {
    get(target, key) {
      const res = Reflect.get(target, key)
      console.log('get:', res)

      return isObject(res) ? reactive(res) : res
    },
    set(target, key, val) {
      const res = Reflect.set(target, key, val)
      console.log('set:', res)

      return res
    },
    deleteProperty(target, key) {
      const res = Reflect.deleteProperty(target, key)
      console.log('delete:', res)

      return res
    },
  })
}

function update() {
  console.log(obj5.foo)
}

const obj5 = { foo: 'FOOO', dong: { n: 1 }, arr: [1, 2, 3] }
const observed = reactive(obj5)

observed.foo
observed.foo = 'FOOOOOOOOOO'
observed.bar = 'BAR'

delete observed.bar

observed.dong.n = 1
observed.arr.push(4)
observed.arr[0]

delete observed.arr[2]
