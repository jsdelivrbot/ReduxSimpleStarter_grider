import React from 'react';

class SearchBar extends React.Component {
  render() {
    return (
      <input type="text" onChange={event=>console.log(event.target.value)}/>
    )
  }
}

export default SearchBar;