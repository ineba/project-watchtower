import * as path from 'path'
import CONFIG from '../../../lib/runtime/config/config'

CONFIG.SERVER_PUBLIC_DIR = path.resolve(__dirname, '..', '..', 'demo', 'public')

import { getDefaultHtmlMiddleware, createServer } from '../../../lib/runtime/server/server'

describe('runtime/server/server', () => {

    it('getDefaultHtmlMiddleware', () => {
        getDefaultHtmlMiddleware()
    })

    it('createServer', () => (
        new Promise((resolve, reject) => {
            const app = createServer(
                () => {},
                () => {
                    app.get('server').close()
                    resolve()
                },
            )
        })
    ))

})
