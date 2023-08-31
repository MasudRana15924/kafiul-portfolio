import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';
import { BsDiamond } from 'react-icons/bs';
import work from '../../assets/work1.jpg';
import workTwo from '../../assets/work2.jpg';
import workThree from '../../assets/work3.jpg';
import workFour from '../../assets/work4.jpg';
import workFive from '../../assets/work5.jpg';
const Works = () => {
    return (
        <div className="mx-auto lg:w-3/4 2xl:w-2/4 border border-white mt-12 lg:mt-32 mb-24">
            <div className="lg:mt-4">
                <div className="lg:w-full lg:pl-5 " >
                    <div className="">
                        <p className="text-center text-4xl lg:text-7xl font-bold  pl-2 lg:pl-0">MY WORKS</p>

                    </div>
                    <div className="w-1/4 mx-auto flex mt-4 gap-4">
                    <AiOutlineLine className="text-center lg:ml-20"></AiOutlineLine>
                    <BsDiamond></BsDiamond>
                    <AiOutlineLine className="text-center "></AiOutlineLine>
                </div>
                </div>
                <div className=" w-2/4 lg:w-1/4 mx-auto flex gap-4 mt-8">
                    <button className="bg-emerald-400 h-8 w-16 text-white border border-white rounded-lg">All </button>
                    <button className="bg-emerald-400 h-8 w-16 text-white border border-white rounded-lg">Web </button>
                    <button className="bg-emerald-400 h-8 w-16 text-white border border-white rounded-lg">Testing</button>
                </div>
            </div>
            <div className="lg:flex justify-between gap-4 mt-12">
                <img src={work} alt=""  className="w-full lg:w-76 h-36 border"/>
                <img src={workTwo} alt=""  className="w-full lg:w-72 h-36 border"/>
                <img src={workThree} alt=""  className="w-full lg:w-72 h-36 border"/>
            </div>
            <div className="flex  gap-4 mt-12">
                <img src={workFour} alt=""  className="w-80 h-36 border"/>
                <img src={workFive} alt=""  className="w-72 h-36 border"/>
            </div>

        </div>
    );
};

export default Works;