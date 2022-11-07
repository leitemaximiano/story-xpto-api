import * as express from 'express'
import * as cors from 'cors'
import { router as UserRoutes } from './routes/user.routes'
import 'express-async-errors'

const app = express()
app.use(express.json())
app.use(cors())
app.use('/users', UserRoutes)

export { app }
