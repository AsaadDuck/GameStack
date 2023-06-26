import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import ScheduleIcon from '@material-ui/icons/Schedule';
import Link from 'next/link';

const Card = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-6 gap-4  flex-wrap bg-[#1E1E1E] my-4 mx-2 rounded-2xl p-6 text-2xl max-w-screen text-slate-300">
      <div className="md:col-start-1 md:col-end-5">
        <div className="justify-start items-center ">
          <h3 className="font-bold p-3">FIFA 23</h3>
          <h4 className="p-1">PS5/PC/Xbox Series X</h4>
          <h5 className="p-1">Fight Game</h5>
        </div>
      </div>

      <div className="md:col-start-5 md:col-end-7 items-center justify-center flex flex-wrap space-x-36">
        <Link href={''}>
          <CheckCircleIcon className="text-[#E43F5A] scale-[3] " />
        </Link>

        <Link href={''}>
          <SportsEsportsIcon className="text-[#E43F5A] scale-[3]" />
        </Link>

        <Link href={''}>
          <ScheduleIcon className="text-[#E43F5A] scale-[3]" />
        </Link>
      </div>
    </div>
  );
};

export default Card;