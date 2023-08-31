import React from 'react';
import img from '../../assets/banner.png';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
const Banner = () => {

    return (
        <div className="mx-auto lg:w-3/4 2xl:w-2/4 border border-white" >

            <img src={img} alt="" className="w-full banner-image h-96 border mt-12" />
            <div>
                <p className="text-center text-8xl font-thin mt-8">MD. KAFIUL BIN ISLAM</p>
                <p className="w-3/4 mx-auto text-start text-md font-thin mt-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque reprehenderit dolorum, voluptates animi, dicta quisquam fuga quia porro ex nesciunt, voluptatum obcaecati veniam accusantium expedita alias repellat itaque unde placeat.</p>
            </div>
            <div className="w-1/4 mx-auto flex justify-between mt-8">
            <a href="" target="_blank" rel="noopener noreferrer" >
                    <BsLinkedin className=" text-xl text-blue-400"></BsLinkedin>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" >
                    <BsGithub className=" text-xl text-gray-900"></BsGithub>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" >
                    <BsInstagram className="text-xl text-gray-900"></BsInstagram>
                </a>
            </div>

        </div>
    );
};

export default Banner;