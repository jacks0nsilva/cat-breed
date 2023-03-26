import React from "react";
import { Loading } from "./Carregando.style";


function Carregando(){
    return(
        <Loading>
            <h2>Aguarde um momento, estamos carregando as informações para você</h2>
            <img src="https://i.pinimg.com/originals/30/62/75/3062756a297f1e3c22e35f3fe89b3ecc.jpg" alt="cat" />
        </Loading>
    )
}

export default Carregando