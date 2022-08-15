import React from 'react';
import Link from 'next/link';
import { useState } from 'react';



const Navbar = () => {


    const [isOpen, setIsOpen] = useState(false);

    const handleClick = event => {
        setIsOpen(current => !current);
    }

    return (

        <>
            <div className={isOpen ? 'menu-navigation-media' : 'media-navbar'}>
                <div className='menu-navigation-x'>
                    <img className='close-bw' src='/icons/close-b.png'  onClick={handleClick}/>
                </div>
                <div className='menu-navigation-links'>
                    <Link href='/play'>
                        <a>
                            Juega
                        </a>
                    </Link>
                    <Link href='/profile'>
                        <a>
                            Perfil
                        </a>
                    </Link>
                   <Link href='/deposit'>
                        <a>
                            Deposito
                        </a>
                   </Link>
                    <Link href='/withdraw'>
                        <a>
                            Retiro
                        </a>
                    </Link>
                    
                    <Link href='/play'>
                        <a>
                            Soporte
                        </a> 
                    </Link>
                          
                    <Link href='/play'>
                        <a>
                            Tutorial
                        </a> 
                    </Link>   
                </div>
                <hr className='nav-divider'></hr>
                <div className='menu-navigation-btn'>
                    <a>
                                    Ingresar
                    </a>
                    <a>
                                    Registrarse 
                    </a>
                </div>     
            </div>
      
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
                
                     <a onClick={handleClick}>
                        <img src='/icons/menu-g.png' alt='menu'/>
                    </a>
            
            </div>
        </div>
            


            <style jsx>
            {`

            .media-navbar {
                display: none;
            }
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
            .menu-navigation-media {
                display: none;
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
                
                .menu-navigation-x{
                    position: absolute;
                    top: 0;
                    right: 0;
                    padding:2rem 1.5rem;
                }

                .close-bw {
                    transition: all 0.3s ease-in-out;
                }

                .menu-navigation-x:hover .close-bw {
                    filter: invert(99%) sepia(2%) saturate(225%) hue-rotate(118deg) brightness(115%) contrast(100%);
                    cursor: pointer;
                }

                .menu-navigation-media {
                    position: absolute;
                    height: 93%;
                    width: 89%;
                    background-color: #B6FF40;
                    margin: 30px 30px;
                    z-index: 9;
                    border-radius:1rem;    
                    display:block; 
                    padding-top: 80px;
                }
                .nav-divider {
                    border: 1px solid #98ea13;
                    margin: 0 32px;
                }
                .menu-navigation-links {
                    display:flex;
                    flex-direction:column;
                }
              a {
                    color: #081325;
                    font-size: 1rem;
                    line-height: 1.75rem;
                    padding: 1.4rem 2rem;
                    font-family: 'Roboto Mono', monospace;
                    letter-spacing: -0.4px;
                        
                }

                .menu-navigation-media a:hover {
                    background-color: #c8f97a;
                }

                .menu-navigation-btn {
                    position: absolute;
                    bottom: 0;
                    padding: 1rem 2rem;
                    width: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: space-around;
                }

                .menu-navigation-btn a {
                  border-radius: 1rem;
                }

                .menu-navigation-btn a:hover {
                    background-color: #ebfbd1;
                }
            }          
        `}
            </style>
        </>
    );
}

export default Navbar;
