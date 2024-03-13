import React from 'react';
import BackArrow from "@/components/backArrow";
import Hamburgermenu from '@/components/hamburgermenu';
import { FiUser } from "react-icons/fi";
import News from "@/components/News";
import { getLoggedInUser, getUser } from '@/services/users.service';
import { type UUID } from 'crypto';
import Link from 'next/link';

export const revalidate = 0;

const UserProfile = async ({ params }: { params: { userId: UUID } }) => {
  const user = await getUser(params.userId);
  const loggedInUser = await getLoggedInUser();

  let isPersonalAccount = false;

  if (loggedInUser && user.id === loggedInUser?.id) isPersonalAccount = true;

  return (
    <div>
      <BackArrow />
      <Hamburgermenu userId={params.userId} />
      <h1 className='mt-16 mb-5 text-center'>{user.name}</h1>
      <div className='justify-center flex text-center gap-8'>
        <div className='w-[148px] h-[148px] bg-notWhite rounded-md border-2 border-darkGreen  justify-center flex items-center'>
          <FiUser className='w-[95px] h-[105px]' />
        </div>
        {isPersonalAccount
          ? (
            <Link
              href='/calculatePage'
              className='w-[148px] h-[148px] text-xs pt-5 bg-notWhite rounded-md border-2 border-darkGreen flex flex-col relative select-none'
            >
              <div>Renewable energies</div>
              <div className='absolute inset-0 mt-3 flex justify-center items-center text-[24px]'>{user.e_percentage}%</div>
            </Link>)
          : (
            <div className='w-[148px] h-[148px] text-xs pt-5 bg-notWhite rounded-md border-2 border-darkGreen flex flex-col relative select-none'>
              <div>Renewable energies</div>
              <div className='absolute inset-0 mt-3 flex justify-center items-center text-[24px]'>{user.e_percentage}%</div>
            </div>)
        }
      </div>
      <div className="border-2 border-darkGreen mt-8 rounded-md text-center w-[333px] h-[160px] overflow-y-scroll">
        <div className="m-4">
          {user.description ?? 'No description'}
        </div>
      </div>
      <News />
    </div>
  );
};

export default UserProfile;
