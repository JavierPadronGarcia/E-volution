import { PiUser } from "react-icons/pi";


const ProfileButton = () => {
    return (
        <div className="w-full flex justify-end mr-7 mb-7 relative h-[30px]">
        <div className="bg-notWhite rounded-full w-[51px] h-[51px] absolute right-5 bottom-0 ">
        <PiUser className="w-[48px] h-[48px] "/>
        </div>
        </div>
    )
}

export default ProfileButton;