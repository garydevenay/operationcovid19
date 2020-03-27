import React from 'react';
import { useRoutes } from 'hookrouter';
import { routes } from './Screens/router';

function App() {
  const routeResult = useRoutes(routes);

  return (
    <div className="App">
      <header className="App-header">
      </header>

      {routeResult}
    </div>
  );
}

export default App;
