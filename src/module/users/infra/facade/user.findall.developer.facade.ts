import { UserFindAllUseCase } from '../../use-case/user.findall.usecase'
import { UserMemoryRepository } from '../repositories/user.memory.repository'
import { UserFindAllController } from '../controller/user.findall.controller'
import { User } from '../../entities/User'

export class UserFindAllFacade {
  async run (): Promise<User[]> {
    const userRepository = new UserMemoryRepository()
    const userFindAllUseCase = new UserFindAllUseCase(userRepository)
    const userFindAllController = new UserFindAllController(userFindAllUseCase)
    return await userFindAllController.handle()
  }
}
