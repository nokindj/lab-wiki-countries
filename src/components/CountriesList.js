import React from 'react';
import { Link } from 'react-router-dom';

class CountriesList extends React.Component {
  render() {
    return (
      <div>
        {this.props.countries.map((country, index) => {
          return (
            <div key={index}>
              <Link
                to={'/' + country.cca3}
                className="list-group-item list-group-item-action"
              >
                {country.flag} {country.name.common}
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default CountriesList;
