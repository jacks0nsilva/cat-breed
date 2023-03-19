import styled from 'styled-components';

export const One = styled.div`
  .marked {
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: #9E4784;
    margin-right: 10px;

    @media(max-width: 500px){
      width: 15px;
      height: 15px;
    }
  }

  .unmarked{
    display: inline-block;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background-color: rgba(30, 30, 30, 0.5);
    margin-right: 10px;

    @media(max-width: 500px){
      width: 15px;
      height: 15px;
    }
  }
`