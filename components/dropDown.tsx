import { FiEdit3 } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";



const DropDown = () => {
  return (
    <div className="absolute right-5 top-[80px] z-10">
      <div className="bg-white border-darkGreen border-2 rounded-md w-[150px] h-[75px] flex flex-col justify-center gap-2 p-4">
        <div className=" w-[122] h-[70px] flex flex-row gap-2">
          <FiEdit3 className="w-[22px] h-[22px] text-darkGreen" /> <p className="text-darkGreen">Edit profile</p>
        </div>
        <div className=" w-[122] h-[70px] flex flex-row gap-2">
          <AiOutlineLogout className="w-[22px] h-[22px] text-darkGreen " />
          <p className="text-darkGreen">Log out</p>
        </div>
      </div>
    </div>
  );

};

export default DropDown;