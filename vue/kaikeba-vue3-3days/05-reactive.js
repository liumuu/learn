// * vue3
function reactive(obj) {
  return new Proxy(obj, {
    get(target, key) {
      const res = Reflect.get(target, key)
      console.log('get:', res)
      return res
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

const obj5 = { foo: 'FOOO', dong: { n: 1 } }
const observed = reactive(obj5)

observed.foo
observed.foo = 'FOOOOOOOOOO'
observed.bar = 'BAR'

delete observed.bar

obj5.dong.n = 1
