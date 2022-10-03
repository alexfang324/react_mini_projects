import React, { useState } from 'react';
import Home from './components/Home';
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';
import Translate from './components/Translate';
import Header from './components/Header';
import Route from './components/Route';

const items = [
  {
    title: 'What is React?',
    content:
      'React is a free and open-source front-end JavaScript library for building user interfaces based on UI components'
  },
  {
    title: 'Why use React?',
    content: 'React is a favourite js library among engineers'
  },
  {
    title: 'How do you use React?',
    content: 'You use React by creating components'
  }
];

const options = [
  { label: 'Red', value: 'red' },
  { label: 'Green', value: 'green' },
  { label: 'Blue', value: 'blue' }
];

export default () => {
  const [selected, setSelected] = useState(options[0]);
  return (
    <div className="ui container">
      <Header />
      <Route path="/">
        <Home />
      </Route>
      <Route path="/accordion">
        <Accordion items={items} />
      </Route>
      <Route path="/list">
        <Search />
      </Route>
      <Route path="/dropdown">
        <Dropdown
          label="Select a Color"
          options={options}
          selected={selected}
          onSelectedChange={setSelected}
        />
      </Route>
      <Route path="/translate">
        <Translate />
      </Route>
    </div>
  );
};
