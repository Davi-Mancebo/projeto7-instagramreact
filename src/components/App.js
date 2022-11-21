import NavBar from "./navBar";
import BottomBar from "./fundoMobile";
import Corpo from "./corpo";

export default function App(){
    return (
        <div class="root">
            <NavBar/>
            <Corpo />
            <BottomBar/>
        </div>
    )
}