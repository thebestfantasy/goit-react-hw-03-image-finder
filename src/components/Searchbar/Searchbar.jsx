import { Component } from 'react';

class Searchbar extends Component {
  state = {};

  render() {
    return (
      <>
        <header className="searchbar">
          <form className="form" onSubmit={this.props.handleSearch}>
            <button type="submit" className="button">
              <span className="button-label">Search</span>
            </button>

            <input
              className="input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
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
