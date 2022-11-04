import { variables } from '../../variables'
import { app as server } from './app'
import debug from 'debug'

const log = debug('api')
server.listen(variables.portAppEx, () => log('start server'))
