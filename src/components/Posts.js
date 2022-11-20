
export default function Posts(){
    return (
        <div class="posts">
            <Post 
            imagem="/assets/img/meowed.svg"
            textos="barked"
            imagemMaior="/assets/img/gato-telefone.svg"
            imagemMedia="/assets/img/respondeai.svg"
            texto="respondeai"
            />
             <Post
            imagem="assets/img/barked.svg"
            textos="meowed"
            imagemMaior="assets/img/dog.svg"
            imagemMedia="assets/img/adorable_animals.svg"
            texto="adorable_animals"
            />
            
        </div>
    )
}



function Post(a) {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={a.imagem} />
                    {a.textos}
                </div>
                <div class="acoes">
                        <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>
            <div class="conteudo">
                <img src={a.imagemMaior}/>
            </div>
            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src={a.imagemMedia} />
                    Curtido por <strong> {a.texto} </strong> e <strong>outras 101.523 pessoas</strong>
                </div>
            </div>
        </div>

    )
}

