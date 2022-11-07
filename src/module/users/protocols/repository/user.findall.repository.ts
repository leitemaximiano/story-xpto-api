import { User } from '../../entities/User'

export interface UserFindRepository {
  findAll: () => Promise<User[]>
}
