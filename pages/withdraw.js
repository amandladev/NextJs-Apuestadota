import React from 'react';
import Leftbar from '../components/leftBar/Leftbar';

import Navbar from '../components/navbar/navbar';
import With from '../components/with/with';

const Withdraw = () => {
    return (
        <div className='mode-play'>
            <Navbar />

            <div className='main--1'>
                <Leftbar/>
                <div className='interface'>
                    <With/>
                </div>
                
            </div>
            
        

        <style jsx>
        {`
        
            .mode-play {
                height: 100vh;
                overflow-y: hidden;
            }
            .main--1 {
                display: grid;
                grid-template-columns: 1fr 7fr;
               
            }
        `}
        </style>
        </div>
    );
}

export default Withdraw;
