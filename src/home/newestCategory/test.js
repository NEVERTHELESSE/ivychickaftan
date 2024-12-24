const number = [
  2,3,5,3,2
]
const arr = ['ajibola','bolaji','ajibola']

const newArr = number.filter(r=>r.toString().includes('2'))
// console.log(newArr)


const sumNumber = number.reduce((a,b)=>a+b,0)
// let sum = 0
// number.forEach(num=>sum+=num)

// console.log(sum)

const dup = [2,3,4,2,2,4,5]
const newarr = dup.filter((r,i,s)=>s.indexOf(r)==i)

const filterArray = dup.filter((value,index,self)=>{
  const count = self.filter(v=>v==value).length
  return count == 1 || self.indexOf((value)!==index)
})

const user = ['ajibola','kolade','bolaji','ajibola','nuru','ajibola']

const removeDup = user.find(r=>r == 'ajibola')

console.log(removeDup)