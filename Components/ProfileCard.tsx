import AccountCircle from '@material-ui/icons/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import React from 'react';

const ProfileCard = ({ user }) => {
  return (
    <div
      className='flex flex-col items-center justify-center h-full '
    >
      <div className='p-10  rounded-lg w-1/2'>
        <div><EditIcon className='text-[#E43F5A] scale-[5]'/></div>
      <div className='flex items-center justify-center mb-14'>
      <AccountCircle className='text-[#E43F5A] scale-[5]' />
    </div>
        <div className='text-center mt-4'>
          <hr className='border-[#E43F5A] m-4' />
          <p className='font-bold text-lg'>Name:</p>
          <p className='text-xl'>{user.username}</p>
          <hr className='border-[#E43F5A]  m-4' />
          <p className='font-bold text-lg'>Email:</p>
          <p className='text-xl'>{user.email}</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;