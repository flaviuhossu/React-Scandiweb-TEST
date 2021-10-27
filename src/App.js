import React, { Component } from 'react'
import { Route, Switch } from 'react-router'
import Layout from './components/layout/Layout'
import NotFound from './components/NotFound'
import PLP from './components/category/PLP'
import PDP from './components/category/PDP'

export default class App extends Component {
  render() {
    return (
      <>
        <Layout />
        <Switch>
          <Route path='/' exact>
            <PLP />
          </Route>
          <Route path='/women' exact>
            <PLP />
          </Route>
          <Route path='/men' exact>
            <PLP />
          </Route>
          <Route path='/kids' exact>
            <PLP />
          </Route>
          <Route path='/product' exact>
            <PDP />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </>
    )
  }
}
