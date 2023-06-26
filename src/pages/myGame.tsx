import React from 'react'
import Card from '../../Components/Card';
const myGame = () => {
  return (


   <div>
          <div className="mx-auto mx-6 my-4 bg-[#1E1E1E]  rounded-4xl">    
            <div className="flex justify-center items-center text-slate-300 text-2xl mx-auto mx-4">

              <div className="flex justify-center m-4 p-4">
                <h6>Back Log</h6>
              </div>
            
              <div className="flex justify-center m-4 p-4">
                <h6>Playing</h6>
              </div>
            
              <div className="flex justify-center m-4 p-4">
                <h6>Finished</h6>
              </div>     
            </div>

          </div>

          <div>
            <Card />
          </div>

   </div>

  )
}

export default myGame;