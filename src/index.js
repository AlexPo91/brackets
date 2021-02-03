module.exports = function check(str, bracketsConfig) {
  let brackets = bracketsConfig.map(el=>el.reduce((a, b)=> a+b))
  for(let i = str.length; i >=0; i--){
      brackets.forEach(el=> {
          str = str.replace(el, '')
        })
        if(str.length === 0) return true
  }
  return false
}
