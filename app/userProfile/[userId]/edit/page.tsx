import { SubmitButton } from "@/app/login/submit-button";
import BackArrow from "@/components/backArrow";
import Hamburgermenu from "@/components/hamburgermenu";

export default function EditUserPage() {

  const updateUser = async () => {
    'use server';
  }

  return (
    <div className="w-full h-[100vh] flex flex-col items-center">
      <h1 className="mt-[93px]">Edit user profile</h1>
      <Hamburgermenu />
      <BackArrow />
      <div className="size-full  flex items-center justify-center">
        <form className="flex flex-col gap-5 justify-center items-center w-[280px]">
          <input type="file" hidden />
          <div className="h-[164px] w-[255px] bg-[#D9D9D9] rounded-xl">
          </div>
          <input type="text" placeholder="Name" className={`rounded-xl bg-lightGreen p-2 text-black placeholder-inputs w-full`} />
          <textarea placeholder='Description' className="resize-none h-[284px] rounded-xl bg-lightGreen p-2 text-black placeholder-inputs w-full" />
          <SubmitButton formAction={updateUser} pendingText="updating...">
            Submit update
          </SubmitButton>
        </form>
      </div>
    </div>
  )
}