import React from 'react';
import MovieProvider from './MovieProvider.jsx';
import MovieList from './MovieList.jsx';

const App = () => {
  return (
    <MovieProvider>
      <MovieList />
    </MovieProvider>
  );
}

export default App;