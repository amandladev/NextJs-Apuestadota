import React from 'react';
import Link from 'next/link';
import Image from 'next/image';


const Navbar = () => {
    return (
        <div className='navbar'>
            {/* <Image src={'logo2.png'} alt='logo' width={211} height={30} /> */}
            <Link href={'/'}>
                <a>
                    <img src='/apuesta-logo.png' alt='logo' className='logo'/>
                </a>
            </Link>
            
            {/* <div className="user-container">   
                <div className="profilepicture">
                   
                    <img src='/perfilphoto.jpg' alt='Foto de perfl'/>
                </div>
                <h4 className="user-name">nombredeusuario</h4>
            </div> */}
            <div>
                <Link href={'/login'}>
                     <a>
                        <button className="btn outline">Ingrrresar</button>
                    </a>
                </Link>
                    
                    
                    <button className="btn btn-md">Registrarse</button>
            </div>

            <style jsx>
            {`
            .logo {
                    height: 30px;
                }
            
            .user-container {
            display: flex;
            align-items: center;
            gap: 10px;
            }
            .profilepicture {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                border: 3px solid #2C62FE;
                margin: 0 auto;
              
                overflow: hidden;
            }
            .profilepicture img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .user-name {
                color: #fff;
                font-family: 'Poppins';
                font-weight: 300;
                font-size: 15px;
            }
        `}
            </style>
        </div>
    );
}

export default Navbar;
