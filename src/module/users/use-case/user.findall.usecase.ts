import { User } from '../entities/User'
import { UserFindRepository } from '../protocols/repository/user.findall.repository'

export class UserFindUseCase {
  constructor (private readonly userRepository: UserFindRepository) { }

  async execute (): Promise<User[]> {
    return await this.userRepository.findAll()
  }
}
