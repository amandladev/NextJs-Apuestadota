import React from 'react';

const Dep = () => {
    return (
        <div>
                    <h2 className="intro-title">
                        DEPOSITAR.
                    </h2> 

                    <h4 className="intro-subtitle">
                       Selecciona un metodo de pago:
                    </h4>
                    <div className="deposit-container">
                        <div className="deposit-container-item" id="method01">
                            <img src="/visa-svg.svg" alt="visa" />
                        </div>
                        <div className="deposit-container-item" id="method02">
                            <img src="/mastercard-svg.svg" alt="visa" />
                        </div>
                        <div className="deposit-container-item" id="method03">
                            <img src="/bitcoin-svg.svg" alt="visa" />
                        </div>
                       <div className="deposit-container-item" id="method04">
                            <img src="/bank-svg.svg" alt="visa" />
                        </div> 
                    </div>

                    <div className="deposito-min-max">
                        <h4>Pago con Visa</h4>
                        <h4> <span className="green-b">min. </span>10 USD <span className="green-b">max.</span> 2000 USD </h4>
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

                    <div>
                        <button className="deposit-btn-submit">Depositar</button>
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


.deposit-container {
    display: flex;
    gap: 20px;
    margin-left: 2rem;
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

.deposit-btn-submit {
    position: relative; 
    padding: 1rem;
    margin: 4rem 2rem;
     
    background-color: transparent;
    border: 2px solid rgb(6, 255, 89);
    color: rgb(6, 255, 89);     
    
    font-family: 'Roboto Mono', monospace;
    font-size: 16px;
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

.green-b {
    color: rgb(6, 255, 89);
}
                    `}
                    </style>
        </div>
    );
}

export default Dep;
