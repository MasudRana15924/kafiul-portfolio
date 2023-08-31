import React from 'react';
import diu from '../../assets/diu.png';
import college from '../../assets/college.png';
import school from '../../assets/school.png';
const Education = () => {
    return (
        <div className="lg:w-3/4 mx-auto 2xl:w-2/4 border border-white" >
            <p className="text-center text-gray-900 text-xl lg:text-7xl ml-4 lg:ml-0 font-semibold mt-24 lg:mt-36">RESUME </p>
            <section class="timeline-section">
            <p className="text-xl font-semibold">EDUCATION</p>
                <div class="timeline-items ">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2016-2023</div>
                        <div class="timeline-content  border ">
                            <h3>Bachelor in CSE</h3>
                            <div className="flex lg:ml-20">
                                <img src={diu} alt="" className="h-12 w-12" />
                                <p className="text-start mt-4 ml-2">Daffodil International University</p>
                            </div>

                            <p className="mt-2">Birulia,Ashulia,Savar,Dhaka</p>
                        </div>
                    </div>
                </div>
            </section>
            <section class="timeline-section ">
                <p className="text-2xl font-semibold">EXPERIENCE</p>
                <div class="timeline-items">
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        {/* <div class="timeline-date">2023</div>
                        <div class="timeline-content  border-l-2 border-b-2 border-red-500">
                            <h3>Bachelor in CSE</h3>
                            <div className="flex lg:ml-40">
                            <img src={diu} alt="" className="h-12 w-12"/>
                           <p className="text-start mt-4 ml-2">Daffodil International University</p>
                           </div>
                         
                            <p className="mt-2">Birulia,Ashulia,Savar,Dhaka</p>
                        </div> */}
                    </div>
                    <div class="timeline-item">
                        <div class="timeline-dot"></div>
                        <div class="timeline-date text-start">2020-Present</div>
                        <div class="timeline-content border">
                            <h3 className="text-start">Medical Officer</h3>
                            <div className="flex ">
                           <p className="text-start">Daffodil Multi Decipline Hostpital</p>
                           </div>
                            <p className="text-start ">Daffodil Smart City  </p>
                        </div>
                    </div>
                   
                    {/* <div class="timeline-item">
                    <p className="text-2xl font-semibold">EXPERIENCE</p>
                        <div class="timeline-dot"></div>
                        <div class="timeline-date">2013</div>
                        <div class="timeline-content border-l-2 border-b-2 border-blue-500">
                            <h3>SSC in Science </h3>
                            <div className="flex lg:ml-36">
                            <img src={school} alt="" className="h-12 w-12 border rounded-full"/>
                           <p className="text-start mt-4 ml-2">Nabarun Public School </p>
                           </div>
                            <p>Sherpur Sadar</p>
                        </div>
                    </div> */}
                   
                </div>
            </section>

        </div>
    );
};

export default Education;