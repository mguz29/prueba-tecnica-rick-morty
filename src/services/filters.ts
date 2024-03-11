import { charactersProps } from "../store/StoreReducer";

interface props {
  SpecieButton: "all" | "human" | "alien";
  CharacterButton: "all" | "starred" | "others";
}
export const Filters = (
  filtersValue: props,
  characters: charactersProps[],
  favorites: charactersProps[]
) => {
  if (
    filtersValue.CharacterButton == "all" &&
    filtersValue.SpecieButton == "all"
  ) {
    return characters;
  }

  if (
    filtersValue.CharacterButton == "all" &&
    filtersValue.SpecieButton == "human"
  ) {
    let charactersBackup = characters;
    return charactersBackup.filter((character) => character.species == "Human");
  }

  if (
    filtersValue.CharacterButton == "all" &&
    filtersValue.SpecieButton == "alien"
  ) {
    let charactersBackup = characters;
    return charactersBackup.filter((character) => character.species == "Alien");
  }

  if (
    filtersValue.CharacterButton == "starred" &&
    filtersValue.SpecieButton == "all"
  ) {
    let charactersBackup = favorites;
    return charactersBackup.filter((character) => character.favorite == true);
  }

  if (
    filtersValue.CharacterButton == "starred" &&
    filtersValue.SpecieButton == "human"
  ) {
    let charactersBackup = favorites;
    return charactersBackup.filter((character) => character.species == "Human");
  }

  if (
    filtersValue.CharacterButton == "starred" &&
    filtersValue.SpecieButton == "alien"
  ) {
    let charactersBackup = favorites;
    return charactersBackup.filter((character) => character.species == "Alien");
  }

  if (
    filtersValue.CharacterButton == "others" &&
    filtersValue.SpecieButton == "all"
  ) {
    let charactersBackup = characters;
    return charactersBackup;
  }

  if (
    filtersValue.CharacterButton == "others" &&
    filtersValue.SpecieButton == "human"
  ) {
    let charactersBackup = characters;
    return charactersBackup.filter((character) => character.species == "Human");
  }

  if (
    filtersValue.CharacterButton == "others" &&
    filtersValue.SpecieButton == "alien"
  ) {
    let charactersBackup = characters;
    return charactersBackup.filter((character) => character.species == "Alien");
  }
};
