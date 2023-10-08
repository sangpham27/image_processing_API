import express from 'express'
import imagesApi from '../apis/image.api'

const routes = express.Router()

routes.use('/images', imagesApi)

export default routes
