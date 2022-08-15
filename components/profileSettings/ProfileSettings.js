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
        <div>
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
                                <div className="tabs-container-item ">
                                    <img src="/icons/cash-multiple.png" alt="Record" />
                                    <h3>Record</h3>
                                </div>
                            </a>
                            <a href="#" onClick={handleClickExtra}>
                                <div className="tabs-container-item">
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
                            <h4 className="profile-sub-title">Informacion General</h4>
                            <div className="profile-info-grid">
                                <div className="profile-info-item">
                                    <label >Nombre de Usuario</label>
                                    <div>
                                        <input type="text"  className="profile-info-output" defaultValue={"nombredeusuario"} />
                                    </div>
                                </div>
        
                                <div className="profile-info-item">
                                    <label>Nombre y Apellido</label>
                                    <div>
                                        <input type="text" className="profile-info-output" defaultValue={"Sergio Antonio Reyes"} />
                                    </div>
                                </div>
        
                                <div className="profile-info-item">
                                    <label >Email</label>
                                    <div>
                                        <input type="text" className="profile-info-output" defaultValue={"sreyescurotto@gmail.com"} />
                                    </div>
                                </div>
        
                                <div className="profile-info-item">
                                    <label>Documento de identidad</label>
                                    <div>
                                        <input type="text" className="profile-info-output" defaultValue={"74629686"} />
                                    </div>
                                </div>
        
                                <div className="profile-info-item">
                                    <label >Fecha de nacimiento</label>
                                    <div>
                                        <input type="text" className="profile-info-output" defaultValue={"19/06/1996"} />
                                    </div>
                                </div> 
        
                                <div className="profile-info-item">
                                    <label>Telefono</label>
                                    <div>
                                        <input type="text" className="profile-info-output" defaultValue={"935301021"} />
                                    </div>
                                </div>


                                <button className="profile-info-submit"> 
                                    Guardar
                                   
                                </button>
                            </div>
                        </div>

                        <div className={record ? 'd-block' : 'd-none'}>
                            <div className='record-dflex'>
                                <img src='/table.jpg'></img>
                            </div>
                            
                        </div>


                        <div className={extra ? 'd-block' : 'd-none'}>
                            <div className='record-dflex'>
                                <img src='/infoe.jpg'></img>
                            </div>
                            
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
            border: 2px solid #21e79f;
        }

        .profile-green-q h4 {
            color: #21e79f;
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
                `}
                </style>
        </div>
    );
}

export default ProfileSettings;
