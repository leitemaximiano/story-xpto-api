/* eslint-disable @typescript-eslint/naming-convention */
import { User } from '../../entities/User'
import { UserCreateController } from '../controller/user.create.controller'
import { UserCreateUseCase } from '../../use-case/user.create.usecase'
import { Utils } from '../../infra/generate.id'
import { UserMemoryRepository } from '../repositories/user.memory.repository'

export class UserCreateDevelopersFacade {
  async run ({ name, email, group_id, password, nickname }: User): Promise<User> {
    const userMemoryRepository = new UserMemoryRepository()
    const userCreateUseCase = new UserCreateUseCase(userMemoryRepository, Utils.singleton)
    const userCreateController = new UserCreateController(userCreateUseCase)
    const user = await userCreateController.handle(name, email, group_id, password, nickname)
    return user
  }
}
