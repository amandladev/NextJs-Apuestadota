import Link from 'next/link';
import React from 'react';
import { useState, useEffect } from 'react';

const ModesContainer = (active1 = true, active2 = false, active3 = false) => {

    

    const [a1, setA1] = useState(true);
    const [a2, setA2] = useState(false);
   const [a3, setA3] = useState(false);

   useEffect(() => {
    setA1(active1)
    setA2(active2)
    setA3(active3)
    
   }, [active1, active2, active3]);
    // if(typeof window !== 'undefined') { 

    // var item01 = document.getElementById('item01');
    // var item02 = document.getElementById('item02');
    // var item03 = document.getElementById('item03');
    // var item01h4 = document.getElementById('item01-h4');
    // var item02h4 = document.getElementById('item02-h4');
    // var item03h4 = document.getElementById('item03-h4');

    // }
    // function item01Click() {
    //     item01.classList.add('mode-active');
    //     item02.classList.remove('mode-active');
    //     item03.classList.remove('mode-active');

    //     item02.classList.add('mode-unactive');
    //     item03.classList.add('mode-unactive');


    //     item01h4.classList.add('subtitle-active');  
    //     item02h4.classList.remove('subtitle-active');  
    //     item03h4.classList.remove('subtitle-active');  
    // }

    // function item02Click() {
    //     item02.classList.add('mode-active');
    //     item01.classList.remove('mode-active');
    //     item03.classList.remove('mode-active');

    //     item01.classList.add('mode-unactive');
    //     item03.classList.add('mode-unactive');


    //     item02h4.classList.add('subtitle-active');  
    //     item01h4.classList.remove('subtitle-active');  
    //     item03h4.classList.remove('subtitle-active');  
    // }

    // function item03Click() {
    //     item03.classList.add('mode-active');
    //         item02.classList.remove('mode-active');
    //         item01.classList.remove('mode-active');
    
    //         item02.classList.add('mode-unactive');
    //         item01.classList.add('mode-unactive');
    
    
    //         item03h4.classList.add('subtitle-active');  
    //         item02h4.classList.remove('subtitle-active');  
    //         item01h4.classList.remove('subtitle-active');  
    // }

    // item01.addEventListener('click', () => {
    //     item01.classList.add('mode-active');
    //     item02.classList.remove('mode-active');
    //     item03.classList.remove('mode-active');

    //     item02.classList.add('mode-unactive');
    //     item03.classList.add('mode-unactive');


    //     item01h4.classList.add('subtitle-active');  
    //     item02h4.classList.remove('subtitle-active');  
    //     item03h4.classList.remove('subtitle-active');  
    // })

    // item02.addEventListener('click', () => {
    //     item02.classList.add('mode-active');
    //     item01.classList.remove('mode-active');
    //     item03.classList.remove('mode-active');

    //     item01.classList.add('mode-unactive');
    //     item03.classList.add('mode-unactive');


    //     item02h4.classList.add('subtitle-active');  
    //     item01h4.classList.remove('subtitle-active');  
    //     item03h4.classList.remove('subtitle-active');  
    // })

    // item03.addEventListener('click', () => {
    //     item03.classList.add('mode-active');
    //     item02.classList.remove('mode-active');
    //     item01.classList.remove('mode-active');

    //     item02.classList.add('mode-unactive');
    //     item01.classList.add('mode-unactive');


    //     item03h4.classList.add('subtitle-active');  
    //     item02h4.classList.remove('subtitle-active');  
    //     item01h4.classList.remove('subtitle-active');  
    // })
    return (
        <div className="modes-container">   
       
            <Link href={'/play'}>
            {
                a1 ? 
                <div className='mode-test mode-active item-01' id='item01'>
                    <h4 className="subtitle-active" id='item01-h4'>SOLO RANKED</h4>
                </div>
                :
                <div className='mode-test mode-unactive item-01' id='item01'>
                    <h4 id='item01-h4'>SOLO RANKED</h4>
                </div>
            }

            </Link> 
            <Link href={'/party'}>
            {
                a2 ?
                <div className="mode-test mode-unactive  item-02" id='item02'>
                    <h4 className="subtitle-active" id='item02-h4'>SOLO 5 VS 5</h4>                
                </div> 
                :
                <div className="mode-test mode-active  item-02" id='item02'>     
                    <h4 id='item02-h4'>SOLO 5 VS 5</h4>                 
                </div> 
            }
    
            </Link> 
            <Link href={'/tournament'}>  
            {
                a3 ?
                <div className='mode-test mode-active  item-03' id='item03'>        
                    <h4 className="subtitle-active" id='item03-h4'>TORNEO RANKED</h4>             
                </div>
                :
                <div className="mode-test mode-unactive  item-03" id='item03'>         
                    <h4 id='item03-h4'>TORNEO RANKED</h4>          
                </div>
            }
            </Link> 

            <style jsx>
            {`
            .modes-container {
            width:100%;
            display: flex;
            flex-direction: row;
            justify-content: center;
            margin-top: 2rem;
            margin-bottom: 1rem;
        }


        .mode-test{
            position: relative;
            display: flex;
            align-items: center;
            padding: 1em 4em 1em 4em;
            border-radius: 3px;
            
        }


        .mode-test h4 {
            font-family: 'Roboto Mono', monospace;
            font-size: 18px;
        }

        .modes-container .mode-item { 
            /* box-shadow: -25px 50px 40px rgba(0, 0, 0, 0.25);
            backdrop-filter: blur(50px); */
            padding: 2em 1em 2em 1em;
            border-radius: 20px;
            /* height: 150px; */
        }

        .mode-active {
            background: #B6FF40;
            
        }
        .mode-unactive {
            cursor: pointer;
        }

        .mode-unactive h4 {
            color: #999;
        }
        .mode-unactive:hover {
            box-shadow: 0 0 1px 1px #b6ff40;
            cursor: pointer;
        }


        .mode-item {
            position: relative;
            width: 220px;
            height: 125px;
            display: flex;
            align-items: center;
        }

        .modes-container .mode-item h4 {
            color: #fff;
            font-family: 'Roboto Mono', monospace;
            font-size: 18px;
        }

        .subtitle-active {
            color: #0b0f17!important;
        }
            `}</style>
        </div>
    );
}

export default ModesContainer;
