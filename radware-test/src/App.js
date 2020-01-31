import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navbar/Navbar'
import Search from './components/search/Search'
import Favorits from './components/favorits/Favorits'
import { BrowserRouter as Router, Route } from 'react-router-dom'
function App() {
  return (
    <MuiThemeProvider >
      <Router >
        <div>
          <NavBar />
          <Route exact path='/' component={Search} />
          <Route exact path='/favorits' component={Favorits} />
        </div>
      </Router>
    </MuiThemeProvider>
  );
}

export default App;
