// * vue3
function definReactive(obj, key, val) {
  return new Proxy(obj, {
    get(target, key) {
      return target[key]
    },
    set(target, key, val) {
      target[key] = val
      update()
    },
  })
}

function update() {
  console.log(obj3.foo)
}

const obj3 = {}
const ovserved = definReactive(obj3)

ovserved.foo = 'FOOOOOOOOOO'
