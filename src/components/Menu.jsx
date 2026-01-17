import { HomeIcon, UserIcon, Cog6ToothIcon } from '@heroicons/react/24/outline';
import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav className="fixed bottom-0 z-50 w-full h-20 bg-[#b0bec5] text-white rounded-t-3xl">
      <ul className="flex flex-row justify-around items-center h-full">
        <li className="hover:bg-[#d9d9d9] rounded-full p-3 flex items-center justify-center">
          <Link to="/"><HomeIcon className="w-7 h-7 text-[#2c2f40]" strokeWidth="2"/></Link>
        </li>
        <li className="hover:bg-[#d9d9d9] rounded-full p-3 flex items-center justify-center">
          <Link to="/settings"><Cog6ToothIcon className="w-7 h-7 text-[#2c2f40]" strokeWidth="2"/></Link>
        </li>
        <li className="hover:bg-[#d9d9d9] rounded-full p-3 flex items-center justify-center">
          <Link to="/profile"><UserIcon className="w-7 h-7 text-[#2c2f40]" strokeWidth="2"/></Link>
        </li>
      </ul>
    </nav>
  );
}

export default Menu;
