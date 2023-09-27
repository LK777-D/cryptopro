type ButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: ButtonProps) => {
  return (
    <button
      className="text-lg bg-purple-950 fontbold2 hover:bg-purple-800 transition duration-300 ease-in-out px-7 py-2 flex rounded-xl "
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
