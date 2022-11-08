/* eslint-disable @typescript-eslint/consistent-type-assertions */
/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { Request, Response } from 'express'
import { User } from '../../../../module/users/entities/User'
import { UserCreateDevelopersFacade } from '../../../../module/users/infra/facade/user.create.developer.facade'
import { UserResponseFactory } from '../../../factory/user.create.response.factory'
import { UserFindAllFacade } from '../../../../module/users/infra/facade/user.findall.developer.facade'

export class UserController {
  async findAll (request: Request, response: Response) {
    const userFindAllFacade = new UserFindAllFacade()
    const users = await userFindAllFacade.run()
    const httpResponse = UserResponseFactory(users, users.length)
    return response.json(httpResponse)
  }

  async create (request: Request, response: Response) {
    // TODO: Adiconar a validação para saber se veio todos os dados requisitado e para que não ocorra nenhum sql inject...
    const userCreateDevelopersFacade = new UserCreateDevelopersFacade()
    const user: User = await userCreateDevelopersFacade.run(request.body)
    const httpResponse = UserResponseFactory(user)
    return response.json(httpResponse)
  }
}
