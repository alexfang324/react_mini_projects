import React from 'react';

const Link = ({ href, className, children }) => {
  const onClick = (event) => {
    //open a new tab if user hold the meta or ctr key when clicking
    if (event.metaKey || event.ctrlKey) {
      return;
    }

    event.preventDefault();
    //change browser url without refreshing the page
    window.history.pushState({}, '', href);

    //tell each route component url has just changed
    const navEvent = new PopStateEvent('popstate');
    window.dispatchEvent(navEvent);
  };

  return (
    <a onClick={onClick} href={href} className={className}>
      {children}
    </a>
  );
};

export default Link;
