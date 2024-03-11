import { actionProps, types } from "../store/StoreReducer";
export const getCharacters = async (dispatch: React.Dispatch<actionProps>) => {
  fetch("https://rickandmortyapi.com/api/character/")
    .then((response) => response.json())
    .then((data) =>
      dispatch({
        type: types.getCharacters,
        payload: data.results.slice(0, 8),
      })
    )
    .catch((error) => console.log(error));
};
