const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(bodyParser.json())
app.use(cors())


app.post('/journal-book', (req, res) => {
  console.log(req.body)

  const contact = req.body
  if(!contact.name || !contact.email) {
    return res.status(422).send({ error: 'You must provide a name and email' })
  }

  res.send({ message: 'Thank you for contacting us' })
})


app.listen(3000, () => {
  console.log('server is listening on port 3000')
})