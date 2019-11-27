import React from 'react';
import ReactDom from 'react-dom';
import LocaleTime from '..';

const App = () => {
  return (
    <div>
      <h1>Locale Time Example</h1>
      <LocaleTime />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById('root'));
