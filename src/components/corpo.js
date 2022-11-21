import Stories from "./stories" 
import SideBar from "./sidebar"
import Posts from "./posts"

export default function Corpo(){
    return(
        <div class="corpo">
        <div class="esquerda">

          <Stories />
  
          <Posts />
        </div>
  
          <SideBar />
      </div>
    )
}