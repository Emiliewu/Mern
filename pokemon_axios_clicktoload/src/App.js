import { useState, useEffect } from 'react';
import axios from 'axios';
import Pokemon from './Pokemon';
import Detail from './Detail';
import './App.css';

export default function App() {
  const SpriteURL = 'https://pokeapi.co/api/v2/pokemon/';
  const [pokemons, setPokemons] = useState([]);
  const [offset, setOffset] = useState(0);
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState();
  
  useEffect(() => {
    const promiseArr = [];
    const DetailURL = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';
    setLoading(true);
    for (let i = 1+offset; i <= 24+offset; i++) {
      if (i > 200) {
        break;
      }
      promiseArr.push(axios.get(SpriteURL+i).then(res => res.data));
    }
    Promise.all(promiseArr)
      .then(pokemonArr => {
        let dataArr = pokemonArr.map(({id, name, height, weight, stats}) => {
          let statObj = stats.reduce((acc, cur) => {
            acc[cur.stat.name] = cur['base_stat'];
            return acc;
          }, {});
          let num = ('000'+id).slice(-3);
          let imgUrl = DetailURL+num+'.png';
          return {id, name, height, weight, imgUrl, ...statObj};
        });
        setLoading(false);
        setPokemons(prevArr => [...prevArr, ...dataArr]);
      })
      .catch(console.log);
  }, [offset]);

  const handleClick = () => {
    if (loading) {
      return;
    }
    setOffset(offset+24);
  };

  return (
    <>
      <h2 id="header">Pok&#233;dex</h2>
      <div id="pokedex">
        { pokemons.map(p => <Pokemon key={p.id} {...p} setDetail={setDetail} />)}
      </div>
      <div id="footer">
        <button onClick={handleClick} >
          { loading ? 'Loading...' : 'Load more Pokemon' }
        </button>
      </div>
      { detail && <Detail {...detail} />}
    </>
  );
};