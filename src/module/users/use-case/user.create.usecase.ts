import { User } from '../entities/User'
import { GenerateId } from '../protocols/generate.id'
import { UserCreateRepository } from '../protocols/repository/user.create.repository'

export class UserCreateUseCase {
  constructor (
    private readonly userRepository: UserCreateRepository,
    private readonly generateUUID: GenerateId
  ) { }

  async execute (user: User): Promise<User> {
    const _user = {
      ...user,
      id: this.generateUUID.generateUUID()
    }
    return await this.userRepository.create(_user)
  }
}
