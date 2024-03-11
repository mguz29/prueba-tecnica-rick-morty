import { actionProps, types } from "../store/StoreReducer";
export const getCharacterDetail = async (
  dispatch: React.Dispatch<actionProps>,
  id: string | undefined
) => {
  fetch("https://rickandmortyapi.com/api/character/" + id)
    .then((response) => response.json())
    .then((data) => {
      dispatch({
        type: types.detailCharacter,
        payload: data,
      });
    })
    .catch((error) => console.log(error));
};
