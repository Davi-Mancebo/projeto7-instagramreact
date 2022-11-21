import react from "react"

export default function Posts(){
    const posts = [
        {nome: "meomed", usuario: "assets/img/meowed.svg", conteudo: "assets/img/gato-telefone.svg"},
        {nome: "barked", usuario: "assets/img/barked.svg", conteudo: "assets/img/dog.svg"}
    ]

    return(
        <div class="posts">
            {posts.map((p) => <Post nome={p.nome} usuario={p.usuario} conteudo={p.conteudo} />)}
        </div>
    )
}

function Post(props){
  let likes = 99.159;

  const [heart, setHeart] = react.useState("heart-outline");
  const [like, setLike] = react.useState("")

  const [save, setSave] = react.useState("bookmark-outline")

  function liked(){
    setHeart("heart")
    setLike("liked")
  }

  function saved(){
    setSave("bookmark")
  }

  if(props.nome == "meomed"){
    likes = 101.523

    return(
      <div class="post">
        <div class="topo">
          <div class="usuario">
            <img src={props.usuario}  />
            {props.nome}
          </div>
          <div class="acoes">
            <ion-icon name="ellipsis-horizontal"></ion-icon>
          </div>
        </div>

        <div class="conteudo">
          <img src={props.conteudo} onClick={liked}/>
        </div>

        <div class="fundo">
          <div class="acoes">
            <div>
              <ion-icon name={heart} class={like} onClick={liked}></ion-icon>
              <ion-icon name="chatbubble-outline"></ion-icon>
              <ion-icon name="paper-plane-outline"></ion-icon>
            </div>
            <div>
              <ion-icon name={save} onClick={saved}></ion-icon>
            </div>
          </div>

          <div class="curtidas">
            <img src="assets/img/respondeai.svg" />
            <div class="texto">
              Curtido por <strong>respondeai</strong> e <strong>outras {likes} pessoas</strong>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  return(
  <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src="assets/img/barked.svg" />
        barked
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.conteudo} onClick={liked} />
    </div>

    <div class="fundo">
      <div class="acoes">
        <div>
          <ion-icon name={heart} class={like} onClick={liked}></ion-icon>
          <ion-icon name="chatbubble-outline"></ion-icon>
          <ion-icon name="paper-plane-outline"></ion-icon>
        </div>

        <div>
            <ion-icon name={save} onClick={saved}></ion-icon>
        </div>
      </div>

      <div class="curtidas">
        <img src="assets/img/adorable_animals.svg" />
        <div class="texto">
          Curtido por <strong>adorable_animals</strong> e <strong>outras {likes} pessoas</strong>
        </div>
      </div>
    </div>
  </div>
  )
}