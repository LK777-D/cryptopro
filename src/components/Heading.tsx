import { Coin } from "../App";
import btc from "../assets/icons8-bitcoin-94.png";
import eth from "../assets/icons8-ethereum-100.png";

type HeadingProps = {
  coins: Coin[];
};

const Heading = ({ coins }: HeadingProps) => {
  return (
    <header
      id="home"
      className="text-white flex flex-col lg:gap-10 mt-[6rem] mb-[8.5rem]"
    >
      <div className="fontbold2 relative text-shadow leading-normal  line text-4xl flex flex-col items-center lg:text-7xl">
        <div className="absolute top-0 flex gap-[17rem] lg:top-[5%] lg:gap-[32rem]">
          <img
            src={btc}
            className="w-[55px] anim  lg:w-[70px] left-[25%] top-2 "
          />
          <img
            src={eth}
            className="w-[52px] lg:w-[68px] anim right-[25%] top-2 "
          />
        </div>
        <span className="textshadow">Track & Trade</span>
        <span className="text-gradient ">Crypto Currencies</span>
      </div>
      <div className="flex justify-around items-center p-7 gap-5 lg:justify-center lg:gap-[10rem] ">
        {coins.slice(0, 3).map((coin) => (
          <div key={coin.id} className="flex flex-col items-center">
            <img src={coin.icon} className="w-[70px] lg:w-[100px]" />
            <div className="flex justify-center items-center gap-2">
              <span>{coin.name}</span>
              <span
                className={` ${
                  coin.priceChange1h >= 0 ? "text-green-400" : "text-red-700"
                } `}
              >
                {coin.priceChange1h}%
              </span>
            </div>
            <span className="text-green-500">{coin.price.toFixed(2)}$</span>
          </div>
        ))}
      </div>
    </header>
  );
};
export default Heading;
