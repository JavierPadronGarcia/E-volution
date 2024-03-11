'use client';

import { useRouter } from 'next/navigation';
import React from 'react'
import { FaArrowLeft } from "react-icons/fa";

const BackArrow = () => {

  const router = useRouter();

  return (
    <div className='absolute top-10 left-10'>
      <FaArrowLeft
        className='w-[22px] h-[22px] cursor-pointer hover:text-darkGreen transition-colors'
        onClick={() => router.back()}
      />
    </div>
  )
}

export default BackArrow;