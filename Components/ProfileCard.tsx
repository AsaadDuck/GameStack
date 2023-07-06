import AccountCircle from '@material-ui/icons/AccountCircle';
import EditIcon from '@mui/icons-material/Edit';
import React,{useState} from 'react';


const ProfileCard = ({ user }) => {

  const [username, setUsername] = useState(user.username);
  const [email,setEmail]= useState(user.email);
  const [name,setName] = useState('mockName')
  const [isClicked, setIsClicked] = useState(false);

  const handleEdit = ()=>{
   if(isClicked){
    setIsClicked(false);}
    else
    setIsClicked(true)
   
  }

  const handleSubmit = (event:any)=>{
   event.preventDefault()
   setName( event.target.name.value)
    setUsername(event.target.username.value)
    setEmail(event.target.email.value)

    ////////////////////////////fetchgoes here.

  };

  return (
    <div
      className='flex flex-col items-center justify-center h-full '
    >
      <div className='p-10  rounded-lg w-1/2'>
        <div onClick={handleEdit} className='flex justify-end'><EditIcon className='text-[#1e1e1e] rounded-full p-1 bg-[#E43F5A] scale-[1.5] mx-10'/></div>
      <div className='flex items-center justify-center mb-14'>
      <AccountCircle className='text-[#E43F5A] scale-[5] m-3' />
    </div>
      <form onSubmit={handleSubmit}>
      <div className=' text-center mt-4'>
          <hr className='border-[#E43F5A] m-4' />
          <label htmlFor='name' className='font-bold text-lg'>Name:</label>
          <p className={ isClicked ? 'hidden':'text-xl'}>{username}</p>
          <div className='flex justify-center'>
          <input required name='name' type="text" id="name" className={ isClicked ?  ' border-none outline-none block w-3/5 border border-gray-400 p-2 rounded-lg bg-[#E43F5A]':'hidden' }/>
          </div>

          <hr className='border-[#E43F5A] m-4' />
          <label htmlFor='username' className='font-bold text-lg'>Userame:</label>
          <p className={ isClicked ? 'hidden' :'text-xl' }>{username}</p>
          <div className='flex justify-center'>
          <input required type="text" name='username' id="username" className={ isClicked ? ' border-none outline-none block w-3/5 border border-gray-400 p-2 rounded-lg bg-[#E43F5A]':'hidden' }/>
          </div>

          <hr className='border-[#E43F5A]  m-4' />
          <label htmlFor='email' className='font-bold text-lg'>Email:</label>
          <p className={ isClicked ? 'hidden':'text-xl'}>{email}</p>
          <div className='flex justify-center'>
          <input required type="text" name='email' id="email" className={ isClicked ? ' border-none outline-none block w-3/5 border border-gray-400 p-2 rounded-lg bg-[#E43F5A]': 'hidden' }/>
          </div>
        </div>
        <div className='flex justify-center mt-4 '>
      <button type="submit" className={ isClicked ? "w-3/5 bg-[#E43F5A] hover:bg-[#3b0f17] text-white font-bold py-2 px-4 rounded": 'hidden' }>Submit</button>
      </div>
      </form>
       
      </div>
    </div>
  );
};

export default ProfileCard;