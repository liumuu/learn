const count: number = 998
const username: string = 'tom'

const xiaohong: { name: string; age: number } = { name: '小兰', age: 18 }

console.log(xiaohong.name)

const girls: string[] = ['小红', '小兰', '小梅']

console.log(girls)

class Person {}

const xiaolan: Person = new Person()

const xiaomei: () => string = () => {
  return '小梅'
}

console.log(xiaomei())
