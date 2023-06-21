import express, { Request, Response } from 'express'

const app = express()

// Route Get request

app.get('/api/data/:username/:password', (req: Request, res: Response) => {
  const username = req.params.username
  const password = req.params.password

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
})

// Start server
const port = 7042

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
