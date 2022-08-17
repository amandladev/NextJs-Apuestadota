import React from 'react';

const Dep = () => {
    return (
        <>
                    <h2 className="intro-title">
                        DEPOSITAR.
                    </h2>      
                    <div className="deposit-container">
                        <div className="deposit-container-item" id="method01">
                            <img src="/visa-svg.svg" alt="visa" />
                        </div>
                        <div className="deposit-container-item withdraw-unacive" id="method02">
                            <img src="/mastercard-svg.svg" alt="visa" />
                        </div>
                        <div className="deposit-container-item withdraw-unacive" id="method03">
                            <img src="/bitcoin-svg.svg" alt="visa" />
                        </div>
                       <div className="deposit-container-item withdraw-unacive" id="method04">
                            <img src="/bank-svg.svg" alt="visa" />
                        </div> 
                    </div>

                    <div className="deposito-min-max">
                        <h4>Pago con Visa</h4>
                        <div className='deposit-min-max-sl'>
                            <h4><span className="green-b">min. </span>10 USD </h4>
                            <h4><span className="green-b">max.</span> 2000 USD </h4>
                        </div>
                        
                    </div>

                        
                    <h4 className="intro-subtitle">
                        Monto a depositar:
                    </h4>  

                    <div className="deposit-amount">
                        <div className="deposito-amonunt-item">
                            <h4>
                                10$
                            </h4>
                            
                        </div>
                        <div className="deposito-amonunt-item">
                            <h4>
                                25$
                            </h4>
                        </div>
                        <div className="deposito-amonunt-item">
                            <h4>
                                50$
                            </h4>
                        </div>
                        <div className="deposito-amonunt-item">
                            <h4>
                                100$
                            </h4>
                        </div>
                        <div className="deposito-amonunt-item">
                            <input type="number" placeholder="Ingresar Monto" />
                        </div>
                    </div>
                    

                    <div className='deposit-terms-container'>
                        <span className='deposit-terms-c w-conditions'>
                        
                        Acepto los <a className='w-conditions underline'>terminos y condiciones</a></span>
                            <button className="deposit-btn-submit">Depositar</button>
                            <a className='w-conditions underline m-left m-bot'> Politica de pago</a>
                    </div>
                    

                    <style jsx>
                    {`

                    .intro-title {
                        padding: 2rem;
                        font-size: 3.5rem;
                        font-family: 'Poppins';
                    }
                                        .intro-subtitle {
                        font-size: 23px;
                        padding: 2rem;
                        color: #fff;
                        font-family: 'Roboto Mono', monospace;
                    }
                .deposit-container-item img {
                    height:100px;
                }

                .deposit-active {
                    border: 5px solid rgb(6, 255, 89);
                }

                .deposit-active img {
                    object-fit:contain;
                    width: 100%;
                    height: 100%;
                }

                .deposit-amount {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                    padding-left: 2rem;
                }

                .deposit-amount div {
                    background: #131E2F;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    padding: 10px;
                }

                .deposit-amount div h4 {
                    font-family: 'Roboto Mono', monospace;
                    color: #fff;
                }

                .deposito-amonunt-item {
                    width: 120px;
                    height: 50px;
                    position: relative;
                }

                .deposito-amonunt-item h4 {
                    text-align: center;
                }

                .deposito-amonunt-item span {
                    position: absolute;
                    top: -40%;
                    color: rgb(136, 136, 136);
                }

                .deposito-amonunt-item:last-child {
                    width: 170px;
                }

                .deposito-amonunt-item input {
                    width: 100%;
                    height: 100%;
                    background-color: transparent;
                    border: none;
                    color: #fff;
                    font-family: 'Roboto Mono', monospace;
                    font-size: 16px;
                    font-weight: 600;
                }
                .deposito-min-max {
                    background: #131E2F;
                    border-radius: 10px;
                    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
                    margin: 4rem 2rem;
                    padding: 1rem;
                    display: flex;
                    justify-content: space-between;
                }
                .deposito-min-max h4 {
                    color: #fff;
                    font-family: 'Roboto Mono', monospace;
                    font-size: 16px;
                    font-weight: 600;
                }
                .deposit-min-max-sl {
                    display:flex;
                    gap: 10px;
                }
                .deposit-terms-c {
                    margin-left: 2rem;
                    margin-top: 1rem;
                }
                .deposit-terms-c input {
                    position: absolute;
                opacity: 0;
                cursor: pointer;
                height: 0;
                width: 0;
                }
                .deposit-terms-container {
                    display: flex;
                    flex-direction: column;
                    align-items: start;    
                }

                @media (max-width: 768px) {
                    .intro-title {
                        font-size: 3rem;
                    }
                    .deposit-container {
                        flex-direction: column; 
                        margin-left: 30%;
                    }
                    .deposito-min-max {
                        width: 90%;
                }
                    .deposit-amount {
                        flex-wrap: wrap;
                    }

                }

                @media (max-width: 415px) {
                    .deposit-container {
                        margin-left: 27%;
                    }
                    .deposito-min-max {
                        margin: 4rem 1rem;
                    }
                    .deposito-min-max h4 {
                        font-size: 12px;
                    }

                    .deposit-amount h4 {
                        font-size: 14px;    
                    }

                  
                }


                    `}
                    </style>
        </>
    );
}

export default Dep;
