import express from 'express'
const app = express()
import fetch from 'cross-fetch'
const port = 3000


app.use(express.static('public'))

app.get('/api/:page', async (req: { params: { page: any } }, res: { json: (arg0: any) => any }) => {
  await fetch(`https://api-infoinsights.herokuapp.com/api/insights&page=${req.params.page}`)
      .then((response: { json: () => any }) => response.json())
      .then ((data: any) => res.json(data))
})





// porta 3000
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
