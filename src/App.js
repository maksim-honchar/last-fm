import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import './App.css'
import { TopBar } from './features/TopBar'
import { TopTabs } from './features/TopTabs'
import { HomePage } from './features/homepage/HomePage'
import { SearchPage } from './features/searchpage/SearchPage'


function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <TopTabs />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/search" component={SearchPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
