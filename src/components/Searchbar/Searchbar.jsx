import { Component } from 'react';
// import { getPhotosBySearch } from '../API/api';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleSearch = e => {
    this.setState({ searchQuery: e.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.onSubmit(this.state.searchQuery);
    // this.setState({ searchQuery: '' });
  };

  // componentDidUpdate = (_, prevState) => {
  //   if (prevState.searchQuery !== this.state.searchQuery) {
  //     // this.apiQuery();
  //     this.props.onSubmit(this.state.searchQuery);
  //   }
  // };

  // apiQuery = async () => {
  //   const data = await getPhotosBySearch(this.state.searchQuery);
  //   this.setState({ images: [...data.hits] });
  // };

  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.handleSubmit}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              onChange={this.handleSearch}
              value={this.state.searchQuery}
            />
          </form>
        </header>
      </>
    );
  }
}

// const Searchbar = onSubmit => {
//   return (
//     <header className="searchbar">
//       <form className="form">
//         <button type="submit" className="button">
//           <span className="button-label">Search</span>
//         </button>

//         <input
//           className="input"
//           type="text"
//           autocomplete="off"
//           autofocus
//           placeholder="Search images and photos"
//         />
//       </form>
//     </header>
//   );
// };

export default Searchbar;
