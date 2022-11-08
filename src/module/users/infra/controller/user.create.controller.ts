/* eslint-disable @typescript-eslint/naming-convention */
import { User } from '../../entities/User'
import { UserCreateUseCase } from '../../use-case/user.create.usecase'

export class UserCreateController {
  constructor (private readonly userCreateUseCase: UserCreateUseCase) {}

  async handle (name: string, email: string, group_id: string, password: string, nickname?: string): Promise<User> {
    const user: User = {
      name,
      email,
      group_id,
      nickname,
      password
    }
    const userSaved = await this.userCreateUseCase.execute(user)
    return userSaved
  }
}
