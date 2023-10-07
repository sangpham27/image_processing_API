import express from 'express'
import bodyParser from 'body-parser'
import { Router, Request, Response } from 'express'
import { filterImageFromURL, deleteLocalFiles } from './util/util'
// Init the Express application
const app = express()

// Set the network port
const port = process.env.PORT || 8082

// Use the body parser middleware for post requests
app.use(bodyParser.json())


app.get('/filteredimage', async (req: Request, res: Response) => {
  const image_url = req.query.image_url?.toString()
  if (!image_url) {
    res.status(400).send('image url is required')
  }

  const filteredImage = await filterImageFromURL(image_url as string)

  res.status(200).sendFile(filteredImage, () => {
    deleteLocalFiles([filteredImage])
  })
})

// Displays a simple message to the user
app.get('/', async (req, res) => {
  res.send('try GET /filteredimage?image_url={{}}')
})

// Start the Server
app.listen(port, () => {
  console.log(`server running http://localhost:${port}`)
  console.log(`press CTRL+C to stop server`)
})

export default app
