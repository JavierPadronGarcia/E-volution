"use client"

type Props = {
  title: string
  handleClick: () => void;
  isActive: boolean;
};

const LikeButton: React.FC<Props> = ({ title, handleClick, isActive }) => {

  return (
    <div>
      <button className={` h-full ${isActive ? "bg-darkGreen text-white" : "bg-notWhite"} w-[165px] `} onClick={handleClick}>{title}</button>
    </div>
  );
};

export default LikeButton;