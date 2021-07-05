import React, { Component } from 'react';

class NextButton extends Component {
  render() {
    const { handleClick } = this.props;
    return(
      <div>
          <button onClick={handleClick} >Pŕoximo Pokémon</button>
      </div>
    );
  }
}

export default NextButton;