import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

class App extends React.Component {
   render() {
     return (
       <div>
         <SearchBar />

       </div>
     )
   } 
}

ReactDOM.render(<App />, document.querySelector('#root'));