import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import chuckGif from './assets/chuck.gif';

function App() {
  const [joke, setJoke] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchJoke();
  }, []);

  const fetchJoke = async () => {
    try {
      const response = await axios.get('https://api.chucknorris.io/jokes/random');
      setJoke(response.data.value);
      setLoading(false);
    } catch (error) {
      setError('Error searching for a joke. Try again.');
      setLoading(false);
    }
  };

  return (
    <div className="container">
      <header>
        <h1>Chuck Norris Jokes</h1>
      </header>

      <div className="joke-container">
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        {!loading && !error && <p>{joke}</p>}
      </div>

      <img className="chuck-image" src={chuckGif} alt="Chuck Norris" />

      <div className="button-container">
        <button onClick={fetchJoke}>New joke</button>
      </div>

      <div className="container2">
        <h2>Synopsis:</h2>
          <p>
            Get ready for a whirlwind of laughs and action with Chuck Norris, the man who doesn’t just break the fourth wall but turns it into a movie screen. In a world where logic and physics are merely suggestions, Chuck Norris proves that even the laws of nature bow to his charisma and supernatural skills. From defeating villains with a piercing glance to cooking up a feast with a single punch, Chuck Norris is the hero that not even gravity can hold back. If you thought reality was rigid and predictable, wait until you see Chuck Norris giving a masterclass in physics during an epic battle against chaos, where he not only redefines the concept of "superhero" but also makes the laws of physics seem a bit more flexible. Get ready for a show where the only thing stronger than Chuck Norris's punch is his ability to make you laugh until you cry!
          </p>
      </div>

    </div>
  );
}

export default App;
