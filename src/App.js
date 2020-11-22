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
import { ArtistPage } from './features/artistpage/ArtistPage'
import { SearchTrackPage } from './features/search_track_page/SearchTrackPage'


function App() {
  return (
    <div className="App">
      <Router>
        <TopBar />
        <TopTabs />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/artists/:artist" component={ArtistPage} />
          <Route exact path="/search" component={SearchTrackPage} />
          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
