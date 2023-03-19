import React from "react";
import { Link } from "react-router-dom";

class Character extends React.Component {
  render() {
    if (this.props.characters.length > 0)
      return (
        <div>
          <ul className="characters">
            {this.props.characters.map((character) => (
              <li key={character.id}>
                <Link to={`/${character.id}`} className="character-link">
                  <div className="character">
                    <img
                      className="character__image"
                      src={character.image}
                      alt="CharacterAvatar"
                    />
                    <p className="character__name">{character.name}</p>
                    <p className="character__species">{character.species}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      );
    else
      return (
        <div className="characters">
          <h3>{"Character is not found"}</h3>
        </div>
      );
  }
}

export default Character;
