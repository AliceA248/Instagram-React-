export default function Stories() {
    return ( 
        <div class="stories">
            <Story
            imagem="assets/img/9gag.svg"
            texto="9gag"
            />
            <Story
            imagem="assets/img/meowed.svg"
            texto="meowed"
            />
            <Story
            imagem="assets/img/barked.svg"
            texto="barked"
            />
            <Story
            imagem="assets/img/nathanwpylestrangeplanet.svg"
            texto="nathanwpylestrangeplanet"
            />
            <Story
            imagem="assets/img/wawawicomics.svg"
            texto="wawawicomics"
            />
            <Story
            imagem="assets/img/respondeai.svg"
            texto="respondeai"
            />
            <Story
            imagem="assets/img/filomoderna.svg"
            texto="filomoderna"
            />
            <Story
            imagem="assets/img/memeriagourmet.svg"
            texto="memeriagourmet"
            />
            <Story
            imagem="assets/img/memeriagourmet.svg"
            texto="memeriagourmet"
            />
            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>

    )
}


function Story(props) {
    console.log(props)
    return (
            <div class="story">
                <div class="imagem">
                    <img src={props.imagem} alt="" />
                </div>
                <div class="usuario">
                    {props.texto}
                </div>
            </div>
    )
}








