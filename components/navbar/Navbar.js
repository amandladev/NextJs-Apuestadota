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
            <div className='log-buttons'>
                <Link href={'/login'}>
                     <a>
                        <button className="btn outline">Ingresar</button>
                    </a>
                </Link>
                    
                    
                    <button className="btn btn-md">Registrarse</button>
            </div>
            <div className='menu-button'>
                
                     <a>
                        <img src='/icons/menu-g.png' alt='menu'/>
                    </a>
            
            </div>

            <div className='menu-navigation-media'>
                <a>
                    Juega
                </a>
                <a>
                    Perfil
                </a>
                <a>
                    Deposito
                </a>
                <a>
                    Retiro
                </a>

                <a>
                    Soporte
                </a>       

                <a>
                    Tutorial
                </a>   

                <div>
                    <a>
                        Ingresar
                    </a>
                    <a>
                        Registrarse 
                    </a>
                </div>     
            </div>


            <style jsx>
            {`
            .menu-button {
                display: none;
            }
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

            @media (max-width: 768px) {
                .log-buttons {
                    display: none; 
                }
                .logo {
                    height: 25px;
                }
                .navbar {
                    padding-top: 16px;
                    padding-bottom: 16px;
                }
                .menu-button {
                    display: block;
                }

                .menu-navigation-media {
                    position: absolute;
                    height: 100vh;
                    background-color: #f12f2f;
                    transform: translateY(-20px);
                }
            }          
        `}
            </style>
        </div>
    );
}

export default Navbar;
