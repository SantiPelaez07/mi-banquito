import './Profile.css';

export function Profile(){
    return (
        <>
            <div className="profile">
                <div className="backgroundProfile">
                    <div className="imgBackground">
                        <img src="/src/assets/backgroundProfile.jpg" alt="Fondo" />
                    </div>
                <div className="photoProfile">
                    <img src="/src/assets/avatar.png" alt="Foto de perfil" />
                </div>
                <h1>Nombre del propietario</h1>
                </div>
                <div className="infoProfile">
                    <h2>Email:</h2>
                    <h3>santipelaez0@gmail.com</h3>
                    <h2>Número de cuenta: </h2>
                    <h3>123456789</h3>
                    <h2>Tipo de cuenta</h2>
                    <h3>Ahorros</h3>
                </div>
            </div>
        

        </>
    )
}