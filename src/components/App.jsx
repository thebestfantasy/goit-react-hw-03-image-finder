import React, { Component } from 'react';
import { getPhotos } from './API/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    images: null,
  };

  // componentDidMount() {
  //   this.getAllPhotos();
  // }

  // getAllPhotos = async () => {
  //   const data = await getPhotos();
  //   this.setState({ images: [...data.hits] });
  //   console.log(this.state.images);
  // };

  handleSearch = e => {
    e.preventDefault();
    console.log(e.target[1].value);
  };

  render() {
    return (
      <>
        <Searchbar handleSearch={this.handleSearch} />
        {this.state.images && <ImageGallery images={this.state.images} />}
      </>
    );
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
