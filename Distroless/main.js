const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => res.send('Christian Gonzalez - 200915168 - CONTAINER DISTROLESS'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))