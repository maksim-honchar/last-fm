import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'

import { TopBar } from './features/TopBar'
import { TopTabs } from './features/TopTabs'
import { HomePage } from './features/homepage/HomePage'
import { ArtistPage } from './features/artistpage/ArtistPage'
import { SearchTrackPage } from './features/search_track_page/SearchTrackPage'
import { NotFound } from './features/NotFound'

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
          <Route exact path="/404" component={NotFound} />

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  )
}

export default App
