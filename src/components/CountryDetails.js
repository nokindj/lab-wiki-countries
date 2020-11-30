import React from 'react';
import { Link } from 'react-router-dom';

class CountryDetails extends React.Component {
  state = {
    name: '',
    capital: [],
    area: '',
    borders: [],
  };

  componentDidMount() {
    let countryId = this.props.match.params.cca3;
    let countries = this.props.countries;

    console.log('id coming from the url', countryId);
    let foundCountry = countries.find((country) => {
      return country.cca3 === countryId;
    });
    this.setState({
      name: foundCountry.name.common,
      capital: foundCountry.capital,
      area: foundCountry.area,
      borders: foundCountry.borders,
    });
  }

  render() {
    let countryId = this.props.match.params.cca3;
    let countries = this.props.countries;

    return (
      <div className="col-7">
        <h3>{this.state.name}</h3>
        <table className="table">
          <thead></thead>
          <tbody>
            <hr />
            <tr>
              <td>Capital</td>
              <td>{this.state.capital}</td>
            </tr>
            <hr />
            <tr>
              <td>Area</td>
              <td>{this.state.area}</td>
            </tr>
            <hr />
            <tr>
              <td>Borders</td>
              <td>
                <ul>
                  {this.state.borders.map((item) => {
                    return (
                      <li key={item}>
                        <Link to={'/' + countryId}>
                          {
                            countries.find(
                              (country) => country.cca3 === countryId
                            ).name.common
                          }
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default CountryDetails;
