const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
  db.Book.find()
    .then((books) => {
      res.send(books)
    })
    .catch(err => {
      console.log(err)
      res.status(404).send('not found')
    })
})

router.post('/', (req, res) => {
    console.log(req.body)
  db.Book.create(req.body)
    .then(() => {
      res.send('created')
    })
    .catch(err => {
      //console.log('err', err)
      res.status(400).send(err)
    })
})

module.exports = router
