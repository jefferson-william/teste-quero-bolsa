import React from 'react'
import ReactDOM from 'react-dom'
import App from '~/components/App'
import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

const isLocalhost = window.location.host.indexOf('localhost:3000') > -1
const serviceWorkerCondition = isLocalhost ? 'unregister' : 'register'

serviceWorker[serviceWorkerCondition]()
