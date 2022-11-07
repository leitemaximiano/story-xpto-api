import { User } from '../../entities/User'

export interface UserCreateRepository {
  create: (user: User) => Promise<User>
}
