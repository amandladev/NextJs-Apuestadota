import React from 'react';
import Link from 'next/link';
import Leftbar from '../components/leftBar/Leftbar';
import Navbar from '../components/navbar/navbar';
import Solo from '../components/solo/solo';

const Play = () => {
    return (
        <>
                <div className='mode-play'>
                    <Navbar />

                    <div className='main--1'>
                        <Leftbar/>
                        <div className='interface'>
                            <div className='modes-container'>
                                <Link href={'/play'}>
                                    <div className='mode-test mode-active item-01' id='item01'>
                                        <h4 className="subtitle-active">RANKED INDIVIDUAL</h4>
                                    </div>
                                </Link>
                                <Link href={'/party'}>
                                <div className="mode-test mode-unactive  item-02" id='item02'>     
                                    <h4 >MODO 5 VS 5</h4>                 
                                </div> 
                                </Link>
                                <Link href={'/tournament'}> 
                                <div className="mode-test mode-unactive  item-03" id='item03'>         
                                    <h4>TORNEO RANKED</h4>          
                                </div>
                                </Link>
                            </div>
                            <Solo active1={true} active2={false} active3={false}/>
                        </div>
                        
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
                    .interface {
                        overflow: hidden;
                        
                    }
                `}
                </style>
        </>
    );
}

export default Play;
