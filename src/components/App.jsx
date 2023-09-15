import React, { Component } from 'react';
import { getPhotosBySearch } from './API/api';

import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import { toast } from 'react-toastify';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';

class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: '',
    page: 1,
  };

  componentDidUpdate = (_, prevState) => {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    ) {
      this.apiQuery();
      // console.log(this.state);
    }
  };

  apiQuery = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getPhotosBySearch(this.state.query, this.state.page);

      this.setState({ images: [...this.state.images, ...data.hits] });
      // toast.info(`Total: ${data.totalHits}`);
      console.log(data);
    } catch (error) {
      this.setState({ error: error.message });
      toast.error(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  increasePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));

    // this.apiQuery(this.state.page);
  };

  handleSubmit = value => {
    this.setState({ query: value });
  };

  render() {
    const { isLoading, images, error } = this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && <Button onClick={this.increasePage} />}
      </>
    );
  }
}

export default App;
