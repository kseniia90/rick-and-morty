import "./App.css";
import React from "react";
import axios from "axios";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import SearchForm from "./components/SearchForm/SearchForm";
import Characters from "./components/Characters/Characters";
import CharacterDetails from "./components/Characters/CharacterDetails.js";

const baseUrl = "https://rickandmortyapi.com/api/character";
let charactersForFilter = [];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: [],
      searchTerm: "",
    };

    this.filterCharacters = this.filterCharacters.bind(this);
  }

  componentDidMount() {
    axios.get(baseUrl).then((res) => {
      let sortedCharacters = res.data.results;
      sortedCharacters.sort(function (a, b) {
        const nameA = a.name.toLowerCase();
        const nameB = b.name.toLowerCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
      });
      charactersForFilter = sortedCharacters;
      let storageData = localStorage.getItem("searchTerm");
      if (storageData) {
        this.setState({
          characters: sortedCharacters.filter((character) =>
            character.name
              .toLowerCase()
              .includes(storageData)
          ),
          searchTerm: storageData,
        });
      } else {
        this.setState({ characters: sortedCharacters });
      }
    });
  }

  render() {
    return (
      <div className="App">
        <Router>
          <Routes>
            <Route exact path="/"
              element={
                <>
                  <Header />
                  <SearchForm
                    searchTerm={this.state.searchTerm}
                    onSearch={this.filterCharacters}
                  />
                  <Characters characters={this.state.characters} />
                </>
              }
            />
            <Route exact path="/:id" element={<CharacterDetails />} />
          </Routes>
        </Router>
      </div>
    );
  }

  filterCharacters(name) {
    this.setState({
      characters: charactersForFilter.filter((character) =>
        character.name.toLowerCase().includes(name)
      ),
      searchTerm: name,
    });
    localStorage.setItem("searchTerm", name);
  }
}

export default App;
