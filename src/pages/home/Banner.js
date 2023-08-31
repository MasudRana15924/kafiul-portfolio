import React from 'react';
import img from '../../assets/banner.jpg';
import { BsGithub, BsLinkedin, BsInstagram } from 'react-icons/bs';
import { BiPhoneCall} from 'react-icons/bi';

const Banner = () => {

    return (
        <div className="mx-auto lg:w-3/4 2xl:w-2/4 border border-white  mt-12 lg:mt-24" >

            <img src={img} alt="" className="w-full banner-image h-96 border mt-12" />
            <div>
                <p className="text-center  text-4xl lg:text-8xl font-thin mt-8">MD. KAFIUL BIN ISLAM</p>
                <p className="w-3/4 mx-auto text-start text-md font-thin mt-4">Looking for a dynamic and progressive software firm where I can start my career as a
                    Software Quality Assurance Engineer and can contribute my analytical skills and knowledge
                    to bring out the maximum output.</p>
            </div>
            <div className="w-1/4 mx-auto flex justify-between mt-8">
                <a href="https://www.linkedin.com/in/md-kafiul-bin-islam-826954241/" target="_blank" rel="noopener noreferrer" >
                    <BsLinkedin className=" text-xl text-blue-400"></BsLinkedin>
                </a>
                <a href="https://github.com/kafiul916" target="_blank" rel="noopener noreferrer" >
                    <BsGithub className=" text-xl text-gray-900"></BsGithub>
                </a>
                <a href="" target="_blank" rel="noopener noreferrer" >
                    <BsInstagram className="text-xl text-gray-900"></BsInstagram>
                </a>
            </div>
            <div className="pulse">
              
                <BiPhoneCall className=" text-4xl  ml-4 mt-4  text-white"></BiPhoneCall>
                             

            </div>

        </div>
    );
};

export default Banner;