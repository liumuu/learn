interface Girl {
  name: string
  age: number
  bust: number
  waistline?: number
  [propname: string]: any
  say(): string
}

const girl = {
  name: 'xiaohong',
  age: 11,
  bust: 90,
  waistline: 21,
  sex: 'woman',
  say() {
    return 'hello, xiaohong.'
  },
}

const getResume = (girl: Girl) => {
  console.log(girl.name + ' age:' + girl.age)
  console.log(girl.name + ' bust:' + girl.bust)
  girl.waistline && console.log(girl.name + ' bust:' + girl.waistline)
  girl.sex && console.log(girl.name + ' sex:' + girl.sex)
}

getResume(girl)

class BeautyGirl implements Girl {
  name = 'xiaolan'
  age = 19
  bust = 90
  say() {
    return 'hello xiaolan'
  }
}
