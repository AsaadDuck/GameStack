import React, { useState } from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Link from 'next/link';

const Card = (props:any) => {

  const [isclickedBacklog, setClickedBacklog]= useState(false)

  async function  handleBackLog(event:any){
    const URL =''
    if (isclickedBacklog){
      setClickedBacklog(false)
    }else{
      setClickedBacklog(true)
      setClickedPlaying(false)
      setClickedFinished(false)

      try{
        const response = await fetch (URL, {
          method:'POST',
          headers:{

          }
        });
      }catch(error){
        console.error(error)
      }
      

    }
    console.log(isclickedBacklog);

    
  }


  const [isclickedPlaying, setClickedPlaying]= useState(false)
  function  handlePlaying(e:any){
    if (isclickedPlaying){
      setClickedPlaying(false)
    }else{
      setClickedPlaying(true)
      setClickedBacklog(false)
      setClickedFinished(false)
    }
    console.log("handlePlaying");
    
  }


  const [isclickedFinished, setClickedFinished]= useState(false)
  function  handleFinished(e:any){
    if (isclickedFinished){
      setClickedFinished(false)
    }else{
      setClickedFinished(true)
      setClickedBacklog(false)
      setClickedPlaying(false)
    }
    console.log("handleFinished");
    
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4  flex-wrap bg-[#1E1E1E] my-4 mx-2 rounded-2xl p-6 text-2xl max-w-screen text-slate-300">
      <div className="md:col-start-1 md:col-end-5">
        <div className="justify-start items-center ">
          <h3 className="font-bold p-3">{props.name}FIFA 23</h3>
          <h4 className="p-1">{props.platform}PS5/PC/Xbox Series X</h4>
          <h5 className="p-1">{props.genere}Fight Game</h5>
        </div>
      </div>

      <div  className="xl:col-start-5 xl:col-end-7 lg:col-start-1 lg:col-start-7 md:col-start-7 md:col-start-1  sm:col-start-7 sm:col-start-1   items-center justify-center flex flex-wrap space-x-36 ">
        <Link  href={''}>
          <div onClick={handleBackLog}>
            <CheckCircleIcon  className={`${isclickedBacklog?  ' text-[#E43F5A] rounded-xl scale-[3]' :'text-gray-600 rounded-xl scale-[3]'} bg-slate-300 `} />
          </div>
        </Link>

        {/* <Link href={''}> */}
        <div onClick={handlePlaying}>
          <SportsEsportsIcon className={`${isclickedPlaying? ' text-[#E43F5A] rounded-xl scale-[3]' :'text-gray-600 rounded-xl scale-[3]'} bg-slate-300 `} />
        </div>
        {/* </Link> */}

        {/* <Link href={''}> */}
        <div onClick={handleFinished}>
          <ScheduleIcon className={`${isclickedFinished?  ' text-[#E43F5A] rounded-xl scale-[3]': 'text-gray-600 rounded-xl scale-[3]'} bg-slate-300 `} />

        </div>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Card;