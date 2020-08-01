// * vue2
function definReactive(obj, key, val) {
  Object.defineProperty(obj, key, {
    get() {
      return val
    },
    set(v) {
      val = v
      update()
    },
  })
}

function update() {
  console.log(obj2.foo)
}

const obj2 = {}
definReactive(obj2, 'foo', 'FOO')

obj2.foo = 'FOOOOOOOO'
