'use client';

import { SubmitButton } from "@/app/login/submit-button";
import BackArrow from "@/components/backArrow";
import Hamburgermenu from "@/components/hamburgermenu";
import { AddImage } from "@/services/images.service";
import { addPost } from "@/services/posts.service";
import { FormEvent, useRef, useState } from "react";
import { FaImage } from "react-icons/fa";
import { Post } from "@/app/types/types";
import { type UUID, createHash } from "crypto";
import { useRouter } from "next/navigation";

export const revalidate = 0;

export default function CreatePostPage({
  searchParams,
}: {
  searchParams: { user_id: UUID }
}) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [showError, setShowerror] = useState<boolean>(false);

  const postArticle = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: { [key: string]: FormDataEntryValue } = Object.fromEntries(formData.entries());

    if (!data.image || !data.title || !data.description || !searchParams.user_id) {
      setShowerror(true);
    } else {
      setShowerror(false);
      const image = data.image as File;

      const uuid = createHash('sha1').update(Date.now().toString()).digest('hex');
      const fileExtension = getFileExtension(image.name);
      const newFileName = `${uuid}.${fileExtension}`;
      var blob = image.slice(0, image.size, image.type);

      const newFile = new File([blob], newFileName, { type: image.type });

      const newImageData = await AddImage(newFile, 'post');
      if (newImageData) {
        const newPost: Post = {
          title: data.title as string,
          description: data.description as string,
          filename: newImageData.path,
          user_id: searchParams.user_id
        }
        const post = await addPost(newPost);
        if (post) {
          router.push('/news');
        }
      }
    }
  }

  const handleFileInputChange = () => {
    const selectedFile = fileInputRef.current?.files?.[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setImageUrl(url);
    }
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <h1 className="mt-[93px]">Post an article</h1>
      <Hamburgermenu />
      <BackArrow />
      <div className="size-full  flex items-center justify-center">
        <form onSubmit={(e) => postArticle(e)} className="flex flex-col gap-5 justify-center items-center w-[280px]">
          <input
            ref={fileInputRef}
            name="image"
            type="file"
            accept="image/*"
            onChange={handleFileInputChange}
            hidden
          />
          <div
            className="h-[164px] w-[255px] bg-[#D9D9D9] rounded-xl flex justify-center items-center"
            onClick={() => fileInputRef.current?.click()}
          >
            {imageUrl
              ? <img src={imageUrl} className="size-full object-contain rounded-xl" />
              : <FaImage className="text-9xl" />
            }
          </div>
          <input
            type="text"
            name="title"
            placeholder="Title"
            className='rounded-xl bg-lightGreen p-2 text-black placeholder-inputs w-full'
          />
          <textarea
            placeholder='Description'
            name="description"
            className="resize-none h-[284px] rounded-xl bg-lightGreen p-2 text-black placeholder-inputs w-full"
          />
          {showError &&
            <div className=" bg-lightGreen text-center rounded-xl p-3">
              Please, fill all the fields before submiting
            </div>
          }
          <SubmitButton pendingText="posting...">
            Submit article
          </SubmitButton>
        </form>
      </div>
    </div>
  )
}

function getFileExtension(filename: string) {
  return filename.slice((filename.lastIndexOf(".") - 1 >>> 0) + 2);
}