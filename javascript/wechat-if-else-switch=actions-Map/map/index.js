const actions = new Map([
  [1, ['processing', 'IndexPage']],
  [2, ['fail', 'FailPage']],
  [3, ['fail', 'FailPage']],
  [4, ['success', 'SuccessPage']],
  [5, ['cancel', 'CancelPage']],
  ['default', ['other', 'Index']],
])

/** 
new Map() —— 创建 map。
map.set(key, value) —— 根据键存储值。
map.get(key) —— 根据键来返回值，如果 map 中不存在对应的 key，则返回 undefined。
map.has(key) —— 如果 key 存在则返回 true，否则返回 false。
map.delete(key) —— 删除指定键的值。
map.clear() —— 清空 map。
map.size —— 返回当前元素个数。
*/

const onButtonClick = (status) => {
  console.log('status:', status)

  let action = actions.get(status) || actions.get('default')

  sendLog(action[0])
  jumpTo(action[1])
}

const sendLog = (log) => {
  console.log('sendLog:', log)
}

const jumpTo = (to) => {
  console.log('jumpTo:', to)
}
