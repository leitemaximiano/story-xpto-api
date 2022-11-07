import { GenerateId } from '../protocols/generate.id'

export class Utils implements GenerateId {
  private static _instance?: Utils
  private constructor () { }

  static get singleton (): Utils {
    Utils._instance = (!Utils._instance) ? new Utils() : Utils._instance
    return Utils._instance
  }

  generateUUID (): string {
    const uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const dt = new Date().getTime()
      const r = (Math.floor(dt / 16) + Math.random() * 16) % 16 | 0
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
  }
}
