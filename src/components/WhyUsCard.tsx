type WhyUsCardProps = {
  heading: string;
  text: string;
  icon: React.ReactNode;
};

const WhyUsCard = ({ heading, text, icon }: WhyUsCardProps) => {
  return (
    <div className=" carbg2 m-auto rounded-2xl p-1 w-[23rem] h-[10.5rem] flex items-center gap-7 ">
      <div className="cardbg p-2 rounded-xl mb-20 ml-2">{icon}</div>
      <div className="flex flex-col mb-9 gap-2 ">
        <span className="text-[1.4rem] fontbold2">{heading}</span>
        <span className="">{text}</span>
      </div>
    </div>
  );
};

export default WhyUsCard;
