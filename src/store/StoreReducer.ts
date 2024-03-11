import { Filters } from "../services/filters";

const types = {
  getCharacters: "GET_CHARACTERS",
  favoritesAdd: "ADD_FAVORITES",
  removeFavorites: "R",
  filters: "FILTERS",
  SortAZ: "ORDERBYAZ",
  reset: "RESET",
  SortZA: "SORTZA",
  search: "SEARCH",
  detailCharacter: "DETAIL",
  removeDetail: "REMOVEDETAIL",
};
export interface actionProps {
  payload: charactersProps[] | number | string;
  type: string;
}
export interface StateProps {
  characters: charactersProps[];
  favorites: charactersProps[];
  charactersFilters: charactersProps[];
  allcharacters: charactersProps[];
  detailCharacter: {};
}

const intialState: StateProps = {
  characters: [],
  favorites: [],
  charactersFilters: [],
  allcharacters: [],
  detailCharacter: {},
};

export interface charactersProps {
  gender: any;
  id: number;
  image: string;
  name: string;
  species: string;
  favorite: boolean;
  status: string;
}

const storeReducer = (state: StateProps, action: actionProps) => {
  switch (action.type) {
    case types.getCharacters:
      return {
        ...state,
        characters: action.payload,
        allcharacters: action.payload,
      };

    case types.favoritesAdd:
      const allCharacters = state.characters;
      const noFavorites = allCharacters.filter(
        (character) => character.id !== action.payload.id
      );
      return {
        ...state,
        favorites: [...state.favorites, action.payload],
        characters: noFavorites,
      };

    case types.removeFavorites:
      return {
        ...state,
        favorites: state.favorites.filter(
          (favorite) => favorite.id !== action.payload.id
        ),
        characters: [
          ...state.characters.filter(
            (character) => character.id !== action.payload.id
          ),
          action.payload,
        ],
      };

    case types.filters:
      const valueFilter = {
        //@ts-ignore
        CharacterButton: action.payload.CharacterButton,
        SpecieButton: action.payload.SpecieButton,
      };
      return {
        ...state,
        charactersFilters: Filters(
          valueFilter,
          state.characters,
          state.favorites
        ),
        characters: state.allcharacters,
      };

    case types.SortAZ:
      const sortedCharacters = state.characters.slice().sort((a, b) => {
        if (action.payload === "a-z") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });

      const sortedCharactersFavorites = state.favorites.slice().sort((a, b) => {
        if (action.payload === "a-z") {
          return a.name.localeCompare(b.name);
        } else {
          return b.name.localeCompare(a.name);
        }
      });
      return {
        ...state,
        characters: sortedCharacters,
        favorites: sortedCharactersFavorites,
      };

    case types.search:
      const searchDb = state.allcharacters;
      const searchCharacters = searchDb.filter(
        (character) =>
          character.status.toLowerCase().includes(action.payload) ||
          character.species.toLowerCase().includes(action.payload) ||
          character.gender.toLowerCase().includes(action.payload)
      );

      return {
        ...state,
        characters: searchCharacters,
      };

    case types.detailCharacter:
      return {
        ...state,
        detailCharacter: action.payload,
      };

    case types.removeDetail:
      return {
        ...state,
        detailCharacter: action.payload,
      };
    default:
      return state;
  }
};
export { intialState, types };
export default storeReducer;
