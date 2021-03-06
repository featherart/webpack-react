/**
 * Alternate file where we define the Router in a separate component
 */
import React from 'react'
import { BrowserRouter, Match } from 'react-router'
import App from './App'
import ReactState from './ReactState'
import PropsVsState from './PropsVsState'
import RouteParams from './RouteParams'
import Home from './Home'
import routeMap from './Routes'

const useConfig = false
let appComponent
// Example using declarative Match vs a route config
if (useConfig) {
  appComponent = <App>
    { routeMap.map((route, i) =>
      (route.exact && <Match key={i} exactly pattern={route.pattern} component={route.component}/>) ||
      <Match key={i} pattern={route.pattern} component={route.component}/>
    )}
  </App>
} else {
  appComponent = <App>
    <Match exactly pattern='/' component={Home} />
    <Match pattern='/reactState' component={ReactState} />
    <Match pattern='/propsVsState' component={PropsVsState} />
    <Match pattern='/routeParams/:first/:second' component={RouteParams} />
  </App>
}

export default () =>
  <BrowserRouter>
    {appComponent}
  </BrowserRouter>
