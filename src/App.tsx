import Nav from "./components/Nav";
import "./App.css";
import CryptoList from "./components/CryptoList";
import { useState, useEffect } from "react";
import Heading from "./components/Heading";
import WhyUs from "./components/WhyUs";
import Join from "./components/Join";
import Footer from "./components/Footer";

export type Coin = {
  id: string;
  name: string;
  rank: number;
  price: number;
  symbol: string;
  icon: string;
  priceChange1h: number;
  marketCap: number;
};

function App() {
  const [coins, setCoins] = useState<Coin[]>([]);
  const [initialCoins, setInitialCoins] = useState<number>(10);
  const cryptoData = async () => {
    const url: string = "https://api.coinstats.app/public/v1/coins?skip=0";
    const response: Response = await fetch(url);
    const data = await response.json();
    if (data.coins) {
      setCoins(data.coins);
    }
  };
  useEffect(() => {
    cryptoData();
  }, []);

  return (
    <>
      <Nav />
      <Heading coins={coins} />
      <CryptoList
        setInitialCoins={setInitialCoins}
        coins={coins}
        initialCoins={initialCoins}
      />
      <WhyUs />
      <Join />
      <Footer />
    </>
  );
}

export default App;
