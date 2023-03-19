import React from "react";
import Character from "./Character";

class Characters extends React.Component {
  render() {
    return (
      <main>
        <Character characters={this.props.characters} />
      </main>
    );
  }
}

export default Characters;
