require('dotenv').config()
const express= require('express')
const app= express()
const mongoose= require('mongoose')
app.use('/books', require('./controllers/books'))


async function main(){

  await mongoose.connect(process.env.MONGO_URI);
  console.log("Mongodb connected")
}
main().catch(err => console.log(err));

app.use(express.json())


app.get('/', (req, res) => {
    res.send('hello world')
  })
  app.listen(3000)

