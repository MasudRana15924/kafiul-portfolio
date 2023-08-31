import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { BsDiamond } from 'react-icons/bs';

const Touch = () => {
    return (
        <div className="mt-24 lg:mb-28">
            <div className="lg:w-2/4 mx-auto ">
                <p className="text-5xl text-gray-900 font-bold">GET IN TOUCH</p>
                <div className="w-1/4 mx-auto flex mt-4 gap-4">
                    <AiOutlineLine className="text-center lg:ml-20"></AiOutlineLine>
                    <BsDiamond></BsDiamond>
                    <AiOutlineLine className="text-center "></AiOutlineLine>
                </div>
            </div>


            <button className="mt-8 h-10 w-36 text-white font-semibold  bg-emerald-400 border rounded-lg">SEND MESSAGE</button>
        </div>
    );
};

export default Touch;