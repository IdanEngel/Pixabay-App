import React from 'react';
import './App.css';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import NavBar from './components/navbar/Navbar'
import Search from './components/search/Search'
import Favorits from './components/favorits/Favorits'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './store'
function App() {
  return (
    // <Provider store={store}>
      <MuiThemeProvider >
        <Router >
          <div>
            <NavBar />
            <Route exact path='/' component={Search} />
            <Route exact path='/favorits' component={Favorits} />
          </div>
        </Router>
      </MuiThemeProvider>
    // </Provider>
  );
}

export default App;
