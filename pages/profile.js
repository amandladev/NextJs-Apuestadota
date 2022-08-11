import React from 'react';
import Navbar from '../components/Navbar/navbar';
import Leftbar from '../components/LeftBar/Leftbar';    
import ModesContainer from '../components/modesContainer/ModesContainer';
import ProfileSettings from '../components/profileSettings/ProfileSettings';

const Profile = () => {
    return (
        <div className='mode-play'>
            <Navbar />

            <div className='main--1'>
                <Leftbar/>
                <div className='interface'>
                  
                    <ProfileSettings/>
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

export default Profile;