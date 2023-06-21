import fs from 'fs'
import cors from 'cors'
import bodyParser from 'body-parser'
import express, { Request, Response } from 'express'

const app = express()
app.use(
  cors({
    origin: 'http://localhost:2407',
  })
)
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.post('/api/data/user', (req: Request, res: Response) => {
  const username = req.body.username
  const password = req.body.password

  console.log(username)
  console.log(password)

  let data: any = null
  if (username === 'Thang' && password === '654321') {
    data = {
      user: {
        name: 'Thang',
        age: 26,
      },
      token: '951753',
      message: 'Success',
    }
    res.status(200).json(data)
  } else {
    data = {
      status: 404,
      user: {},
      token: '',
      message: 'Fail',
    }
    res.status(404).json(data)
  }

  // Ghi log vào tệp tin txt
  const log = `[${new Date().toISOString()}] Request from ${req.ip}: ${
    req.method
  } ${req.url}\n`
  fs.appendFile('log.txt', log, (err) => {
    if (err) {
      console.error('Error writing log:', err)
    }
  })
})

const port = 7042
app.listen(port, () => {
  console.log('Server is running on port ${port}')
})
