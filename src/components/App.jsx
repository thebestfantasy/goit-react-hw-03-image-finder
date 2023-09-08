import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {};

  render() {
    return (
    <>
      <Searchbar onSubmit={}/>
    </>);
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101'
//       }}
//     >
//       React homework template
//     </div>
//   );
// };

export default App;
