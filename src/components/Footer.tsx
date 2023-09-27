import { UilDiscord } from "@iconscout/react-unicons";
import { UilFacebook } from "@iconscout/react-unicons";
import { UilTwitter } from "@iconscout/react-unicons";
import { UilInstagram } from "@iconscout/react-unicons";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="flex flex-col gap-10  h-[10rem]">
      <div className="text-white flex justify-center items-center gap-1 ">
        <UilDiscord
          className=" hover:text-purple-700 transition duration-300 ease cursor-pointer"
          size="40"
        />
        <UilFacebook
          className=" hover:text-blue-700 transition duration-300 ease cursor-pointer"
          size="40"
        />
        <UilTwitter
          className=" hover:text-blue-400 transition duration-300 ease cursor-pointer"
          size="40"
        />
        <UilInstagram
          className=" hover:text-red-300 transition duration-300 ease cursor-pointer"
          size="40"
        />
      </div>
      <div className="text-white text-xl fontbold2 cursor-pointer flex justify-center gap-5">
        <Link
          className="hover:text-purple-800 transition duration-300 ease-in-out"
          to="/"
        >
          Terms of Use{" "}
        </Link>
        <Link
          className="hover:text-purple-800 transition duration-300 ease-in-out"
          to="/"
        >
          Privacy Plicy
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
