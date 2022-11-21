import React from "react"

export default function Usuario(){
    const usuario = {nome: "Catana", imagem: "assets/img/catanacomics.svg"}

    return(
        <User nome={usuario.nome} imagem={usuario.imagem}/>
    )
}
function User(props){
    const [nome, setNome] = React.useState(props.nome)
    const [userImage, setUserImage] = React.useState(props.imagem)

    function mudarNome(){
      const resposta = prompt("Insira seu novo nome")
      console.log(resposta)

      if(resposta === ""){
        setNome(nome)
      }else{
        setNome(resposta)
      }
    }

    function mudarImagem(){    
      const resposta = prompt("Insira a URL de sua nova foto de perfil!")
      console.log(resposta)

      if(resposta === ""){
        setUserImage(userImage)
      }
      else{
        setUserImage(resposta)
      }
    }

    return(
        <div class="usuario">
        <img src={userImage} onClick={mudarImagem}/>
        <div class="texto">
          <strong>catanacomics</strong>
          <span>
            {nome}
            <ion-icon name="pencil" onClick={mudarNome}></ion-icon>
          </span>
        </div>
      </div>
    )
}