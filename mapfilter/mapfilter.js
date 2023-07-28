let obj = [
  {
    userId: 109101,
    email: 'xxx'
  },
  {
    userId: 109102,
    email: 'xxx'
  },
  {
    userId: 109103,
    email: 'xxx'
  },
  {
    userId: 109104,
    email: 'xxx'
  },
  {
    userId: 109105,
    email: 'xxx'
  }]


let filtered = obj.filter(n => n.userId === 109101).map(n => {
  n.userId = 109107
  return {userId: n.userId}
})
console.log(filtered)  

obj.forEach(item => {
  console.log(item)
})