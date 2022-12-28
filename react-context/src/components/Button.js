import React from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

//An example of retrieving MULTIPLE context within a component using the
//Context.Consumer component. The consumer component always takes a function with its
//context as input and will invoke it for the user automatically.
class Button extends React.Component {
  renderButtonText = (value) => {
    return value === 'english' ? 'Submit' : '提交';
  };

  renderButton = (color) => {
    return (
      <button className={`ui button ${color}`}>
        <LanguageContext.Consumer>
          {(value) => this.renderButtonText(value)}
        </LanguageContext.Consumer>
      </button>
    );
  };

  render() {
    return (
      <ColorContext.Consumer>
        {(color) => this.renderButton(color)}
      </ColorContext.Consumer>
    );
  }
}

export default Button;
