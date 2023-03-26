import React from 'react';
import AmizadeAnimais from './components/amizade-animais/AmizadeAnimais';
import AmizadeCriancas from './components/amizade-criancas/AmizadeCriancas';
import ApegoAoDono from './components/apego-ao-dono/ApegoAoDono';
import Brincalhao from './components/brincalhao/Brincalhao';
import Carregando from './components/carregando/Carregando';
import { GlobalStorage } from './GlobalStorage';


import { Container, Imagem, Descricao, Botao, Caracteristicas, TempoDeVida, Titulo } from './components/container/Container.style';
import Inteligencia from './components/inteligencia/Inteligencia';

function App() {
  const {cat, loading, searchCat} = React.useContext(GlobalStorage)

 // if (cat === null) return null
  if(loading){
    return (
      <Carregando/>
    )
  } else{

    return (
        <Container>
        <Titulo>{cat.raca}</Titulo>
        <Imagem src={cat.img}/>
        <Descricao>
          {cat.descricao}
          <TempoDeVida>
            {cat.expectativa}
          </TempoDeVida>
        </Descricao>
        <Botao onClick={searchCat}>Next Cat</Botao>
        <Caracteristicas>
          <h3>Características do {cat.raca}</h3>
        <ApegoAoDono/>
        <Brincalhao />
        <Inteligencia/>
        <AmizadeCriancas/>
        <AmizadeAnimais/>
        </Caracteristicas>
        </Container>
    );
    }
}

export default App;
