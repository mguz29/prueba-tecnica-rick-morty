import React from "react";
import { actionProps, charactersProps, types } from "../store/StoreReducer";

export default function useFavorites(
  dispatch: React.Dispatch<actionProps>,
  characterData: charactersProps
) {
  const addToFavorites = (character: charactersProps) => {
    dispatch({ type: types.favoritesAdd, payload: character });
  };

  const removeFavorites = (character: charactersProps) => {
    dispatch({ type: types.removeFavorites, payload: character });
  };

  const handleFavorite = (character: charactersProps) => {
    if (!characterData?.favorite) {
      addToFavorites(character);
      return;
    }
    removeFavorites(character);
  };
  return {
    handleFavorite,
  };
}
