import Button from "../UI/Button";
import FloatingCoin from "../UI/FloatingCoin";
import btc from "../assets/icons8-bitcoin-94.png";
import eth from "../assets/icons8-ethereum-100.png";

const Join = () => {
  return (
    <section className=" relative my-[8rem] w-full min-h-[20rem] text-white fontbold2 text-[2.9rem] md:text-[4rem] lg:text-[5rem] flex flex-col items-center justify-center ">
      <div className="absolute top-[17%] flex gap-[16.5rem] md:top-[12%] md:gap-[23rem] lg:top-[7%] lg:gap-[28rem] ">
        <span>
          <FloatingCoin coin={btc} />
        </span>
        <span>
          <FloatingCoin coin={eth} />
        </span>
      </div>
      <p className="textshadow">JOIN US VIA </p>
      <p className="text-gradient">Discord/Twitter</p>
      <p className="text-[0.8rem] textshadow  md:text-[1.3rem]">
        Invest and manage crypto currencies at CryptoPro
      </p>
      <div className="mt-5">
        <Button>Join now</Button>
      </div>
    </section>
  );
};

export default Join;
