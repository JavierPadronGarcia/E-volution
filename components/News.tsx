"use client";
import LikeButton from "./likeButton";
import { useState, ChangeEvent } from "react";
import Article from "./article";

const News = () => {
  const [likeIsActive, setLikeIsActive] = useState(true);
  const toggleActiveButton = () => {
    console.log("virkar");
    setLikeIsActive(!likeIsActive);
  };

  return (
    <>
      <div className="border-2 border-darkGreen rounded-md w-[333px] h-[315px]  mt-3 flex flex-wrap justify-center">
        <div className="flex border-darkGreen border-b-2 h-14">
          {/*er að reyna laga border button */}
          <LikeButton
            handleClick={toggleActiveButton}
            title="Liked News"
            isActive={likeIsActive}
          ></LikeButton>
          <LikeButton
            handleClick={toggleActiveButton}
            title="Posted News"
            isActive={!likeIsActive}
          ></LikeButton>
        </div>
        <Article
          title="title"
          image="@/app/twitter-image.png"
          content="text"
          isLeft= {true}
        ></Article>
        <Article
          title="title"
          image="@/app/twitter-image.png"
          content="text"
          isLeft= {false}
        ></Article>
      </div>
    </>
  );
};

export default News;
