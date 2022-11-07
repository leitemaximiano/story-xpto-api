import { User } from '../../entities/User'
import { UserCreateRepository } from '../../protocols/repository/user.create.repository'
import { UserFindRepository } from '../../protocols/repository/user.findall.repository'

export class UserMemoryRepository implements UserCreateRepository, UserFindRepository {
  static db: User[] = []
  async create (user: User): Promise<User> {
    UserMemoryRepository.db.push(user)
    return user
  }

  async findAll (): Promise<User[]> {
    return UserMemoryRepository.db
  }
}
