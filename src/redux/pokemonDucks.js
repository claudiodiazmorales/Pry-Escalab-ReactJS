import axios from "axios";

//constantes

const dataInitial = {
  count: 0,
  next: null,
  previous: null,
  results: [],
};

// types
const GET_POKEMONS_TRUE = "GET_POKEMONS_TRUE";
const NEXT_POKEMONS_TRUE = "NEXT_POKEMONS_TRUE";
const INFO_POKEMONS_TRUE = "INFO_POKEMONS_TRUE";

//reducer
export default function pokeReducer(state = dataInitial, action) {
  switch (action.type) {
    case GET_POKEMONS_TRUE:
      return { ...state, ...action.payload };
    case NEXT_POKEMONS_TRUE:
      return { ...state, ...action.payload };
    case INFO_POKEMONS_TRUE:
      return { ...state, onePokemon: action.payload };
    default:
      return state;
  }
}

//acciones
export const pokeDetailAction = (url = 'https://pokeapi.co/api/v2/pokemon/1/') => async(dispatch) =>{
  if(localStorage.getItem(url)){
    dispatch({ 
      type: INFO_POKEMONS_TRUE,
      payload: JSON.parse(localStorage.getItem(url))
      })

    return;
  }

  try {
    const res = await axios.get(url);
    console.log(res);
    dispatch({ 
      type: INFO_POKEMONS_TRUE,
      payload:{
        id: res.data.id,
        name: res.data.name,
        weight: res.data.weight,
        height: res.data.height,
        base_experience: res.data.base_experience,
        front_default: res.data.sprites.other.dream_world.front_default
      }
      })

      localStorage.setItem(url, JSON.stringify({
        id: res.data.id,
        name: res.data.name,
        weight: res.data.weight,
        height: res.data.height,
        base_experience: res.data.base_experience,
        front_default: res.data.sprites.other.dream_world.front_default
      }))
  } catch (error) {
    console.log(error);
  }
};


export const getPokemonAction = () => async (dispatch) => {
  if (localStorage.getItem("offset=0")) {
    console.log("datos localstorage");
    dispatch({
      type: GET_POKEMONS_TRUE,
      payload: JSON.parse(localStorage.getItem("offset=0")),
    });
    return;
  }

  try {
    console.log("datos desde la api");
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=6`
    );
    dispatch({
      type: GET_POKEMONS_TRUE,
      payload: res.data,
    });
    localStorage.setItem("offset=0", JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const nextPokemonsAction = () => async (dispatch, getState) => {
  const { next } = getState().pokemons;

  if (localStorage.getItem(next)) {
    console.log("datos localstorage --> NEXT");
    dispatch({
      type: GET_POKEMONS_TRUE,
      payload: JSON.parse(localStorage.getItem(next)),
    });
    return;
  }

  try {
    console.log("datos desde la api --> NEXT");
    const res = await axios.get(next);
    dispatch({
      type: NEXT_POKEMONS_TRUE,
      payload: res.data,
    });
    localStorage.setItem(next, JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};

export const backPokemonsAction = () => async (dispatch, getState) => {
  const { previous } = getState().pokemons;

  if (localStorage.getItem(previous)) {
    console.log("datos localstorage --> previous");
    dispatch({
      type: GET_POKEMONS_TRUE,
      payload: JSON.parse(localStorage.getItem(previous)),
    });
    return;
  }

  try {
    console.log("datos desde la api --> previous");
    const res = await axios.get(previous);
    dispatch({
      type: NEXT_POKEMONS_TRUE,
      payload: res.data,
    });
    localStorage.setItem(previous, JSON.stringify(res.data));
  } catch (error) {
    console.log(error);
  }
};
