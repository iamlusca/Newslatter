class SiteFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <footer class="rodape">
                <div class="coluna">
                    <h4><strong>Clarim Diário</strong></h4>
                    <p>Alta Credibilidade, dirigido por J. Jonah Jameson</p>
                </div>

                <div class="coluna">
                    <h4>Editoriais</h4>
                    <a href="#">Segurança</a>
                    <a href="#">Economia</a>
                    <a href="#">Esportes</a>
                    <a href="#">Policial</a>
                </div>

                <div class="coluna">
                    <h4>Institucional</h4>
                    <a href="#">Termos de Uso</a>
                    <a href="#">Institucional</a>
                    <a href="#">Quem Somos</a>
                    <a href="#">Contato</a>
                </div>
            </footer>
        `;
    }
}

customElements.define("site-footer", SiteFooter);