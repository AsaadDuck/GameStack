import GameCard from "../../Components/GameCard";
import React from 'react';

let Game ={
  name: 'super Mario Ulitmate',
  gen: 'nintindo',
  meta: 100,
  plafrom: ['playstation','pc']
}



const game = () => {
    return (
        <div className="h-full">
          <GameCard gameName={Game.name} gameGen={Game.gen} gameMeta={Game.meta} gamePlatforms={Game.plafrom} />
        </div>
      );
}
 
export default game;

 


