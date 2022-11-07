/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express'
import { UserCreateController } from '../../../../module/users/infra/controller/user.create.controller'
import { UserFindController } from '../../../../module/users/infra/controller/user.findall.controller'

export class UserController {
  async findAll (request: Request, response: Response) {
    const userFindController = new UserFindController()
    const responseUser = await userFindController.handle()
    return response.json(responseUser)
  }

  async create (request: Request, response: Response) {
    // TODO: Adiconar a validação para saber se veio todos os dados requisitado e para que não ocorra nenhum sql inject...
    // eslint-disable-next-line @typescript-eslint/naming-convention
    const { name, email, group_id, password, nickname } = request.body
    const userCreateController = new UserCreateController()
    const user = await userCreateController.handle(name, email, group_id, password, nickname)
    return response.json(user)
  }
}
