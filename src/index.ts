import express from 'express'
import fs from 'fs'
import { Response } from 'express'
import path from 'path'
import routes from './routes'
// Init the Express application
const app = express()

// Set the network port
const port = process.env.PORT || 8082

app.use('/api', routes)

// Displays a simple message to the user
app.get('/', (_, res: Response): void => {
  res.status(200).send('Server is working!!!')
})

// Start the Server
app.listen(port, (): void => {
  // make sure thumb folder exist
  const thumbPath = path.resolve(__dirname, '../assets/thumb')
  if (!fs.existsSync(thumbPath)) {
    fs.mkdirSync(thumbPath)
  }
  console.log(`server running http://localhost:${port}`)
  console.log(`press CTRL+C to stop server`)
})

export default app
