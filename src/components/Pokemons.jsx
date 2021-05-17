import React, {useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonAction,
  nextPokemonsAction,
  backPokemonsAction,
  pokeDetailAction,
} from "../redux/pokemonDucks";
import PokemonDetail from "./PokemonDetail";

const Pokemons = () => {
  const dispatch = useDispatch();

  const pokemones = useSelector((store) => store.pokemons.results);
  const next = useSelector((store) => store.pokemons.next);
  const previous = useSelector((store) => store.pokemons.previous);

  useEffect(() => {
    const fetchData = () => {
      dispatch(getPokemonAction());
    };
    fetchData();
  }, [dispatch]);

  return (
    <div className="row">
      <div className="col-md-6">
        <h3>Lista de Pokemones</h3>
        <br />
        <div className="d-flex justify-content-between">
            {next !== null && (
              <button onClick={() => dispatch(nextPokemonsAction())} className="btn btn-dark">
                Siguiente
              </button>
            )}
            {previous !== null && (
              <button onClick={() => dispatch(backPokemonsAction())} className="btn btn-dark">
                Anterior
              </button>
            )}
        </div>

        <ul className="list-group mt-3">
          {pokemones.map((item) => (
            <li key={item.name} className="list-group-item text-uppercase">
            {item.name}
            <button onClick={()=>dispatch(pokeDetailAction(item.url))} className="btn btn-dark btn-sm float-right">Info</button></li>
          ))}
        </ul>
      </div>
      <div className="col-md-6">
        <h3>Detalle Pokemon</h3>
        <PokemonDetail />
      </div>
    </div>
  );
};

export default Pokemons;
