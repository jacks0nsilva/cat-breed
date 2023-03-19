import React from 'react';
import AmizadeAnimais from './components/amizade-animais/AmizadeAnimais';
import AmizadeCriancas from './components/amizade-criancas/AmizadeCriancas';
import ApegoAoDono from './components/apego-ao-dono/ApegoAoDono';
import Brincalhao from './components/brincalhao/Brincalhao';
import Carregando from './components/carregando/Carregando';

import { Container, Imagem, Titulo, Descricao, Botao, Caracteristicas } from './components/container/Container.style';
import Inteligencia from './components/inteligencia/Inteligencia';

function App() {

  const [cat, setCat] = React.useState([])
  const [loading, setLoading] = React.useState([true])

  React.useEffect(()=>{
    async function searchCat(){
      const response = await fetch('./infoCats.json')
      const data = await response.json()
      const randomIndex = Math.floor(Math.random() * data.length)
      setCat(data[randomIndex])
      setLoading(false)
    }
    searchCat()
  },[])


  async function searchCat(){
    setLoading(true)
    const response = await fetch('./infoCats.json')
    const data = await response.json()
    const randomIndex = Math.floor(Math.random() * data.length)
    setCat(data[randomIndex])
    setLoading(false)
  }


  const {
    raca,
    img,descricao,
    family_friendly,
    playfulness,
    intelligence,
    children_friendly,
    other_pets_friendly} = cat

  if(loading){
    return (
      <Carregando/>
    )
  } else{

    return (
      <Container>
      <Titulo>{raca}</Titulo>
      <Imagem src={img}/>
      <Descricao>
        {descricao}
      </Descricao>
      <Botao onClick={searchCat}>Next Cat</Botao>
      <Caracteristicas>
        <h3>Características do {raca}</h3>
      <ApegoAoDono family_friendly={family_friendly}/>
      <Brincalhao playfulness={playfulness} />
      <Inteligencia intelligence={intelligence}/>
      <AmizadeCriancas children_friendly={children_friendly}/>
      <AmizadeAnimais other_pets_friendly={other_pets_friendly}/>
      </Caracteristicas>
      </Container>
    );
  }


}

export default App;
