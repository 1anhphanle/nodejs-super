import { Router } from 'express'
const useRouter = Router()
useRouter.use(
  (req, res, next) => {
    console.log('Time:', Date.now())
    next() //sau lệnh này thì code phía dưới vẫn chạy nhưng sẽ vô nghĩa
    // res.status(404).send('Sorry cant find that!')
    // console.log('anhphanle')
  },
  (req, res, next) => {
    console.log('Time 2:', Date.now())
    next()
  }
)
useRouter.get('/tweets', (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        text: 'Hello World'
      }
    ]
  })
})
export default useRouter
