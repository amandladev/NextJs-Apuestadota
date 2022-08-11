import React from 'react';
import Dep from '../components/deposit/dep';
import Leftbar from '../components/LeftBar/Leftbar';

import Navbar from '../components/Navbar/navbar';

const Deposit = () => {
    return (
        <div className='mode-play'>
            <Navbar />

            <div className='main--1'>
                <Leftbar/>
                <div className='interface'>
                    <Dep/>
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

export default Deposit;
