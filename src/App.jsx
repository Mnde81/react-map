
import { Pokemon } from './components/pokemon/Pokemon';
import { fivePokemons } from './data/fivePokemons';
import { tenPokemons } from './data/tenPokemons';




function App() {
  return (
    <>     
      <main>     
        <Pokemon data={tenPokemons}/> 
        <Pokemon data={fivePokemons}/>        
      </main>     
    </>
  );
}

export default App;
