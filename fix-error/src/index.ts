import express from 'express'
const app = express()
const port = 3000

//vd xu ly ham sum lam chuong trinh bi loi
const sum = (obj: { a: number; b: number }) => {
  return obj.a + obj.b
}

app.get('/', (req, res) => {
  const value = sum({ a: 1, b: 2 }) //cu phap sai: sum({null as any})
  res.send(`Anh Phan Le, ${value}`)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
