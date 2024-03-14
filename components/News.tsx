"use client"
import LikeButton from "./likeButton";
import { useState, ChangeEvent } from "react";


const News = () => {
    const [likeIsActive, setLikeIsActive] = useState (true)
const toggleActiveButton = () => {
    console.log("virkar")
    setLikeIsActive(!likeIsActive)
}



    return ( 
    <>
    <div className='border-2 border-darkGreen rounded-md w-[333px] h-[350px] mt-3 flex'> 
            <LikeButton handleClick = {toggleActiveButton}title='Liked News' isActive={likeIsActive}></LikeButton> 
            <LikeButton handleClick = {toggleActiveButton}title="Posted News" isActive={!likeIsActive}></LikeButton>
        </div>
    </>
    )
};

export default News;