export class MainMenu extends HTMLElement {
	constructor() {
		super();
		this.render();
        this.controlComponents();
	}
	render() {
		this.innerHTML = /* html */ `
        <section class="container-menu">
        <div class="grid-menu">
            <div id="btnProductos" class="menu--button_large button-menu btn-productos">
                <div>
                    <h2 class="titulo--boton">Productos</h2>
                </div>
            </div>
            <div class="menu--button_wide button-menu">
                <div>
                    <h2 class="titulo--boton">Clientes</h2>
                </div>
            </div>
            <div class="button-menu">
                <div>
                    <h2 class="titulo--boton">Pedidos</h2>
                </div>
            </div>
            <div class="button-menu">
                <div>
                    <h2 class="titulo--boton">Pagos</h2>
                </div>
            </div>
            <div class="button-menu">
                <div>
                    <h2 class="titulo--boton">Empleados</h2>
                </div>
            </div>
            <div id="btnOficinas" class="menu--button_wide2 button-menu">
                <div>
                    <h2 class="titulo--boton">Oficinas</h2>
                </div>
            </div>
        </div>
    </section>
		`
	}

    controlComponents() {
        const menuprincipal = document.querySelector("main-menu")

        const btnProductos = document.querySelector("#btnProductos");
        const secProductos = document.querySelector("menu-productos")

        const btnOficinas = document.querySelector("#btnOficinas")
        const secOficinas = document.querySelector("menu-oficinas")

        btnOficinas.addEventListener("click", () => {
            menuprincipal.style.display = "none"
            secOficinas.style.display = "block"
        })
    }

}
customElements.define("main-menu",MainMenu)