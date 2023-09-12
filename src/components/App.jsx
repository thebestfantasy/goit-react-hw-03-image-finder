import React, { Component } from 'react';
import { getPhotosBySearch } from './API/api';
import { ImageGallery } from './ImageGallery/ImageGallery';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { toast } from 'react-toastify';

class App extends Component {
  state = {
    query: '',
    images: null,
    isLoading: false,
    error: '',
  };

  // componentDidMount() {
  //   this.getAllPhotos();
  // }

  // handleSearch = async e => {
  //   e.preventDefault();
  //   const data = await getPhotosBySearch(e.target[1].value);
  //   this.setState({ images: [...data.hits] });
  // };

  componentDidUpdate = (_, prevState) => {
    if (prevState.query !== this.state.query) {
      this.apiQuery();
    }
  };

  apiQuery = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getPhotosBySearch(this.state.query);
      toast.info(`Total: ${data.totalHits}`);
      this.setState({ images: data.hits });
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleSubmit = value => {
    // const data = await getPhotosBySearch(value);
    this.setState({ query: value });

    // this.setState({ images: [...data.hits] });
    // this.setState({ images: value });
  };

  render() {
    const { isLoading, images, error } = this.state;
    return (
      <>
        {/* <Searchbar handleSearch={this.handleSearch} /> */}
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
        {images && <ImageGallery images={images} />}
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
