/* eslint-disable @typescript-eslint/restrict-template-expressions */
import { User } from '../../module/users/entities/User'
import { HttpResponse } from '../protocol/http.response'
import { CreateHateoasFactory } from '../factory/create.hateoas.factory'
import debug from 'debug'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const log = debug('api:user.create.factory')

export function UserResponseFactory (user: any, countRegistries?: number, currentPage?: number, countPage?: number): HttpResponse<User> {
  const isUserArray: Boolean = Object.prototype.toString.call(user).includes('Object]')
  const links = isUserArray
    ? [
        [`/users/${user.id ?? ''}`, 'GET', `get user ${user.name}`],
        [`/users?id=${user.id ?? ''}`, 'GET', `get user ${user.name}`],
        ['/users/', 'GET', 'get all users'],
        [`/users?id=${user.id ?? ''}`, 'DELETE', `delete user ${user.name}`],
        [`/users/${user.id ?? ''}`, 'DELETE', `delete user ${user.name}`],
        [`/users/${user.id ?? ''}`, 'PUT', `update user ${user.name}`],
        [`/users?id=${user.id ?? ''}`, 'PUT', `update user ${user.name}`],
        [`/users/${user.id ?? ''}`, 'PATCH', `change password user ${user.name}`],
        [`/users?id=${user.id ?? ''}`, 'PATCH', `change password user ${user.name}`]
      ]
    : [
        ['/users/', 'GET', 'get all users']
      ]

  const httpResponse: HttpResponse<User> = {
    currentPage: currentPage ?? 1,
    countPage: countPage ?? 1,
    countRegistries: countRegistries ?? 1,
    data: user,
    links: links.map(([href, method, rel]) => CreateHateoasFactory(href, method, rel))
  }

  return httpResponse
}
