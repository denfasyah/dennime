import Navbar from './components/Navbar'
import Animelist from "./components/Animelist";

const Home = () => {
  return (
    <div>
      <Navbar />
      <h1 className='text-2xl ml-10 my-10 text-White font-medium'>Popular</h1>
      <Animelist />
    </div>
  );
};

export default Home;
