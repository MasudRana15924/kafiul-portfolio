import React from 'react';
import img from '../../assets/banner.png';
import { GiCheckMark} from 'react-icons/gi';
import { BsSend,BsDownload} from 'react-icons/bs';


const About = () => {
   
    return (
        <div className="mx-auto lg:w-3/4 2xl:w-2/4 border border-white mt-12 lg:mt-32 " >
            <div className="lg:mt-4">
                <div className="lg:w-full lg:pl-5 " >
                    <div className="">
                        <p className="text-center text-4xl lg:text-5xl font-bold  pl-2 lg:pl-0">ABOUT ME</p>

                    </div>
                </div>
            </div>
            <div className="lg:flex lg:justify-between gap-4 mt-20">
                <div className="w-full pl-2 lg:pl-0 ">

                    <div>
                        <p className="text-start font-semibold text-4xl">OBJECTIVE</p>
                        <p className="text-start text-sm w-full mt-8">I am an Automation Software QA Tester with over 9 years of Information Technology related experience. I have been involved in developing and testing web and mobile applications both manual and automation, digital multimedia & marketing, graphic design, and project management. I maintain a passion for technology and helping others get the most out of technology by using the appropriate tools, techniques, and strategies to ensure clients satisfaction.</p>
                    </div>
                    <div className="mt-12">
                        <p className="text-start font-semibold text-4xl">WHAT I DO ?</p>
                        <p className="text-start text-sm w-full mt-8">I am an Automation Software QA Tester with over 9 years of Information Technology related experience. I have been involved in developing and testing web and mobile applications both manual and automation, digital multimedia & marketing, graphic design, and project management. I maintain a passion for technology and helping others get the most out of technology by using the appropriate tools, techniques, and strategies to ensure clients satisfaction.</p>
                    </div>
                    <div className=" lg:flex justify-between mt-12">
                        <div>
                            <p className="flex gap-4"><GiCheckMark className="mt-1 font-bold text-green-600"></GiCheckMark> Engineering LeadershipAutomated</p>
                            <p className="flex gap-4"><GiCheckMark className="mt-1 font-bold text-green-600"></GiCheckMark> Manual Software Testing / QA</p>
                            <p className="flex gap-4"><GiCheckMark className="mt-1 font-bold text-green-600"></GiCheckMark> Web Design / Consulting</p>
                        </div>
                        <div>
                        <p className="flex gap-4"><GiCheckMark className="mt-1 font-bold text-green-600"></GiCheckMark> Engineering LeadershipAutomated</p>
                            <p className="flex gap-4"><GiCheckMark className="mt-1 font-bold text-green-600"></GiCheckMark> Manual Software Testing / QA</p>
                            <p className="flex gap-4"><GiCheckMark className="mt-1 font-bold text-green-600"></GiCheckMark> Web Design / Consulting</p>
                        </div>
                    </div>
                    <div className="lg:flex gap-4 mt-8">
                        <button className="mt-4 h-12 bg-teal-400 w-full text-md text-white  border rounded-lg flex items-center place-content-center gap-4">
                           <BsSend ></BsSend> SEND ME MESSAGE</button>
                        <button className="mt-4 h-12 bg-cyan-300 w-full text-md text-white  border rounded-lg flex items-center place-content-center gap-4"><BsDownload></BsDownload> DOWNLOAD MY RESUME</button>
                    </div>
                </div>
                <div className="w-2/4 mx-auto border">
                    <img src={img} alt="" className="w-full " />
                    <div className="mt-12">
                    <p className="text-start ml-4" > <span className="text-xl font-semibold">Name : </span> 
                        Md. Kafiul Bin Islam</p>
                    <p className="text-start ml-4"> <span className="text-xl font-semibold">Phone : </span>         +88012345678912</p>
                    <p className="text-start ml-4"> <span className="text-xl font-semibold">Location : </span>
                     Daffodil Smart City </p>
                     <hr className="mt-4"/>
                     <a href="http://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-start text-green-600">LinkedIn</a>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;