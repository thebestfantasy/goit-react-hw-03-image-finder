import React, { Component } from 'react';
import { getPhotosBySearch } from './API/api';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import Searchbar from './Searchbar/Searchbar';
import Loader from './Loader/Loader';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { AppStyled } from './App.Styled';

class App extends Component {
  state = {
    query: '',
    images: [],
    isLoading: false,
    error: '',
    page: 1,
    loadMore: false,
  };

  componentDidUpdate = (_, prevState) => {
    if (
      prevState.query !== this.state.query ||
      prevState.page !== this.state.page
    )
      this.apiQuery();
  };

  apiQuery = async () => {
    try {
      this.setState({ isLoading: true });
      const data = await getPhotosBySearch(this.state.query, this.state.page);

      this.setState({
        images: [...this.state.images, ...data.hits],
        loadMore: this.state.page < Math.ceil(data.totalHits / 12),
      });
      Notify.success(`Total: ${data.totalHits}`);
    } catch (error) {
      this.setState({ error: error.message });
      Notify.failure(error.message);
    } finally {
      this.setState({ isLoading: false });
    }
  };

  increasePage = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));

    window.scrollBy({
      top: 100 * 3,
      behavior: 'smooth',
    });
  };

  handleSubmit = value => {
    this.setState({ query: value, images: [], page: 1 });
  };

  render() {
    const { isLoading, images, error, loadMore } = this.state;
    return (
      <AppStyled>
        <Searchbar onSubmit={this.handleSubmit} />
        {isLoading && <Loader />}
        {error && <h2>{error}</h2>}
        {images.length > 0 && <ImageGallery images={images} />}
        {images.length > 0 && loadMore && (
          <Button onClick={this.increasePage} />
        )}
      </AppStyled>
    );
  }
}

export default App;
