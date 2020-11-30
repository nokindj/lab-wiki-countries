import React from 'react';
import './App.css';
import countries from './countries.json';
import Navbar from './components/Navbar';
import CountriesList from './components/CountriesList';
import CountryDetails from './components/CountryDetails';
import { Switch, Route } from 'react-router-dom';
import axios from 'axios';

class App extends React.Component {
  state = {
    countries: [],
  };

  componentDidMount() {
    axios
      .get('https://countries.tech-savvy.tech/countries')
      .then((response) => {
        this.setState({ countries: response.data });
      })
      .catch((err) => console.log(err));
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <div className="row">
            <div
              className="col-5"
              style={{ maxHeight: '90vh', overflow: 'scroll' }}
            >
              <div className="list-group">
                <CountriesList countries={countries} />
              </div>
              <Switch>
                <Route
                  exact
                  path="/:cca3"
                  render={(props) => (
                    <CountryDetails {...props} countries={countries} />
                  )}
                />
              </Switch>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
