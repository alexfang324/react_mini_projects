import React from 'react';

const Home = () => {
  return (
    <div>
      <h1>This is an app with several widgets that:</h1>
      <ul>
        <li>
          <h3>
            was built using the Hook system (specfically useState, useEffect,
            and useRef){' '}
          </h3>
        </li>
        <br />
        <li>
          <h3>
            uses the concept of throttling and debouncing to handle user inputs
            and the concept of of event bubbling when handling onClick events of
            a dropdown menu
          </h3>
        </li>
        <br />
        <li>
          <h3>
            uses a custom router built from self-written Router and Link
            components
          </h3>
          <p>
            This is to help with learning how routing can be achieved using
            useEffect. A React router will be used in future projects
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Home;
