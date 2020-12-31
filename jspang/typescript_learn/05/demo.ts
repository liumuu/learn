function getTotal(one: number, two: number) {
  return one + two
}

const total = getTotal(1, 2)

console.log(total)

function getTotal1(one: number, two: number) {
  return one + two + ''
}

const total1 = getTotal1(1, 2)

console.log(total1)

function getTotal2(one: number, two: number): number {
  return one + two
}

const total2 = getTotal2(1, 2)

console.log(total2)

function sayHello(): void {
  console.log('hello world')
}

sayHello()

function getNumber({ one }: { one: number }): number {
  return one
}

const one = getNumber({ one: 999 })

console.log(one)
