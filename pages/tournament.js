import React from 'react';
import Link from 'next/link';
import Navbar from '../components/Navbar/navbar';
import Leftbar from '../components/LeftBar/Leftbar';    
import ModesContainer from '../components/modesContainer/ModesContainer';
import Tourn from '../components/tourn/tourn';

const Tournament = () => {
    return (
        
             <div className='mode-play'>
            <Navbar />

            <div className='main--1'>
                <Leftbar/>
                <div className='interface'>
                    <div className='modes-container'>
                        <Link href={'/play'}>
                            <div className='mode-test mode-unactive item-01' id='item01'>
                                <h4>RANKED INDIVIDUAL</h4>
                            </div>
                        </Link>
                        <Link href={'/party'}>
                            <div className="mode-test mode-unactive  item-02" id='item02'>     
                                <h4>MODO 5 VS 5</h4>                 
                            </div> 
                        </Link>
                        <Link href={'/tournament'}> 
                            <div className="mode-test mode-active  item-03" id='item03'>         
                                <h4 className="subtitle-active">TORNEO RANKED</h4>          
                            </div>
                        </Link>
                    </div>
                    <Tourn/>
                </div>
                
            </div>
            
        

        <style jsx>
        {`
        
            .mode-play {
                height: 100vh;
                overflow-x: hidden;
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

export default Tournament;