import React, {useEffect} from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  getPokemonAction,
  nextPokemonsAction,
  backPokemonsAction,
  pokeDetailAction,
} from "../redux/pokemonDucks";

import PokemonDetail from "./PokemonDetail";
import Pokeball from '../assets/img/pokeball.png'

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
    <div className="row mt-5">
      <div className="col-md-6">
        <h3>Lista de Pokemones</h3>
        
        <ul className="list-group mt-4  ">
          {pokemones.map((item) => (
            <li key={item.name} className="list-group-item text-uppercase">
            {item.name}
            <button onClick={()=>dispatch(pokeDetailAction(item.url))} className="btn btn-primary btn-sm float-right">Ver <img src={Pokeball} alt="" className="img-fluid" width="20px" /></button></li>
          ))}
        </ul>

        <div className="d-flex justify-content-between mt-3">
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
      </div>
      <div className="col-md-6">
        <h3>Detalle Pokemon</h3>
        <PokemonDetail />
      </div>
    </div>
  );
};

export default Pokemons;
