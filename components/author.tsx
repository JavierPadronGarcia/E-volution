import { CgProfile } from "react-icons/cg";


const Author = () => {
    return(
            <div className="w-full flex justify-start">
            <div className="border-2 border-darkGreen h-[45px] flex flex-row items-center rounded-xl w-auto item-center px-4 py-6 ">
            <CgProfile className="w-[33px] h-[33px] mr-2"/> 
            Svanlaug Birna
            </div>
            </div>
    )
}

export default Author;