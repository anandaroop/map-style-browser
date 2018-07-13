import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { BrowserRouter as Router, RouteComponentProps } from 'react-router-dom'
import { Route } from 'react-router-dom'

import App from './App'
import { ContentStyleKey, VisualStyleKey } from './schema'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

interface IRouteParams {
  visual?: VisualStyleKey
  content?: ContentStyleKey
}

const renderWithRouteProps = (props: RouteComponentProps<IRouteParams>) => {
  const {
    match: {
      params: { visual, content }
    }
  } = props

  return (
    <App visualStyle={visual} contentStyle={content} />
    // <div>{JSON.stringify(p)}</div>
  )
}

ReactDOM.render(
  <Router>
    <Route path="/:visual?/:content?">{renderWithRouteProps}</Route>
  </Router>,
  document.getElementById('root') as HTMLElement
)
registerServiceWorker()
