import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

//An example of retrieving only ONE context within a component.

class Field extends React.Component {
  //contextType is a special variable known to React
  static contextType = LanguageContext;

  render() {
    //after contextType is assigned, we can get context through this.context
    const text = this.context === 'english' ? 'Content' : '內容';
    return (
      <div className="ui field">
        <label>{text}</label>
        <input />
      </div>
    );
  }
}

export default Field;
