import { Bars3Icon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Logo from "../assets/logo.png";
import { Link } from "react-scroll";
import { RxCross1 } from "react-icons/rx";

// const navItem = [{
//     to:"",
//     label:""
// }]

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <header className="flex  flex-row items-center justify-between px-5 py-4 bg-prim gap-1 relative">
      <a herf="#">
        <img className="object-cover h-5 w-[300px]" src={Logo} />
      </a>
      <nav className="hidden md:block">
        <ul className="flex text-white items-center">
          <li>
            <Link to="home" className="hover:text-yellow-500">
              Home
            </Link>
          </li>
          <li>
            <Link
              to="about"
              className="hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="service"
              className="hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              Service
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              className="hover:text-yellow-500"
              smooth={true}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      {toggleMenu && (
        <nav className="block md:hidden size-fit bg-white absolute right-10 top-10 w-3/4 rounded-lg mt-3">
          <ul className="text-black font-bold flex flex-col gap-2 text-center p-2">
           <li className="border-b-2 text-black"> 
              <Link
                to="/"
                className="hover:text-yellow-500"
                smooth
                duration={500}
              >
                Home
              </Link>
            </li>
            <li className="border-b-2 text-black">
              <Link
                to="about"
                className="hover:text-yellow-500"
                smooth
                duration={500}
              >
                About
              </Link>
            </li>
            <li className="border-b-2 text-black">
              <Link
                to="service"
                className="hover:text-yellow-500"
                smooth
                duration={500}
              >
                Service
              </Link>
            </li>
            <li>
              <Link
                to="contact"
                className="hover:text-yellow-500"
                smooth
                duration={500}
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      )}
      <button
        onClick={() => setToggleMenu((toggle) => !toggle)}
        className="md:hidden block"
      >
        {!toggleMenu ? (
          <Bars3Icon className="text-white h-6 text-2xl" />
        ) : (
          <RxCross1 className="text-white h-6 text-2xl" />
        )}
      </button>
    </header>
  );
}
