// lỗi typescript
// interface User {
//   name: string
//   age: number
// }
// const render = (user: User) => {
//   console.log(user)
// }
// const user = { name: 'Anh Phan Le', age: 20 } // phải thêm age vào trong User
// render(user)

//lỗi eslint
// const profile: any = {
//   name: 'Duc'
// }

const profile: { name: string } = {
  name: 'Duc'
}
