import styled from 'styled-components';
import 'animate.css'
export const Container = styled.main`
    max-width: 900px;
    border-radius: 1rem;
    margin-bottom: 30px;
    background-color: white;
    display: grid;
    font-family: 'League Spartan', sans-serif;
    grid-template-areas: 
    "Titulo Titulo"
    "Imagem Descricao"
    "Caracteristicas Botao"
    ;
     @media (max-width: 500px){
        grid-template-areas: 
        "Titulo"
        "Imagem"
        "Descricao"
        "Caracteristicas"
        "Botao";
    }
    animation: fadeInDown;
    animation-duration: .5s;
    box-shadow: #08080885 3px 8px 20px 0px;
`

export const Titulo = styled.h1`
    grid-area: Titulo;
    text-align: center;
`

export const Imagem = styled.img`
    max-width: 450px;
    grid-area: Imagem;
    margin: 20px;
    border-radius: 1rem;
    align-self: center;
    justify-self: center;
    border: none;
    box-shadow: rgb(0 0 0 / 28%) 2px 2px 20px 0px;

    @media(max-width: 500px){
        max-width: 300px;
    }
`

export const Descricao = styled.p`
    grid-area: Descricao;
    padding: 20px;
    font-size: 1.2rem;
    text-align: justify;

    @media(max-width: 500px){
        font-size: .9rem;
    }
`

export const TempoDeVida = styled.p`
    font-weight: bold;
    font-size: 1.3rem;
` 

export const Botao = styled.button`
    background-color: #9E4784;
    border: none;
    width: 12rem;
    height: 4rem;
    border-radius: .8rem;
    font-size: 1rem;
    cursor: pointer;
    grid-area: Botao;
    align-self: center;
    justify-self: center;
    color: white;
    font-weight: bold;
    transition: .5s;

    &:hover{
        background-color: #5f2c50;
    }

    @media(max-width: 500px){
        margin-bottom: 20px;
        width: 6rem;
        height: 3rem;
    }
`

export const Caracteristicas = styled.section`
    grid-area: Caracteristicas;
    font-size: .7rem;
    padding: 20px;

    h3{
        font-size: 1rem;
    }

    @media(max-width: 500px){
        font-size: .8rem;
    }
`