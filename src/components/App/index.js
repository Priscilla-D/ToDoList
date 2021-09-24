// == Import npm
import React from 'react';

// == Import
import './styles.scss';

import TodoList from 'src/components/TodoList';

// == Composant
const App = () => (
  <div className="app">
    <TodoList />
  </div>
);

// == Export
export default App;
