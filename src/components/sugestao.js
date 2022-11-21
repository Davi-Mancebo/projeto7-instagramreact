export default function Sugestoes(){
    const sugestao = [
        {nome: "bad.vibes.memes", img: "assets/img/bad.vibes.memes.svg"},
        {nome: "chibrdart", img: "assets/img/chibirdart.svg"},
        {nome: "razoesparaacreditar", img: "assets/img/razoesparaacreditar.svg"},
        {nome: "adorable_animals", img: "assets/img/adorable_animals.svg"},
        {nome: "smallcutecats", img: "assets/img/smallcutecats.svg"}
    ]

    return(
        <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

            {sugestao.map((s) => <Sugestao nome={s.nome} img={s.img} />)}
        </div>
    )
}

function Sugestao(props){
    if(props.nome === "razoesparaacreditar"){
        return(
            <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">Novo no Instagram</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
        )
    }
    return(
        <div class="sugestao">
            <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                    <div class="nome">{props.nome}</div>
                    <div class="razao">Segue você</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    )
}