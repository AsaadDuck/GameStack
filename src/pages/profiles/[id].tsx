import ProfileCard from "../../../Components/ProfileCard";
import { useRouter } from 'next/router';

const Profiles = () => {
  const router = useRouter();
  const { id } = router.query || {};

  return (
    <div className='h-full'>
      <h1>details of the user {id}</h1>
      <ProfileCard user={{ username: 'mochname', email: 'mockemail@mock.com' }} />
    </div>
  );
}
 
export default Profiles;