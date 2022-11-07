/* eslint-disable @typescript-eslint/no-misused-promises */
import * as Express from 'express'
import { UserController } from '../controllers/user.controller'

const router = Express.Router()

const userController = new UserController()

router.get('/', userController.findAll)
router.post('/', userController.create)

export { router }
