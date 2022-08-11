import React from 'react';
import { useState, useEffect } from 'react';


const Solo = () => {

    // const [open, setOpen] = useState(true);

    // if(typeof window !== 'undefined') {
    //     var buttonO = document.getElementById('openbutton');
    //     var buttonC = document.getElementById('closebutton');
    //     var solo = document.getElementById('sss');
    // }

    //     function openW() {    
    //         solo.style.visibility = 'visible';
    //         solo.classList.remove('scaledowntop');
    //         solo.classList.add('scaleuptr');
    //         setOpen(false);
    //     }
    //     function closeW() {
            
    //         solo.classList.remove('scaleuptr');
    //         solo.classList.add('scaledowntop');
    //         setOpen(true);
    //     }

           
    
    return (
        <>
              <div className="sss" id="sss">
                        <div className="mode-create-lobby">
                            <img src="/close-w.png" alt="close" id="closebutton" />
                            
                            <h4 className="bold-center mb-sm subtitle-modes">Elige el monto de tu apuesta</h4>
                            <div className="mode-solo-amount"> 
                                <div className="mode-solo-amount-inp">
                                    <div className="question-mark">
                                        <span>?</span>
                                    </div>
                                    <h3>Importe:</h3>
                                    <h3>$ 100</h3>
                                </div>
                                <div className="mode-solo-amount-btn">  
                                    <button className="large-btn">+</button>
                                    <button className="large-btn">-</button>
                                </div>
                            </div>       
                            <div className="start-game-btn-container">
                                <button className="start-game-btn">Crear Sala</button>
                            </div> 
                            <div>
                                <h4 className="mb-sm subtitle-modes lighterr">Detalles de la apuesta:</h4>

                                <div className="profit-container">
                                    <h4 className="subtitle-modes lighterr">Beneficio %: <span className="bold">+ 40%</span></h4>
                                    <h4 className="subtitle-modes lighterr">Beneficio Q: <span className="bold">+ $ 40.00</span></h4>
                                    <h4 className="subtitle-modes lighterr">Calculo de ganancia: <span className="bold">$ 140.00</span></h4>
                                </div>

                            </div>
                        </div>  
                </div>
                
                <div className="mode--solo">
                        <div className="mode--solo--c">
                            <div className="solo--title"> 
                                <h3>
                                    JUEGA RANKED Y GANA DINERO
                                </h3>
                            </div>
                            <div className="solo--item">
                                {/* <!-- video --> */}
                                <div className="solo--item--i">
                                    <img src="../midas.jpg" alt="mode-solo" />
                                </div>
                                <div className="solo--item-content">
                                    <div className="solo--item-content-head">
                                        <span>Apuesta en tu propia partida</span>
                                        <h2>Modo Individual</h2>
                                    </div>
                                    <div className="solo--item-content-desc">
                                        <p> Te pagamos el 40% de tu apuesta por cada partida ganada. <br></br> 
                                        Cansado de que te diga que busques un trabajo, gana dinero jugando Dota2.
                                          </p>
                                    </div>
                                    <div className="solo--item-content-button">
                                        <a href="#" className="solo--btn-c" id="openbutton">Iniciar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

            <style jsx>
            {`
            .mode-unactive a h4 {
    color: #999;
}




/* crear apuesta - MODO SOLO */

.sss {
    position: absolute;
    width: 100%;
    height: 100%;  
    background-color: rgba(55, 55, 55, 0.631);
    
    z-index: 5;
    display: flex;
    justify-content: center;
    visibility: hidden;
    align-items: flex-start;
}

.scaleuptr {
	-webkit-animation: scale-up-tr 0.4s ease-in-out both;
	        animation: scale-up-tr 0.4s ease-in-out both;
}

.scaledowntop {
	-webkit-animation: scale-down-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
	        animation: scale-down-top 0.4s cubic-bezier(0.250, 0.460, 0.450, 0.940) both;
}

.mode-create-lobby {
    background-color: #25273d;
    padding: 68px 40px;
    margin-top: 10%;
    position: relative;
}

.mode-create-lobby img {
    position: absolute;
    right: 0;
    top: 0;
    padding: 10px;
    cursor: pointer;
}

/* cerrar */
@-webkit-keyframes scale-down-top {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 50% 0%;
              transform-origin: 50% 0%;
    }
    100% {
      -webkit-transform: scale(0.3);
              transform: scale(0.3);
      -webkit-transform-origin: 0% 0%;
              transform-origin: 0% 0%;
              opacity: 0;
              visibility: hidden;
    }
  }
  @keyframes scale-down-top {
    0% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
    100% {
      -webkit-transform: scale(0.3);
              transform: scale(0.3);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
              opacity: 0;
              visibility: hidden;
    }
  }

  /* abrir */
  @-webkit-keyframes scale-up-tr {
    0% {
      -webkit-transform: scale(0.3);
              transform: scale(0.3);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
              opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
  }
  @keyframes scale-up-tr {
    0% {
      -webkit-transform: scale(0.3);
              transform: scale(0.3);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
              opacity: 0;
    }
    100% {
      -webkit-transform: scale(1);
              transform: scale(1);
      -webkit-transform-origin: 100% 0%;
              transform-origin: 100% 0%;
    }
  }
            `}</style>
        </>
    );
}

export default Solo;
