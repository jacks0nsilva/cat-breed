import styled from "styled-components";

export const Loading = styled.div`
    width: 900px;
    background-color: white;
    font-family: 'League Spartan', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    border-radius: .6rem;
    img{
        max-width: 400px;
        margin: 0 auto;
        border-radius: .6rem;
        margin-bottom: 10px;
    }

    @media(max-width: 500px){
        img{
            width: 300px;
        }
    }
` 