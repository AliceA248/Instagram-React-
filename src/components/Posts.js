
import { useState } from 'react'

export default function Posts(){

const posts = [{imgPoster: "./assets/img/meowed.svg", name: "meowed", img: "./assets/img/gato-telefone.svg", imgRespond: "./assets/img/respondeai.svg", nameUsuario: "respondeai", quantidadeCurtidas: 101523}, 
{imgPoster: "./assets/img/barked.svg", name: "barked", img: "./assets/img/dog.svg", imgRespond: "./assets/img/adorable_animals.svg", nameUsuario: "adorable_animals", quantidadeCurtidas: 99159}, 
{imgPoster: "./assets/img/respondeai.svg", name: "respondeai", img: "./assets/img/gato-telefone.svg" ,imgRespond: "./assets/img/respondeai.svg", nameUsuario: "respondeai", quantidadeCurtidas: 101523}, ]

  return(
      <div className="posts">
        {posts.map((props) => (
          <Post key={props.name} imgPoster={props.imgPoster} name={props.name} img={props.img} imgName={props.imgName} imgRespond={props.imgRespond} nameUsuario={props.nameUsuario} quantidadeCurtidas={props.quantidadeCurtidas} />
        ))}
      </div>
    );
}

function Post(props){

  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  const heartClick = event => {
    setIsLiked(current => !current);
  };

  const doubleClick = event => {
    switch (event.detail) {
      case 1: {
        console.log('single click');
        break;
      }
      case 2: {
        setIsLiked(true)
        console.log('double click');
        break;
      }

      default:
        break;
    }
  }

  const saveClick = event => {
    setIsSaved(current => !current);
  }

  return(
    <div data-test="post" className="post">
      <div className="topo">
        <div className='usuario'>
              <img src={props.imgPoster} alt={props.name}/>
              {props.name}
        </div>
            <ion-icon name="ellipsis-horizontal-outline"></ion-icon>
      </div>
      <div className='conteudo'>
          <img data-test="post-image" onClick={doubleClick} src={props.img}/>
          </div>
      <div className="fundo">
        <div className="acoes">
          <div>
            <ion-icon data-test="like-post" class={isLiked ? 'md hydrated liked' : 'md hydrated'} onClick={heartClick} name={isLiked ? 'heart' : 'heart-outline'}></ion-icon>
            <ion-icon name="chatbubble-outline"></ion-icon>
            <ion-icon name="paper-plane-outline"></ion-icon>
          </div>
            <ion-icon data-test="save-post" onClick={saveClick} name={isSaved ? 'bookmark' : 'bookmark-outline'}></ion-icon>
        </div>
            <div className="curtidas">
              <img src={props.imgRespond} alt={props.nameUsuario} />
              <p>
                Curtido por <span>{props.nameUsuario}</span> e
                <span data-test="likes-number"> outras {isLiked ? props.quantidadeCurtidas + 1 : props.quantidadeCurtidas} pessoas</span>
              </p>
        </div>
      </div>
    </div>
  );
}




