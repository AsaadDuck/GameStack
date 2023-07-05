import React, { useState } from 'react';

const editGame = () => {
  const [gameName, setGameName] = useState('');
  const [metacriticScore, setMetacriticScore] = useState('');
  const [playtime, setPlaytime] = useState('');
  const [platforms, setPlatform] = useState([]);

  const handleGameNameChange = (event) => {
    setGameName(event.target.value);
  };

  const handleMetacriticScoreChange = (event) => {
    setMetacriticScore(event.target.value);
  };

  const handlePlaytimeChange = (event) => {
    setPlaytime(event.target.value);
  };

  const handlePlatformsChange = (event) => {
    setPlatform(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here
  };

  return (
   
    <form className="max-w-lg mx-auto px-4 py-8 shadow-lg rounded-lg">
      <div className="mb-4">
        <label htmlFor="gameName" className="block  font-bold mb-2">Game Name:</label>
        <input type="text" id="gameName" value={gameName} onChange={handleGameNameChange} className="block w-full border border-gray-400 p-2 rounded-lg bg-[#E43F5A]" />
      </div>
      <div className="mb-4">
        <label htmlFor="metacriticScore" className="block  font-bold mb-2">Metacritic Score:</label>
        <input type="text" id="metacriticScore" value={metacriticScore} onChange={handleMetacriticScoreChange} className="block w-full border bg-[#E43F5A] border-gray-400 p-2 rounded-lg" />
      </div>
      <div className="mb-4">
        <label htmlFor="playtime" className="block  font-bold mb-2">Playtime (hours):</label>
        <input type="text" id="playtime" value={playtime} onChange={handlePlaytimeChange} className="block w-full border bg-[#E43F5A] border-gray-400 p-2 rounded-lg " />
      </div>
      <div className="mb-4">
        <label htmlFor="platforms" className="block  font-bold mb-2">Platforms:</label>
        <select id="platforms" multiple value={platforms} onChange={handlePlatformsChange} className="block w-full border bg-[#E43F5A] border-gray-400 p-2 rounded-lg ">
          <option value="playstation">Playstation</option>
          <option value="xbox">Xbox</option>
          <option value="pc">PC</option>
          <option value="switch">Switch</option>
        </select>
      </div>
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Submit</button>
    </form>
  );
};

export default editGame;