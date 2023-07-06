import React, { useState } from 'react';

const editGame = () => {
  const [gameName, setGameName] = useState('');
  const [metacriticScore, setMetacriticScore] = useState('');
  const [playtime, setPlaytime] = useState('');
  const [platforms, setPlatforms] = useState([]);
  const [genres,setGenres] = useState([]);
  const [developers , setDevelopers] = useState([])
  const [date,setDate]=useState('')

  const handleGameNameChange = (event:any) => {
    setGameName(event.target.value);
  };

  const handleMetacriticScoreChange = (event:any) => {
    setMetacriticScore(event.target.value);
  };

  const handlePlaytimeChange = (event:any) => {
    setPlaytime(event.target.value);
  };

  const handlePlatformsChange = (event:any) => {
    const { checked, value } = event.target;
  if (checked) {
    setPlatforms(platforms.concat(value));
  } else {
    setPlatforms(platforms.filter((platform) => platform !== value));
  }
  };

  const handleSubmit = (event:any) => {
    event.preventDefault();
    
    // Create a new game object with the form data
    const newGame = {
      gameName,
      metacriticScore,
      playtime,
      platforms
    };
    
    console.log(newGame);
    
    // Make a POST request to the API to save the new game
    // fetch('https://example.com/api/games', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(newGame)
    // })
    // .then(response => response.json())
    // .then(data => {
    //   console.log('New game created:', data);
    //   // Do something with the response data, such as redirecting to a new page
    // })
    // .catch(error => {
    //   console.error('Error creating new game:', error);
    //   // Handle the error, such as displaying an error message to the user
    // });
  };

  return (
   <div>
 <form  onSubmit={handleSubmit} className="max-w-lg mx-auto px-4 py-8 shadow-lg rounded-lg">
      <div className="mb-4">
        <label htmlFor="gameName" className="block  font-bold mb-2">Game Name:</label>
        <input placeholder='Enter game name' type="text" id="gameName" value={gameName} onChange={handleGameNameChange} className="border-none outline-none block w-full border border-gray-400 p-2 rounded-lg bg-[#E43F5A]" />
      </div>
      <div className="mb-4">
        <label htmlFor="developers" className="block  font-bold mb-2">Developers:</label>
        <input placeholder='name1,name2,name3....' type="text" id="developers" value={metacriticScore} onChange={handleMetacriticScoreChange} className="border-none outline-none block w-full border bg-[#E43F5A] border-gray-400 p-2 rounded-lg" />
      </div>
      <div className="mb-4">
        <label htmlFor="genres" className="block  font-bold mb-2">genres</label>
        <input type="text" id="genres" value={metacriticScore} onChange={handleMetacriticScoreChange} className="border-none outline-none block w-full border bg-[#E43F5A] border-gray-400 p-2 rounded-lg" />
      </div>
      <div className="mb-4">
        <label htmlFor="metacriticScore" className="block  font-bold mb-2">Metacritic Score:</label>
        <input type="text" id="metacriticScore" value={metacriticScore} onChange={handleMetacriticScoreChange} className="border-none outline-none block w-full border bg-[#E43F5A] border-gray-400 p-2 rounded-lg" />
      </div>
     
     
      <div className="mb-4">
        <label htmlFor="playtime" className="block  font-bold mb-2">Playtime (hours):</label>
        <input type="number" id="playtime" value={playtime} onChange={handlePlaytimeChange} className="border-none outline-none block w-full border bg-[#E43F5A] border-gray-400 p-2 rounded-lg " />
      </div>
      <div className="mb-4">
        <label htmlFor="date" className="block  font-bold mb-2">release Date DD/MM/YYYY:</label>
        <input type="number" id="date" value={playtime} onChange={handlePlaytimeChange} className="border-none outline-none block w-full border bg-[#E43F5A] border-gray-400 p-2 rounded-lg " />
      </div>
      <div className="mb-4">
        <label htmlFor="platforms" className="block  font-bold mb-2">Platforms:</label>
       
        <div className='flex justify-between'>
        <label className={platforms.includes("playstation") ?  " bg-[#E43F5A]  p-2 rounded-xl w-28 text-center" : " bg-[#1E1E1E] p-2 rounded-xl w-28 text-center"}>
    <input className ='hidden'
      type="checkbox"
      name="platforms"
      value="playstation"
      checked={platforms.includes("playstation")}
      onChange={handlePlatformsChange}
    />
    Playstation
  </label>
  <label className={platforms.includes("xbox") ?  " bg-[#E43F5A]  p-2 rounded-xl w-28 text-center" : " bg-[#1E1E1E] p-2 rounded-xl w-28 text-center"}>
  <input className ='hidden'

      type="checkbox"
      name="platforms"
      value="xbox"
      checked={platforms.includes("xbox")}
      onChange={handlePlatformsChange}
    />
    Xbox
  </label>
  <label className={platforms.includes("pc") ? " bg-[#E43F5A]  p-2 rounded-xl w-28 text-center" : " bg-[#1E1E1E] p-2 rounded-xl w-28 text-center"}>

  <input className ='hidden'

      type="checkbox"
      name="platforms"
      value="pc"
      checked={platforms.includes("pc")}
      onChange={handlePlatformsChange}
    />
    PC
  </label>
  <label className={platforms.includes("switch") ?  " bg-[#E43F5A]  p-2 rounded-xl w-28 text-center" : " bg-[#1E1E1E] p-2 rounded-xl w-28 text-center"}>

  <input className ='hidden'

      type="checkbox"
      name="platforms"
      value="switch"
      checked={platforms.includes("switch")}
      onChange={handlePlatformsChange}
    />
    Switch
  </label>
</div>

      </div>
      <div className='flex justify-end'>
      <button type="submit" className="w-full bg-[#E43F5A] hover:bg-[#3b0f17] text-white font-bold py-2 px-4 rounded">Submit</button>
      </div>
      
    </form>
   </div>
   
  );
};

export default editGame;