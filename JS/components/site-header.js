class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<header class="cabecalho">
                <div class="logo">
                    <a href="../pages/index.html"> Clarim Diário</a></div>
                <nav class="navegacao">
                    <a href="#">Spider-Man</a>
                    <a href="#">Economia</a>
                    <a href="#">Esportes</a>
                    <a href="../pages/materia.html">Policial</a>
                </nav>
            </header>`
            ;
}
}
customElements.define('site-header', SiteHeader)