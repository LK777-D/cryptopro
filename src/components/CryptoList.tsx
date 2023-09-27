import Button from "../UI/Button";
import { type Coin } from "../App";

type CryptoListProps = {
  setInitialCoins: React.Dispatch<React.SetStateAction<number>>;
  initialCoins: number;
  coins: Coin[];
};

const CryptoList = ({
  setInitialCoins,
  initialCoins,
  coins,
}: CryptoListProps) => {
  return (
    <section className="text-white" id="market">
      <h1 className="text-3xl fontbold my-10 text-center">Market Update</h1>
      <div className="flex flex-col pb-4 items-center md:p-3 lg:p-0  lg:w-[75%] lg:mx-auto ">
        <div className="flex w-full p-3  items-center justify-between py-5 lg:py-3 px-5 rounded-t-md  purplebg  ">
          <span className="w-[20%] text-left ml-[2%] ">Coin</span>
          <span>Price</span>
          <span>
            {" "}
            <span className="hidden md:inline">Price</span> Change(1h)
          </span>
          <span className=" w-[25%] md:w-auto ">MarketCap</span>
        </div>
        {coins.slice(0, initialCoins).map((coin) => (
          <div
            key={coin.id}
            className=" w-full m-auto flex items-center justify-between p-3 text-center hover:bg-purple-900 transition duration-500 ease cursor-pointer "
          >
            <div className="flex flex-col  items-left  w-[20%] text-left ml-[2%] md:flex md:flex-row md:items-center md:gap-3">
              <img src={coin.icon} className="w-[50px] h-[50px] " />
              <span className="text-left">{coin.name}</span>
            </div>

            <span className="text-green-500 w-[20%] items-left justify-center text-center ">
              ${coin.price.toFixed(2)}
            </span>
            <span
              className={` ${
                coin.priceChange1h >= 0 ? "text-green-400" : "text-red-700"
              } `}
            >
              {coin.priceChange1h}%
            </span>
            <span className="w-[40%] md:w-[20%]">
              ${coin.marketCap.toLocaleString()}
            </span>
          </div>
        ))}
        <div className=" mt-5 w-full flex justify-center gap-10">
          <Button onClick={() => setInitialCoins(initialCoins + 5)}>
            Show More
          </Button>
          {initialCoins > 10 && (
            <Button
              onClick={() => setInitialCoins((prevCoins) => prevCoins - 5)}
            >
              Show Less
            </Button>
          )}
        </div>
      </div>
    </section>
  );
};

export default CryptoList;
