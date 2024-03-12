import { FiEdit3 } from "react-icons/fi";
import { AiOutlineLogout } from "react-icons/ai";

const DropDown = () => {
  return (
    <div className="a">
      <div className="bg-white rounded-md w-[150px] h-[70px] flex flex-col justify-center">
        <div className=" w-[122] h-[70px] flex flex-row gap-2">
          <FiEdit3 className="w-[22px] h-[22px]" /> <p>Edit profile</p>
        </div>
        <div className=" w-[122] h-[70px] flex flex-row gap-2">
          <AiOutlineLogout className="w-[22px] h-[22px] " />
          <p>Log out</p>
        </div>
      </div>
    </div>
  );

  <div>
    <div>
      <div>icon1</div>
      <div>edit</div>
    </div>
    <div>
      <div></div>
      <div></div>
    </div>
  </div>;
};

export default DropDown;
