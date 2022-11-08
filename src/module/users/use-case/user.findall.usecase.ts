import { User } from '../entities/User'
import { UserFindAllRepository } from '../protocols/repository/user.findall.repository'

export class UserFindAllUseCase {
  constructor (private readonly userRepository: UserFindAllRepository) { }

  async execute (): Promise<User[]> {
    return await this.userRepository.findAll()
  }
}
