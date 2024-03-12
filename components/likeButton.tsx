'use client';

import { useEffect, useState } from "react";
import StarSVGComponent from "@/components/likeButton/starSVGComponent";
import { type UUID } from "crypto";
import { likePost, unLikePost } from "@/services/likes.service";

type Props = {
  initialState: boolean,
  user_id?: UUID,
  post_id?: UUID
}

export const revalidate = 0;

export default function LikeButton({ initialState, user_id, post_id, className, ...props }: Props & { className?: string }) {

  const [isLiked, setIsLiked] = useState<boolean>(initialState);

  useEffect(() => {
    setIsLiked(initialState)
  }, [initialState]);

  const toggleLike = () => {
    if (user_id && post_id && isLiked === true) {
      unLikePost(user_id, post_id);
    }

    if (user_id && post_id && isLiked === false) {
      likePost(user_id, post_id);
    }

    setIsLiked(!isLiked);
  }

  return (
    <>
      {isLiked
        ? <StarSVGComponent liked={true} onClick={toggleLike} className={`cursor-pointer ${className}`} {...props} />
        : <StarSVGComponent liked={false} onClick={toggleLike} className={`cursor-pointer ${className}`} {...props} />
      }
    </>
  )
}