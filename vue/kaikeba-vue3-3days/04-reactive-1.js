// * 1
let state = 'foo'

function setState(newState) {
  state = newState
  update()
}

function update() {
  console.log(state)
}

setState('fooooo')
