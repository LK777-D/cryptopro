import WhyUsCard from "./WhyUsCard";
import { UilWallet } from "@iconscout/react-unicons";
import { UilBitcoinCircle } from "@iconscout/react-unicons";
import { UilUsdCircle } from "@iconscout/react-unicons";
import { UilSignalAlt3 } from "@iconscout/react-unicons";
import { UilMoneyBillStack } from "@iconscout/react-unicons";
import { UilGoogleDrive } from "@iconscout/react-unicons";

const WhyUs = () => {
  return (
    <section id="us" className="text-white my-10 mt-20 lg:mt-40  ">
      <h1 className="text-4xl lg:text-6xl fontbold2 text-gradient text-center mb-16">
        Why Choose Us
      </h1>
      <div className="p-1 m-auto lg:flex justify-around  ">
        <div className="flex flex-col gap-3">
          <WhyUsCard
            heading="Connect Your Wallet"
            text="Choose any wallet you want(matemask,trustwallet)"
            icon={<UilWallet size="45" />}
          />
          <WhyUsCard
            heading="Make Your Own Coin"
            text="Upload your coin,set price and description"
            icon={<UilBitcoinCircle size="45" />}
          />
          <WhyUsCard
            heading="Earn Extra Money"
            text="By selling your coin earn extra money"
            icon={<UilUsdCircle size="45" />}
          />
        </div>
        <div className=" hidden  lg:flex lg:flex-col lg:gap-3 ">
          <WhyUsCard
            heading="Trade NFT's"
            text="Track NFT prices,sell & buy "
            icon={<UilSignalAlt3 size="45" />}
          />
          <WhyUsCard
            heading="Start Trading "
            text="Discover high-potential crypto currencies to invest "
            icon={<UilMoneyBillStack size="45" />}
          />
          <WhyUsCard
            heading="Manage  Investments "
            text=" Make unique  portfolio and manage with our financial tools "
            icon={<UilGoogleDrive size="45" />}
          />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
