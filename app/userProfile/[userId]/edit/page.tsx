'use client';
import { SubmitButton } from "@/app/login/submit-button";
import BackArrow from "@/components/backArrow";
import Hamburgermenu from "@/components/hamburgermenu";
import { AddImage } from "@/services/images.service";
import { User } from "@/app/types/types";
import { updateUser, getUser } from "@/services/users.service";
import { type UUID, createHash } from "crypto";
import { useRouter } from "next/navigation";
import { FormEvent, useRef, useState, useEffect } from "react";
import { FaImage } from "react-icons/fa";
import { ImageBucketURL } from "@/app/constants/supabaseConstants";

export const revalidate = 0;

export default function UpdateUser({ params }: { params: { userId: UUID } }) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [imageUrl, setImageUrl] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  const UpdateUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const data: { [key: string]: FormDataEntryValue } = Object.fromEntries(formData.entries());
    const image = data.image as File;

    const uuid = createHash('sha1').update(Date.now().toString()).digest('hex');
    const fileExtension = getFileExtension(image.name);
    const newFileName = `${uuid}.${fileExtension}`;
    var blob = image.slice(0, image.size, image.type);

    const newFile = new File([blob], newFileName, { type: image.type });

    const newImageData = await AddImage(newFile, 'user');
    if (newImageData) {
      const newUser: User = {
        name: data.name as string,
        description: data.description as string,
        filename: newImageData.path,
      }
      const user = await updateUser(params.userId, newUser);
      if (user) {
        console.log("Successfully updated user!");
        router.push('/news');
      }
    }
  }

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const userData = await getUser(params.userId);
        setUser(userData);

        if (userData.filename) {
          setImageUrl(ImageBucketURL + `/${userData.filename}`);
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };
    fetchUserData();
  }, [params.userId]);

  const handleFileInputChange = () => {
    const selectedFile = fileInputRef.current?.files?.[0];
    if (selectedFile) {
      const url = URL.createObjectURL(selectedFile);
      setImageUrl(url);
    }
  };

  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <h1 className="mt-[93px]">Editing your profile</h1>
      <Hamburgermenu userId={params.userId} />
      <BackArrow />
      <div className="size-full  flex items-center justify-center">
        <form onSubmit={(e) => UpdateUser(e)} className="flex flex-col gap-5 justify-center items-center w-[280px]">
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
            name="name"
            placeholder="Name"
            className='rounded-xl bg-lightGreen p-2 text-black placeholder-inputs w-full'
            defaultValue={user?.name || ""}
          />
          <textarea
            placeholder='Description'
            name="description"
            className="resize-none h-[284px] rounded-xl bg-lightGreen p-2 text-black placeholder-inputs w-full"
            defaultValue={user?.description || ""}
          />
          <SubmitButton pendingText="updating...">
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