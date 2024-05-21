const logName = (name) => {
    console.log(name)
}
const sum = (a, b) => {
    return a + b
}
const devide = (a, b) => {
    return a / b
}
export {sum, devide}
export default logName

//khai báo nhưng không export thì nó chỉ tồn tại trong file nì