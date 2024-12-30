import Image from "next/image";
import CartIcon from "./CartIcon";
import { User } from 'lucide-react';

const Navbar = () => {

  return (
    <div className="h-16 px-4 bg-themeBlue text-white flex sticky top-0 z-50 justify-between">
      {/* CENTER */}
      <a href="/" className="flex h-full items-center">
        <Image src="/logo.png" alt="" width={80} height={80} />
        <div className="font-bold text-2xl pl-1">GUPTA ASSOCIATES</div>
      </a>
      <div className="w-1/2 items-center absolute left-[50%] translate-x-[-50%] hidden md:flex h-full">
        <img src="/search-icon.png" className=" h-[20px] absolute right-2 mr-2" />
        <input className="w-full h-2/3 rounded-lg px-9 outline-none" placeholder="Search Products..." />
      </div>
      {/* RIGHT */}
      <div className="flex w-auto md:w-48 justify-between h-ful gap-3">
        <a href="/register" className="h-full flex items-center">
          <User size={35} />
        </a>
        <CartIcon />
      </div>
    </div>
  );
}

export default Navbar;
