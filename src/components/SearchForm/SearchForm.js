import React from "react";

class SearchForm extends React.Component {
  render() {
    return (
      <div className="search-form">
        <form action="">
          <input
            className="search-form_input"
            type="text"
            value={this.props.searchTerm ? this.props.searchTerm : ""}
            placeholder="Filter by name..."
            onChange={(event) => this.props.onSearch(event.target.value)}
          />
        </form>
      </div>
    );
  }
}

export default SearchForm;
