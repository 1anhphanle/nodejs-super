type Handle = () => Promise<string>
const fname: string = 'Phan Le Nhat Anh'
const handle: Handle = () => Promise.resolve(fname)
// console.log(fname)
handle().then(console.log)
