interface Girl {
  name: string
  age: number
  bust: number
}

const screenResume = (girl: Girl) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '✔')
  girl.age > 24 || (girl.bust < 90 && console.log(girl.name + '✖'))
}

const getResume = (girl: Girl) => {
  console.log(girl.name + 'age:' + girl.age)
  console.log(girl.name + 'bust:' + girl.bust)
}

const girl = {
  name: 'xiaohong',
  age: 18,
  bust: 96,
}

screenResume(girl)
getResume(girl)
