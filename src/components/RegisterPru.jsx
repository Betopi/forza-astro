import React, { useState } from 'react';
import '../../public/register.css';

function Register() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [firstname, setFirstName] = useState('');
    const [lastname, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        // Aquí puedes implementar la lógica de autenticación
        // Por ejemplo, puedes enviar los datos a un servidor para verificar las credenciales
        console.log('Usuario:', username);
        console.log('Contraseña:', password);
    };

    return (
        <div className="login-container">
            <h2>Registro</h2>
            <form onSubmit={handleRegister}>

                <div>
                    <label htmlFor="username">Usuario:</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="password">Contraseña:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="firstname">Nombre:</label>
                    <input
                        type="text"
                        id="firstname"
                        value={firstname}
                        onChange={(e) => setFirstName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="lastname">Apellidos:</label>
                    <input
                        type="text"
                        id="lastname"
                        value={lastname}
                        onChange={(e) => setLastName(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="email">Correo Electronico:</label>
                    <input
                        type="text"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />
                </div>

                <div>
                    <label htmlFor="phone">Telefono:</label>
                    <input
                        type="text"
                        id="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)} />
                </div>



                <button type="submit">Registrarse</button>
            </form>
        </div>
    );
}

export default Register;
