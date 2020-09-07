const debounce = (func, wait = 0, options) => {
  let timeout = null
  let args

  function debounced(...arg) {
    args = arg
    if (timeout) {
      // ? 取消由 setTimeout() 方法设置的 timeout
      clearTimeout(timeout)
      timeout = null
    }

    // 以Promise的形式返回函数执行结果
    return new Promise((res, rej) => {
      timeout = setTimeout(async () => {
        try {
          // ? apply类似call call() 方法分别接受参数。apply() 方法接受数组形式的参数。
          const result = await func.apply(this, args)
          res(result)
        } catch (e) {
          rej(e)
        }
      }, wait)
    })
  }

  // 允许取消
  function cancel() {
    clearTimeout(timeout)
    timeout = null
  }
  // 允许立即执行
  function flush() {
    cancel()
    return func.apply(this, args)
  }

  debounced.cancel = cancel
  debounced.flush = flush

  return debounced
}

const search = (val) =>
  new Promise((res) => {
    setTimeout(res(val + ':' + Math.random()), Math.random() * 100)
  })

const ipt = document.querySelector('input')

const inputEvent = debounce(async (e) => {
  let text = await search(e.target.value)
  document.querySelector('p').innerText = text
}, 1000)

ipt.addEventListener('input', inputEvent)
document.querySelector('#cancel').addEventListener('click', () => {
  inputEvent.cancel()
})
document.querySelector('#flush').addEventListener('click', () => {
  inputEvent.flush()
})
