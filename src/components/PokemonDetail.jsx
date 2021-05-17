import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { pokeDetailAction } from "../redux/pokemonDucks.js";

const PokemonDetail = () => {
  
    const dispatch = useDispatch();

    useEffect(() => {
      const fetchData = () => {
        dispatch(pokeDetailAction());
      };
      fetchData();
    }, [dispatch]);

  const pokemon = useSelector(store => store.pokemons.onePokemon);
  //console.log(pokemon);

  return pokemon ? (
    <div className="card mt-4 text-center">
      <div className="card-body">
        <img src={pokemon.front_default} alt={pokemon.name} className="img-fluid" />
        <h3 className="card-title text-uppercase mt-4">{pokemon.name}</h3>
        <p className="card-text">Pokemon Nº: {pokemon.id}</p>
        <p className="card-text">Alto: {pokemon.height} | Ancho: {pokemon.weight}</p>
      </div>
    </div>
  ) : null;
};

export default PokemonDetail;
