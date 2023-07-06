import React, { useState } from 'react'
import Card from '../../Components/Card';
const myGame = () => {

  const [data, setdata] = useState("");//data state for fetching the data

  //setting and fetching the Backlog 
  const [isclickedBacklog, setClickedBacklog]= useState(false)
  async function  handleBackLog  (event:any) {
     // const URL = '';//api url

    if(isclickedBacklog){
      setClickedBacklog(false);
    }else{
      setClickedBacklog(true)
      setClickedPlaying(false);
      setClickedFinished(false);

    //   const response = await fetch (URL);
    //   const data = await response.json();
    //   setdata(data);
    }
    console.log("handleBackLog");
  }

  //setting and fetch  Playing
  const [isclickedPlaying, setClickedPlaying]= useState(false)
  async function  handlePlaying  (event:any) {
        // const URL = '';//api url
    if(isclickedPlaying){
      setClickedPlaying(false);
    }else{
      setClickedPlaying(true)
      setClickedBacklog(false);
      setClickedFinished(false);

          //   const response = await fetch (URL);
    //   const data = await response.json();
    //   setdata(data);
    }
    console.log("handlePlaying");
    
  }


  //set and fetch Finished state
  const [isclickedFinished , setClickedFinished ]= useState(false)

  async function  handleFinished  (event:any) {

    console.log("handleFinished");

      // const URL = '';//api url
    if(isclickedFinished){
      setClickedFinished(false);
    }else{
      setClickedFinished(true)
      setClickedPlaying(false)
      setClickedBacklog(false);

          //   const response = await fetch (URL);
    //   const data = await response.json();
    //   setdata(data);
    }

  }



  return (


          <div className="my-4 mx-4 ">    
            <div className=" rounded-xl flex justify-center items-center text-slate-300 text-2xl   bg-[#1E1E1E] ">

              <div  className="flex justify-center m-4 p-4">
                <button onClick={handleBackLog} className={`${isclickedBacklog? ' text-[#E43F5A]': 'text-red-50'}`}>Back Log</button>
              </div>
            
              <div className="flex justify-center m-4 p-4">
                <button onClick={handlePlaying} className={`${isclickedPlaying?' text-[#E43F5A]': 'text-amber-50'}`}>Playing</button>

              </div>
            
              <div className="flex justify-center m-4 p-4">
                <button onClick={handleFinished} className={`${isclickedFinished? ' text-[#E43F5A]': 'text-amber-50'}`}>Finished</button>

              </div>     
            </div>


          <div>
            <Card />
          </div>

   </div>

  )
}

export default myGame;