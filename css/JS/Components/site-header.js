class SiteHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =
            `<header class="cabecalho">
                <div class="logo">Clarim Diário</div>
                <nav class="navegacao">
                    <a href="#">Spider-Man</a>
                    <a href="#">Economia</a>
                    <a href="#">Esportes</a>
                    <a href="#">Política</a>
                </nav>
            </header>`
        ;
    }
}

customElements.define('site-header', SiteHeader)