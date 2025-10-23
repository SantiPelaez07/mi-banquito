import './Home.css'
export function Home() {

    const storedUser = localStorage.getItem("username");

    return (
        <>
            <div className="welcomeMessage">
                <h1>Bienvendo {storedUser} a mi Banquito</h1>
            </div>
            <div className="containers">
                <div className="firstContainer">
                    <div className="card">
                        <div className="nameCard">
                            <h2>MI TARJETA</h2>
                            <img src="/src/assets/logo.png" alt="MiBanquito" />
                        </div>
                        <div className="chip">
                            <img src="/src/assets/credit-card_607697.png" alt="Chip card" />
                            <img src="/src/assets/sin-contacto (2).png" alt="NFC chip" />
                        </div>    
                            <div className="cardNumber">
                                <h1>**** **** **** 1234</h1>
                            </div>
                            <div className="dateCard">
                                    <span className='ValidationDate'>Válido<br />hasta</span>
                                    <p>12/24</p>
                                </div>
                            <div className="cardHolder">
                                <p>{storedUser}</p>
                                <div className="typeCard">
                                <h1>VISA</h1>
                            </div>
                            </div>   
                    </div>
                </div>
                <div className="secondContainer">
                    <h2>INFORMACIÓN DE LA CUENTA</h2>
                    <div className="infoAccount">
                        <div className="accountNumber">
                            <h3>Número de cuenta</h3>
                            <p>1234567890</p>
                        </div>
                        <div className="accountType">
                            <h3>Tipo de cuenta</h3>
                            <p>Ahorros</p>
                        </div>
                        <div className="availableBalance">
                            <h3>Saldo disponible</h3>
                            <p>$5.000,00</p>
                        </div>
                        <button>Pedir prestamo</button>
                    </div>
            </div>
        </div>
        </>
    )
}