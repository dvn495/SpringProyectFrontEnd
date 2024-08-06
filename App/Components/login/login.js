class LoginComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <link rel="stylesheet" href="../css/style.css">
            <div class="login-container">
                <h1>Stock It</h1>
                <input type="email" placeholder="Email" id="email">
                <input type="password" placeholder="Password" id="password">
                <button id="loginButton">Login</button>
                <p id="message"></p>
            </div>
        `;
    }

    connectedCallback() {
        this.shadowRoot.getElementById('loginButton').addEventListener('click', () => this.login());
    }

    disconnectedCallback() {
        this.shadowRoot.getElementById('loginButton').removeEventListener('click', this.login);
    }

    async login() {
        const email = this.shadowRoot.getElementById('email').value;
        const password = this.shadowRoot.getElementById('password').value;
        
        try {
            const response = await fetch('http://localhost:8080/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                this.shadowRoot.getElementById('message').textContent = 'Login exitoso! Redirigiendo...';
                // Almacenar el token
                localStorage.setItem('authToken', data.token);
                // Redireccionar a la página principal 
                window.location.href = './index.html'; 
            } else {
                this.shadowRoot.getElementById('message').textContent = data.message || 'Error en el login';
            }
        } catch (error) {
            console.error('Error durante el login:', error);
            this.shadowRoot.getElementById('message').textContent = 'Error de conexión';
        }
    }
}

customElements.define('login-component', LoginComponent);