import React from 'react';
import { BsTrophy} from 'react-icons/bs';
import { BiLike} from 'react-icons/bi';
import { CiUser} from 'react-icons/ci';
import { AiTwotoneExperiment} from 'react-icons/ai';
const Stats = () => {


    return (
        <div className="stats">
          <div className="lg:flex justify-between lg:w-2/4 mx-auto lg:pt-44">
                <div>
                    <AiTwotoneExperiment className="text-6xl text-white ml-40 lg:ml-16"></AiTwotoneExperiment>
                    <p className="text-6xl text-white mt-4">5  </p>
                    <p className="text-2xl text-white mt-2">Yers of Experience </p>
                </div>
                <div>
                    <BiLike className="text-6xl text-white ml-40 lg:ml-10 mt-8 lg:mt-0"></BiLike>
                    <p className="text-6xl text-white mt-4">32 </p>
                    <p className="text-2xl text-white mt-2">Projects Done</p>
                </div>
                <div>
                    <CiUser className="text-6xl text-white mt-8 lg:mt-0 ml-40 lg:ml-10"></CiUser>
                    <p className="text-6xl text-white mt-4">20 </p>
                    <p className="text-2xl text-white mt-2">Happy Clients</p>
                </div>
                <div className="hidden lg:block">
                    <BsTrophy className="text-6xl text-white ml-8 hidden lg:block"></BsTrophy>
                    <p className="text-6xl text-white mt-4 hidden lg:block">2 </p>
                    <p className="text-2xl text-white mt-2 hidden lg:block">Awards Win</p>
                </div>
          </div>
        </div>
    );
};

export default Stats;