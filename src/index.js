const express = require('express')
const { v4: uuid } = require('uuid')

const app = express()
app.use(express.json())

const customer = []

app.post('/account', (request, response) => {
  const { name, cpf } = request.body
  const id = uuid()

  customer.push({ id, name, cpf, stament: [] })

  return response.status(201).json(customer)
})

app.listen(3333, () => console.log('SERVER ON'))
