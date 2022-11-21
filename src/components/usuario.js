import React from "react"

export default function Usuario(){
    const [nome, setNome] = React.useState("Catana")
    const [userImage, setUserImage] = React.useState("assets/img/catanacomics.svg")

    function mudarNome(){
      const resposta = prompt("Insira seu novo nome")
      setNome(resposta)
    }

    function mudarImagem(){
      const resposta = prompt("Insira a URL de sua nova foto de perfil!")
      setUserImage(resposta)
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