const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('<h1>Hello Karuzo!!!</h1>')
})

app.get('/response', (req, res) => {
  res.send('<h1>Response page!</h1>')
})

const PORT = 8080

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
