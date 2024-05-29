import express from 'express'
import useRouter from './user.routes'
const app = express()
const port = 3000
app.post('/', (req, res) => {
  res.send('hello world')
})
app.use('/user', useRouter)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//https://expressjs.com/en/guide/routing.html
//postman: http://localhost:3000/user/tweets
