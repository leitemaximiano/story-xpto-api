import { User } from '../../entities/User'

export interface UserFindAllRepository {
  findAll: () => Promise<User[]>
}
