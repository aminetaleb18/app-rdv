import React from 'react'

function Login({ navigation }) {
    return(
        <div className="App">
                <header className="App-header">
                <h1>connexion</h1>
                </header>
                <main className="App">
                    <p placeholder="email"></p>
                    <p placeholder="password" ></p>
                    <button size="25" title="CONNEXION" />
                </main>
        </div>
    )
}

export default Login;