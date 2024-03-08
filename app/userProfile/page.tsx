import React from 'react';
import BackArrow from "@/components/backArrow";
import Hamburgermenu from '@/components/hamburgermenu';
import { FiUser } from "react-icons/fi";
import LikeButton from '@/components/likeButton';
import News from "@/components/News"


const UserProfile = () => {
    return (
        <div>
            <BackArrow />
            <Hamburgermenu />
            <h1 className='mt-20 mb-5 text-center'>User Profile</h1>
            <div className='justify-center flex text-center gap-8'>
                <div className='w-[148px] h-[148px] bg-notWhite rounded-md border-2 border-darkGreen  justify-center flex items-center'><FiUser className='w-[95px] h-[105px]'/>
            </div>
                <div className='w-[148px] h-[148px] text-xs pt-5 bg-notWhite rounded-md border-2 border-darkGreen '>Renewable energies</div>
            </div>
            <div className="border-2 border-darkGreen mt-8 rounded-md text-center w-[333px] h-[160px] overflow-scroll">
                <div className="m-4 font-poppins">We are a family of five with one dog. We are learning to renew the energy and trying to use the renewable energy as much as we can.</div>
                 </div>
        <News/>
                 </div>
    );
};

export default UserProfile;
