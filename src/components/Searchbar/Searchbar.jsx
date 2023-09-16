import { Component } from 'react';
import {
  SearchFormButtonStyled,
  SearchFormInputStyled,
  SearchFormStyled,
  SearchbarHeaderStyled,
} from './SearchbarStyled';
import { FaSearch } from 'react-icons/fa';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSearch = e => {
    this.setState({ searchQuery: e.target.value.trim() });
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.searchQuery.length > 2) {
      this.props.onSubmit(this.state.searchQuery);
    } else {
      Notify.warning('Enter more than 2 symbols, please');
    }
    // this.setState({ searchQuery: '' });
  };

  render() {
    return (
      <>
        <SearchbarHeaderStyled>
          <SearchFormStyled onSubmit={this.handleSubmit}>
            <SearchFormButtonStyled type="submit" className="button">
              <FaSearch />
            </SearchFormButtonStyled>

            <SearchFormInputStyled
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleSearch}
              value={this.state.searchQuery}
            />
          </SearchFormStyled>
        </SearchbarHeaderStyled>
      </>
    );
  }
}

export default Searchbar;
