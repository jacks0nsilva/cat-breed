import React from "react";
import One from '../rate1/RateOne'
import Two from '../rate2/RateTwo'
import Three from '../rate3/RateThree'
import Four from '../rate4/RateFour'
import Five from '../rate5/RateFive'
import { Desc } from "../desc/desc";

function ApegoAoDono({family_friendly}){
    switch(family_friendly){
        case 1:
        return(
            <Desc>
                <h2>Apego ao dono:</h2>
                <One/>
            </Desc>
        )
        break
        case 2:
            return(
                <Desc>
                    <h2>Apego ao dono:</h2>
                    <Two/>
                </Desc>
            )
            break
        case 3:
            return(
                <Desc>
                    <h2>Apego ao dono:</h2>
                    <Three/>
                </Desc>
            )
            break
        case 4:
            return(
                <Desc>
                    <h2>Apego ao dono:</h2>
                    <Four/>
                </Desc>
            )
            break
        case 5:
            return(
                <Desc>
                    <h2>Apego ao dono:</h2>
                    <Five/>
                </Desc>
            )
            break
    }
}

export default ApegoAoDono