import { Link } from "react-scroll";
import { UilDiscord } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";

const Nav = () => {
  return (
    <nav className="text-white fontbold2 text-md md:text-lg  flex justify-around items-center h-[4rem]  ">
      <span className="text-gradient text-xl md:text-3xl lg:text-4xl">
        CryptoPro
      </span>
      <div className="flex gap-2 text-md md:text-lg lg:text-xl ">
        <Link
          to="home"
          className="cursor-pointer  hover:text-purple-700 transition duration-300 ease"
          smooth={true}
        >
          Home
        </Link>
        <Link
          className="cursor-pointer  hover:text-purple-700 transition duration-300 ease"
          to="market"
          smooth={true}
        >
          Market
        </Link>
        <Link
          className="cursor-pointer  hover:text-purple-700 transition duration-300 ease"
          to="us"
          smooth={true}
        >
          About Us{" "}
        </Link>
      </div>
      <div className="flex gap-1 md:text-xl">
        <Link
          className="  hover:text-purple-700 transition duration-300 ease cursor-pointer"
          to="/"
        >
          <span>
            <UilDiscord size="35" />
          </span>
        </Link>
        <Link
          className=" hover:text-blue-400 transition duration-300 ease cursor-pointer"
          to="/"
        >
          <UilTwitter size="35" />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
