const numberArr: number[] = [1, 2, 3]
const stringArr: string[] = ['a', 'b', 'c']
const undefinedArr: undefined[] = [undefined, undefined]
const arr: (number | string)[] = [1, 'string', 2]
const girls: { name: string; age: number }[] = [
  {
    name: 'xiaohong',
    age: 12,
  },
  {
    name: 'xiaolan',
    age: 18,
  },
]

type Lady = { name: string; age: number }
const girlsArr: Lady[] = [
  { name: 'xiaohong', age: 12 },
  { name: 'xiaolan', age: 13 },
]

class Madam {
  name: string
  age: number
}
const madamArr: Madam[] = [
  { name: 'xiaohong', age: 12 },
  { name: 'xiaolan', age: 18 },
]
