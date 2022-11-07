import { User } from '../../entities/User'
import { UserCreateUseCase } from '../../use-case/user.create.usecase'
import { Utils } from '../generate.id'
import { UserMemoryRepository } from '../repositories/user.memory.repository'

export class UserCreateController {
  // eslint-disable-next-line @typescript-eslint/naming-convention
  async handle (name: string, email: string, group_id: string, password: string, nickname?: string): Promise<User> {
    const userMemoryRepository = new UserMemoryRepository()
    const userCreateUseCase = new UserCreateUseCase(userMemoryRepository, Utils.singleton)
    // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
    const user = {
      name,
      email,
      group_id,
      nickname,
      password
    } as User
    const userSaved = await userCreateUseCase.execute(user)
    return userSaved
  }
}
