import React from 'react';

import { Blocks } from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className="w-full lg:w-1/4 2xl:w-1/4 mx-auto mt-96 lg:mt-96 ">
            <div  className="w-1/4 mx-auto">
            <Blocks
                visible={true}
                height="80"
                width="80"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
                color="#4fa94d"
               
            />
            </div>
        </div>
    );
};

export default Loader;