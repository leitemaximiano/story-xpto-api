/* eslint-disable @typescript-eslint/naming-convention */
import { User } from '../../entities/User'
import { UserCreateController } from '../controller/user.create.controller'

export class UserCreateDevelopersFacade {
  async run ({ name, email, group_id, password, nickname }: User): Promise<User> {
    const userCreateController = new UserCreateController()
    const user = await userCreateController.handle(name, email, group_id, password, nickname)
    return user
  }
}
