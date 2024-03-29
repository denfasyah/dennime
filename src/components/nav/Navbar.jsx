import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className="navbar bg-purple-700">
      <div className="flex-1">
        <Link href='/' className="md:ml-20  text-White font-bold text-xl">DENNIME</Link>
      </div>

      <div className="dropdown dropdown-end md:mr-20">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <Image
              src="/img/anime.png"
              alt="Anime Image"
              width={300}
              height={200}
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-Purple text-black font-bold rounded-box w-52"
        >
          <li>
            <a className="justify-between">Profile</a>
          </li>
          <li>
            <a>Settings</a>
          </li>
          <li>
            <a>Logout</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
