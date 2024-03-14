import BackArrow from "@/components/backArrow";
import Link from "next/link";
import StarButton from "@/components/starButton/starButton";
import { getLoggedInUser } from "@/services/auth.service";
import Author from "@/components/author";
import AuthButton from "@/components/AuthButton";
import LikeButton from "@/components/likeButton";
import ProfileButton from "@/components/profileButton";
import { UUID } from "crypto";
import { getUser } from "@/services/users.service";
import { userInfo } from "os";
import { User } from "../types/types";

const SelectedNews = async () => {
    const user=await getLoggedInUser()
    let userInfo: User | null = null;
    if (user) {
        userInfo=await getUser(user.id as UUID );
        console.log(userInfo)
    }
    
    return (
        <>
        { user && <StarButton className="w-[49px] absolute top-8 right-8" 
        initialState={false}
        ></StarButton>}
        <div>
            <BackArrow/>
            <div className="flex flex-col font-bold text-[20px] justify-center text-center place-content-center mt-[80px] mb-5"><h1>Title of the news/article</h1></div>
        <div className="border-2 border-darkGreen h-[206px] w-[325px]">
            <img src="/breakingNews.png" className="size-full"></img>
        </div>
            
        </div>
        <div className="text-center justify-center p-8 ">
        <p>
            Renewable energycomes from unlimited, naturally replenished resources, such as the sun, tides, and wind. Renewable energy can be used for electricity generation, space and water heating and cooling, and transportation. Non-renewable energy, in contrast, comes from finite sources, such as coal, natural gas, and oil.
            Renewable energycomes from unlimited, naturally replenished resources, such as the sun, tides, and wind. Renewable energy can be used for electricity generation, space and water heating and cooling, and transportation. Non-renewable energy, in contrast, comes from finite sources, such as coal, natural gas, and oil.
            Renewable energycomes from unlimited, naturally replenished resources, such as the sun, tides, and wind. Renewable energy can be used for electricity generation, space and water heating and cooling, and transportation. Non-renewable energy, in contrast, comes from finite sources, such as coal, natural gas, and oil.
            Renewable energycomes from unlimited, naturally replenished resources, such as the sun, tides, and wind. Renewable energy can be used for electricity generation, space and water heating and cooling, and transportation. Non-renewable energy, in contrast, comes from finite sources, such as coal, natural gas, and oil.
         </p>
        </div>
        { !user ? <div className="flex gap-7 justify-center w-full m-5">
            <Link href='/login' className="underline justify-center flex">Login</Link>
            <Link href='/register' className="underline justify-center flex">Register</Link>
          </div>:
           <> <div className="w-full ml-7"> Made by
            <Author
            userId={user.id as UUID}
            username={userInfo?.name || ''}
            />
            </div>
    <ProfileButton/></>}
        </>

    )
}

export default SelectedNews