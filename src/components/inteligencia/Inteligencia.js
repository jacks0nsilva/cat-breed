import React from "react";
import One from '../rate1/RateOne'
import Two from '../rate2/RateTwo'
import Three from '../rate3/RateThree'
import Four from '../rate4/RateFour'
import Five from '../rate5/RateFive'
import { Desc } from "../desc/desc";
import { GlobalStorage } from "../../GlobalStorage";

function Inteligencia(){
    const {cat} = React.useContext(GlobalStorage)
    switch(cat.intelligence){
        case 1:
            return(
            <Desc>
                <h2>Inteligência:</h2>
                <One/>
            </Desc>
            )
        case 2:
            return(
                <Desc>
                    <h2>Inteligência:</h2>
                    <Two/>
                </Desc>
            )
        case 3:
            return(
                <Desc>
                    <h2>Inteligência:</h2>
                    <Three/>
                </Desc>
            )
        case 4:
            return(
                <Desc>
                    <h2>Inteligência:</h2>
                    <Four/>
                </Desc>
            )
        case 5:
            return(
                <Desc>
                    <h2>Inteligência:</h2>
                    <Five/>
                </Desc>
            )
        default:
        console.log('Erro!')
    }
}

export default Inteligencia