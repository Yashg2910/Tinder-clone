import React from 'react';
import './App.css';
import Header from './Header';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import TinderCards from "./TinderCards";
import SwipeButtons from "./SwipeButtons";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";

function App() {
  return (
    <div className="App">

      <Router>
        {/* Header */}

        <Switch>
          <Route path="/chat/:person">
            <Header backButton="/chat" />
            <ChatScreen />
          </Route>

          <Route path="/chat">
            <Header backButton="/" />
            <Chats />
          </Route>

          {/* Always put the default home route page at the bottom.  */}
          <Route path="/">
            <Header />
            <TinderCards/>
            <SwipeButtons/>
          </Route>

        </Switch>
      </Router>
      
      {/* Tinder Card */}
      {/* Buttons at the bottom */}

      {/* Chat screen */}
      {/* Individual Chat Screen */}
      
    </div>
  );
}

export default App;
