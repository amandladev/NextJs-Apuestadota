import React from 'react';
import { useState } from 'react';

const ProfileSettings = () => {

    const [record, setRecord] = useState(false);
    const [security, setSecurity] = useState(false);
    const [profile, setProfile] = useState(true);

    const [extra, setExtra] = useState(false);

    const handleClickSecurity = event => {
        setSecurity(true);
        setProfile(false);
        setRecord(false);
        setExtra(false);
    }
    const handleClickRecord = event => {
        setSecurity(false);
        setProfile(false);
        setRecord(true);
        setExtra(false);
       
    }

    const handleClickProfile = event => {
        setProfile(true);
        setSecurity(false);
        setRecord(false);
        setExtra(false);
    }

    const handleClickExtra = event => {
        setProfile(false);
        setSecurity(false);
        setRecord(false);
        setExtra(true);
    }
    return (
        <>
            <div className="profile-container">
                        <div className="profile-intro-i">
                            
                            <div className="profile-intro-img">     
                                <img src="/perfilphoto.jpg" alt="new user" />
                            </div>
                            
                            <h3>nombredeusuario</h3>
                        </div>
                        <div className="profile-earnings">
                            <div className="profile-green-q">
                                <h4>TOTAL EARNINGS <span className="bold-d">$ 120</span></h4>
                            </div>
                        </div>
                    </div>

                    <div className="profile-main">
                        <nav className="tabs-container">
                            <a href="#" onClick={handleClickProfile}>
                                <div className={profile ? "tabs-container-item tab-active" : "tabs-container-item"} id="info-button-g">
                                    <img src="/icons/account-details-outline.png" alt="Informacion" />
                                    <h3 className="tab-h-active">Informacion</h3>
                                </div>
                            </a>
                            <a href="#" onClick={handleClickRecord}>
                                <div className={record ? "tabs-container-item tab-active" : "tabs-container-item"}>
                                    <img src="/icons/cash-multiple.png" alt="Record" />
                                    <h3>Historial</h3>
                                </div>
                            </a>
                            <a href="#" onClick={handleClickExtra}>
                                <div className={extra ? "tabs-container-item tab-active" : "tabs-container-item"}>
                                    <img src="/icons/trophy-outline.png" alt="Torneos" />
                                    <h3>Cuenta</h3>
                                </div>
                            </a>
                            <a href="#" onClick={handleClickSecurity}>
                                <div className={security ? "tabs-container-item tab-active" : "tabs-container-item"} id="info-security-g">
                                    <img src="/icons/security.png" alt="Seguridad" />
                                    <h3>Seguridad</h3>
                                </div>
                            </a>
                        </nav>

                     
                        <div id="profile-info-g" className={profile ? 'd-block' : 'd-none'}>
                        <div className='security-flex-b'>
                                <div className='gc-profile-box'>
                                    <h4 className='gc-profile-title'>General</h4>
                                    <ul className='gc-profile-list'>
                                        <li className='gc-profile-list-item'>
                                            <h6 className='gc-list-title'>Nombre de Usuario</h6>
                                            <p className='gc-list-text'>Sergio1212</p>
                                        </li>
                                        <li className='gc-profile-list-item'>
                                            <h6 className='gc-list-title'>Nombre</h6>
                                            <p className='gc-list-text'>Sergio</p>
                                        </li>
                                        <li className='gc-profile-list-item'>
                                            <h6 className='gc-list-title'>Email</h6>
                                            <p className='gc-list-text'>sreyescurotto@gmail.com</p>
                                        </li>
                                        <li className='gc-profile-list-item'>
                                            <h6 className='gc-list-title'>Documento de Identidad</h6>
                                            <p className='gc-list-text'>12524141</p>
                                        </li>
                                        
                                    </ul>
                                </div>

                                <div className='gc-profile-box'>
                                    <h4 className='gc-profile-title'>Extra</h4>
                                    <ul className='gc-profile-list'>
                                        <li className='gc-profile-list-item'>
                                            <h6 className='gc-list-title'>Fecha de registro</h6>
                                            <p className='gc-list-text'>15/08/2022</p>
                                        </li>
                                        <li className='gc-profile-list-item'>
                                            <h6 className='gc-list-title'>Steam ID</h6>
                                            <p className='gc-list-text'>56465465</p>
                                        </li>
                                        <li className='gc-profile-list-item'>
                                            <h6 className='gc-list-title'>Steam ID 64</h6>
                                            <p className='gc-list-text blue'>76561198383349833</p>
                                        </li>
                                        <li className='gc-profile-list-item'>
                                            <h6 className='gc-list-title'>Documento de Identidad</h6>
                                            <p className='gc-list-text'>12524141</p>
                                        </li>
                                        
                                    </ul>
                                </div>

                            </div>
                        </div>

                        <div className={record ? 'd-block' : 'd-none'}>
                        <div className='history-flex-c'>
                            <h4 className='gc-profile-title'>Solicitud para la retirada de fondos</h4>
                            {/* TABLA EN DESKTOP */}
                            <table>
                                <tr>
                                    <th>
                                        Fecha
                                    </th>
                                    <th>
                                        Importe
                                    </th>
                                    <th>
                                        Comision
                                    </th>
                                    <th>
                                        Estado
                                    </th>
                                    <th>
                                        Medio
                                    </th>
                                </tr>
                                <tr>
                                    <td>    
                                        15/08/2022
                                    </td>
                                    <td>    
                                        $120
                                    </td>   
                                    <td>
                                        __
                                    </td>
                                    <td>
                                        <span className='gc-green-text'>Terminado</span>
                                    </td>
                                    <td>
                                        <span className='gc-green-text'>Visa **2997</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>    
                                        12/08/2022
                                    </td>
                                    <td>    
                                        $10
                                    </td>   
                                    <td>
                                        __
                                    </td>
                                    <td>
                                        <span className='gc-green-text'>Terminado</span>
                                    </td>
                                    <td>
                                        <span className='gc-green-text'>Mastercard **9775</span>
                                    </td>
                                </tr>
                                <tr>
                                    <td>    
                                        10/08/2022
                                    </td>
                                    <td>    
                                        $20
                                    </td>   
                                    <td>
                                        __
                                    </td>
                                    <td>
                                        <span className='gc-green-text'>Terminado</span>
                                    </td>
                                    <td>
                                        <span className='gc-green-text'>Mastercard **9775</span>
                                    </td>
                                </tr>
                            </table>

                            {/* TABLA EN MOBILE */}

                            <table>
                                <tr>
                                    <th>
                                        Fecha
                                    </th>
                                    <th>
                                        Importe / Comision
                                    </th>
                                    <th>
                                        Estado
                                    </th>
                                </tr>
                                <tr>
                                    <td className='mobile-table-td'>
                                        <span>
                                                15/08/2022
                                        </span>
                                        <span>
                                                Mastercard **9775
                                        </span>
                                    </td>
                                    <td className='mobile-table-td'>
                                        <span>
                                            $20
                                        </span>
                                        <span>
                                            __
                                        </span>
                                    </td>
                                    <td className='mobile-table-td'>
                                        <span className='gc-green-text'>
                                            Terminado
                                        </span>
                                    </td>
                                </tr>
                            </table>
                            </div>
                        </div>
                      


                        <div className={extra ? 'd-block' : 'd-none'}>
                            {/* <div className='record-dflex'>
                                <img src='/infoe.jpg'></img>
                            </div> */}
                        </div> 
                     
          

                        <div className={security ? 'd-block' : 'd-none'}>
                            
                            <h4 className="profile-sub-title">Cambiar de contraseña</h4>

                            <div className="profile-password-grid">
                                <div className="profile-password-item">
                                    <div>
                                        <input type="text"  className="profile-password-output" defaultValue={"Contraseña Actual"} />
                                    </div>
                                </div>

                                <div className="profile-password-item">
                                    <div>
                                        <input type="text" className="profile-password-output" defaultValue={"Nueva Contraseña"} />
                                    </div>
                                </div>

                                <div className="profile-password-item">
                                    <div>
                                        <input type="text" className="profile-password-output" defaultValue={"Confirmar Nueva Contraseña"} />
                                    </div>
                                </div>

                                <button className="profile-password-submit"> 
                                    Guardar
                                    
                                </button>
                            </div>
                        </div>
                        
                </div>

                <style jsx>
                {`

                {/* informacion */}

        .security-flex-b {
            display:flex;
            padding: 1.5rem 3rem;
        }

        .gc-profile-box {
            padding: 24px;
            margin: 8px;
            background-image: linear-gradient(to bottom,#161629 32px,rgba(22,22,41,0));
            border: 1px solid transparent;
            border-bottom-width: 0;
            border-image: linear-gradient(to bottom,rgba(255,255,255,.1),rgba(255,255,255,0)) 1;
            flex-basis: 50%;
        }

        .gc-profile-title {
            margin-bottom: 20px;
            font-size: 20px;
            font-weight: 300;
            font-family: 'Poppins', sans-serif;
            text-transform: uppercase;
            color: #fff;
        }


        .gc-profile-list-item {
            display: flex;
            flex-flow: row-reverse nowrap; 
            align-items: center; 
            justify-content: space-between;
            min-height: 48px;
            margin: 0;
            padding: 8px 16px;
            list-style: none;
            color: #fff;
            font-family: 'Poppins', sans-serif;
            background-color: rgba(0,0,0,.05);
            border-bottom: 1px solid rgba(0,0,0,.1);
        }

        .gc-list:not(:first-child) {
            margin-top: 20px;
        }
        .gc-list-item:first-child {
            border-radius: 8px 8px 0 0;
        }
        .gc-list-title {
            margin: 0;
            margin-bottom: 4px;
            font-size: 10px;
            font-weight: 400;
            text-transform: uppercase;
            letter-spacing: 1px;
            opacity: .25;
            color: #fff;
            font-family: 'Roboto Mono', monospace;
        }
        .gc-list-text {
            margin: 0;
            padding-right: 8px;
            font-size: 12px;
            font-weight: 400;
            font-family: 'Poppins', sans-serif;
        }

        .record-dflex {
            width: 100%;
            height: 500px;
            display: flex;
            justify-content: center;
            align-items: center;
        }


                .d-none {
                    display: none;
                }

                .d-block {
                    display: block;
                }

                .profile-container {
                        display: flex;
                        justify-content: space-between;
                        padding: 2rem 4rem;
                        align-items: center;
                    }

        .profile-intro-img {
            width: 150px;
            height: 150px;
            border-radius: 50%;
        }

        .profile-intro-i {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 5px;
        }

        .profile-intro-i img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
            object-fit: cover;
        }

        .profile-intro-i h3 {
            color: #fff;
            text-transform: none;
            font-size: 15px;
            margin-top: 10px;
        }

        .profile-green-q {
            background-color: transparent;
            padding: 0.5rem 1rem;
            border: 2px solid #b6ff40;
        }

        .profile-green-q h4 {
            color: #b6ff40;
            font-family: 'Poppins', sans-serif;
            font-weight: 500;
        }

        .bold-d {
            font-weight: 900;
        }

        .tabs-container {
            display: flex;
            flex-wrap: wrap;
            list-style: none;
            border-bottom: 2px solid #23272f;
            justify-content: space-around;
        }

        .tabs-container-item {
            display:flex;
            gap:15px;
            padding: 1rem 1.5rem;  
        }

        .tabs-container-item h3 {
            font-size: 16px;
        }

        .tab-active {
            border-bottom: 5px solid #2c62fe;
        }

        .profile-sub-title {
            padding: 1.5rem 4rem 1.5rem;
            color: #fff;
            font-family: 'Poppins', sans-serif;
            font-size: 25px;
        }

/* INFOMRACION EMPIEZA AQUI */

.profile-info-grid {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: repeat(5, 1fr);
    position: relative;
}

.profile-info-item {
    padding: 0.6rem 4rem;
}

.profile-info-item label {
    margin-bottom: 0;
    padding: 0 5px;
    height: auto;
    min-height: 20px;
    color: #313c60;
    font-size: 16px;
    position: relative;
    top: 0;
    left: 0;
    background-color: transparent;
    z-index: 1;
    font-family: 'Roboto Mono', monospace;
}

.profile-info-output {
    color: #fff;
    background-color: #191e2e;
    border-width: 2px;
    border-color: #313c60;
    width: 100%;
    display: block;
    height: 56px;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-clip: padding-box;
    border-radius: 0.25rem;
    font-size: 20px;
}

.profile-info-submit {
    position: relative; 
    left:50%; 
    margin-top: 20px; 
    background-color: transparent;
    border: 2px solid #313c60;
    color: #313c60;     
    display: flex; 
    align-items: center; 
    justify-content: center; 
    gap: 10px;
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
}

.profile-info-submit:hover {
    background-color: #313c60;
    color: rgb(0, 0, 0);
}

.profile-info-output:focus {
    border-width: 5px;   
}


/* TERMINA INFORMACION AQUI */




/* EMPIEZA CAMBIAR DE CONTRASE;A AQUII */
.profile-password-output {
    background-color: #191e2e;
    border-width: 2px;
    border-color: #313c60;
    width: 70%;
    display: block;
    height: 56px;
    padding: 0.375rem 0.75rem;
    font-weight: 400;
    line-height: 1.5;
    color: #495057;
    background-clip: padding-box;
    border-radius: 0.25rem;
    margin-left: 4rem;
    margin-top: 20px;
    font-size: 20px;
}

.profile-password-output:active {
    border-color: #21e79f;
}

.profile-password-submit {
    margin: 2rem 4rem;
    background-color: transparent;
    border: 2px solid #313c60;
    color: #313c60;     
    display: flex; 
    align-items: center; 
    justify-content: center; 
    font-family: 'Roboto Mono', monospace;
    font-size: 20px;
    padding: 1rem 2rem;
}

.profile-password-submit:hover {
    background-color: #313c60;
    color: rgb(0, 0, 0);
}



{/* TABLA DE HISTORIAL */}

.history-flex-c {    
    display: flex;
    justify-content: center;
    flex-direction: column;
}

.history-flex-c h4 {
            margin-top: 20px;
            text-align: center;
}

table {
    border: 1px solid transparent;
    background-image: linear-gradient(to bottom,#161629 32px,rgba(22,22,41,0));
    border-image: linear-gradient(to bottom,rgba(255,255,255,.1),rgba(255,255,255,0))1;
    padding: 20px;
    margin: 1rem 2rem;
}

th {
    color: #fff;
    opacity: 0.48;
}
td {
    color: #fff;
    text-align: center;
    padding: 10px 20px;
}
th, td {
    font-family: 'Roboto Mono', monospace;
}



{/* MOBILE TABLE */}

.mobile-table-td {
    display: flex;
    flex-direction: column;
}

{/* MEDIA QUERYS */}

@media (max-width: 480px) {

    

    .profile-container {
        padding: 1rem .5rem;
        width: 90%;
        justify-content: space-around;
    }

    .profile-intro-i {
        gap: 0px;
    }

    .profile-intro-img {
        width: 100px;   
        height: 100px;
    }

    .profile-intro-i h3 {
        margin-top: 7px;
        font-size: 13px;
    }

    .profile-green-q {
        padding: 0.25rem .5rem;
    }
    .profile-green-q h4 {
        font-size: 10px;
    }

    .tabs-container a {
        flex-basis: 40%;
    }
    .tabs-container-item h3 {
        font-size: 12px;
    }
    .tabs-container-item img {
        display: none;
    }

    .profile-sub-title {
        padding: 1rem 2rem 1rem;
        font-size: 18px;    
    }

    .gc-profile-list-item {
            flex-flow: column nowrap;
            align-items: flex-start;
            justify-content: flex-start;
        }


    {/* NEW SECURITY */}
    .security-flex-b {
        padding: 1rem 1rem;
        flex-direction: column;
    }
}
                `}
                </style>
        </>
    );
}

export default ProfileSettings;
