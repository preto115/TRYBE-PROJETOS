import React from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import movies from './data';
// import MovieCard from './components/MovieCard';

function App() {
  return (
    <div className="App">
      {/* Sua implementação deve ficar aqui. Remova essas duas linhas e mão na massa */}
      {/* Hora de codar! 🚀✍️👨‍💻👩‍💻💪 */}
      <section className=" page-title">
        <Header />
      </section>
      <section className="page-body">
        <MovieList movies={movies} />
      </section>
    </div>
  );
}

export default App;
