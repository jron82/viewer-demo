import React from 'react';
import './App.css';
import { Router, Route, Switch } from 'wouter';
import Audio from './Audio';
import Excel from './Excel';
import Home from './Home';
import PowerPoint from './PowerPoint';
import PDF from './PDF';
import Video from './Video';
import Wexbim from './Wexbim';
import Word from './Word';

function App() {
  return (
    <main className="main-grid">
      <div className="header">
        <h1
          className="header-title"
          onClick={() => history.pushState('', 'Home', '/')}
        >
          React File Viewer
        </h1>
      </div>
      <div className="examples">
        <Router>
          <Switch>
            <Route path="/">
              <Home />
            </Route>

            <Route path="/audio">
              <Audio />
            </Route>

            <Route path="/excel">
              <Excel />
            </Route>

            <Route path="/pdf">
              <PDF />
            </Route>

            <Route path="/powerpoint">
              <PowerPoint />
            </Route>

            <Route path="/video">
              <Video />
            </Route>

            <Route path="/wexbim">
              <Wexbim />
            </Route>

            <Route path="/word">
              <Word />
            </Route>

            <Route path="/:rest*">
              {(params) => `404, Sorry the page ${params.rest} does not exist!`}
            </Route>
          </Switch>
        </Router>
      </div>
    </main>
  );
}

export default App;
