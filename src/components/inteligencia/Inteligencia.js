import React from "react";
import One from '../rate1/RateOne'
import Two from '../rate2/RateTwo'
import Three from '../rate3/RateThree'
import Four from '../rate4/RateFour'
import Five from '../rate5/RateFive'
import { Desc } from "../desc/desc";

function Inteligencia({intelligence}){
    switch(intelligence){
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
/*     if(intelligence === 1){
        <Desc>
        <h2>Inteligência:</h2>
        <One/>
        </Desc>
    } else if (intelligence === 2){
        <Desc>
        <h2>Inteligência:</h2>
        <Two/>
        </Desc>
    } else if(intelligence === 3){
        <Desc>
        <h2>Inteligência:</h2>
        <Three/>
        </Desc>
    } else if (intelligence === 4){
        <Desc>
        <h2>Inteligência:</h2>
        <Four/>
        </Desc>
    } else if (intelligence === 5){
        <Desc>
        <h2>Inteligência:</h2>
        <Five/>
        </Desc>
    } */
}

export default Inteligencia