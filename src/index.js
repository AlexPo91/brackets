module.exports = function check(str, bracketsConfig) {
  // your solution
  let checkStr = str
  let brackets = bracketsConfig.map(item=>item.reduce((acc, cur)=>acc+ cur))
  for(let i = str.length; i>=0; i--){
  brackets.forEach(item=> {
  str = str.replace(item, '')
  })
  if (str.length === 0) return true 
  }
  return false
}
