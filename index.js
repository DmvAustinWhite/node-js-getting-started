const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000

express()
  .use(express.static(path.join(__dirname, 'public')))
  .set('views', path.join(__dirname, 'views'))
  .set('view engine', 'ejs')
  .get('/', (req, res) => res.render('pages/index'))
  .get('/me', (req, res) => res.send({me: "Austin White"}))
  .post('/me', (req, res) => res.send({method: "POST"}))
  .get('/username', (req, res) => res.send({me: "ploshi"}))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
