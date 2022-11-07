import { User } from '../../entities/User'
import { UserFindUseCase } from '../../use-case/user.findall.usecase'
import { UserMemoryRepository } from '../repositories/user.memory.repository'

export class UserFindController {
  async handle (): Promise<User[]> {
    const userRepository = new UserMemoryRepository()
    const userFindUseCase = new UserFindUseCase(userRepository)
    return await userFindUseCase.execute()
  }
}
