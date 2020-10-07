import express from 'express'
import config from 'config'
import notifier from 'node-notifier'

import router from './router/router'

const PORT = config.get('app.port') || 5000

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.get('/test', (req, res) => { res.send('API Running !!!') })
app.use(router)

app.listen(PORT, () => {
  try {
    console.log(`Server Startd on Port ${PORT}`)
    notifier.notify({
      title: 'Server',
      message: `Server Run on ${PORT}`,
      sound: true
    })
  } catch (error) {
    console.log(error)
    notifier.notify({
      title: 'Server',
      message: 'Server Error',
      sound: true
    })
  }
})
