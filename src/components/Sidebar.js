
function Usuario() {
    return (
        <div class="usuario">
            <img src="assets/img/catanacomics.svg" />
            <div class="texto">
                <strong>catanacomics</strong>
                <span>
                    Catana
                    <ion-icon name="pencil"></ion-icon>
                </span>
            </div>
        </div>
    )
}

function Sugestões() {
    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>
            <Sugestao
            imagem="assets/img/bad.vibes.memes.svg"
            texto="bad.vibes.memes"
            />
             <Sugestao
            imagem="assets/img/chibirdart.svg"
            texto="chibirdart"
            />
            <Sugestao
            imagem="assets/img/razoesparaacreditar.svg"
            texto="razoesparaacreditar"
            />
              <Sugestao
            imagem="assets/img/adorable_animals.svg"
            texto="adorable_animals"
            />
        </div>
    )
}

function Sugestao(a) {
    return (
        <div class="sugestao">
            <div class="usuario">
                {a.imagem}
                <div class="texto">
                    <div class="nome">{a.texto}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>
        </div>
    )
}

function LinksCopy() {
    return (
        <div>
            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes •
                Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>

    )
}


export default function Sidebar() {
    return (
        <div class="sidebar">
            <Usuario />
            <Sugestões />
            <LinksCopy />
        </div>


    )
}