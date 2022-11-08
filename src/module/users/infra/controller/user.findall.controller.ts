import { User } from '../../entities/User'
import { UserFindAllUseCase } from '../../use-case/user.findall.usecase'

export class UserFindAllController {
  constructor (private readonly userFindAllUseCase: UserFindAllUseCase) {}

  async handle (): Promise<User[]> {
    return await this.userFindAllUseCase.execute()
  }
}
