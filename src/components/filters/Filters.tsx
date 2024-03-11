import { useContext, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { types } from "../../store/StoreReducer";
import { getCharacters } from "../../services/getCharacters";
import ArrowBack from "../../icons/arrowBack";

interface propsComponent {
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  hidden: boolean;
  setFilterActive: React.Dispatch<React.SetStateAction<boolean>>;
  filterActive: boolean;
}

export default function Filters(props: propsComponent) {
  const [CharacterButton, setFocusCharacterButton] = useState("");
  const [SpecieButton, setFocusSpecieButton] = useState("");
  //@ts-ignore
  const [state, dispatch] = useContext(StoreContext);

  const handleCharacterFilter = (filter: string) => {
    setFocusCharacterButton(filter);
  };
  const handleSpecieFilter = (filter: string) => {
    setFocusSpecieButton(filter);
  };

  const handleFilters = () => {
    dispatch({
      type: types.filters,
      payload: { CharacterButton, SpecieButton },
    });
  };

  return (
    <div className="bg-white py-4 px-8 md:px-4 rounded-lg h-full w-full lg:h-min">
      <div className="md:hidden flex items-center justify-between h-20">
        <button onClick={() => props.setHidden(!props.hidden)}>
          <ArrowBack />
        </button>
        <span className="font-semibold text-base">Filters</span>
        <div></div>
      </div>

      <div className="mb-4">
        <div className="text-left">
          <span className="text-sm text-ColorCharactersSpecie font-medium md:hidden">
            Characters
          </span>

          <span className="text-sm hidden md:flex text-ColorCharactersSpecie font-medium">
            Character
          </span>
        </div>
        <div className="w-full flex justify-between mt-2">
          <button
            className={` h-10 w-20 border border-gray-200 rounded-lg font-semibold text-sm ${
              CharacterButton === "all" && "bg-primary100 text-primary600"
            }`}
            onClick={() => handleCharacterFilter("all")}
          >
            All
          </button>
          <button
            className={` h-10 w-20 border border-gray-200 rounded-lg font-semibold text-sm ${
              CharacterButton === "starred" && "bg-primary100 text-primary600"
            }`}
            onClick={() => handleCharacterFilter("starred")}
          >
            Starred
          </button>
          <button
            className={` h-10 w-20 border border-gray-200 rounded-lg font-semibold text-sm ${
              CharacterButton === "others" && "bg-primary100 text-primary600"
            }`}
            onClick={() => handleCharacterFilter("others")}
          >
            Others
          </button>
        </div>
      </div>
      <div className="mb-4">
        <div className="text-left">
          <span className="text-sm  text-ColorCharactersSpecie font-medium">
            Specie
          </span>
        </div>
        <div className="w-full flex justify-between mt-2">
          <button
            className={` h-10 w-20 border border-gray-200 rounded-lg font-semibold text-sm ${
              SpecieButton === "all" && "bg-primary100 text-primary600"
            }`}
            onClick={() => handleSpecieFilter("all")}
          >
            All
          </button>
          <button
            className={` h-10 w-20 border border-gray-200 rounded-lg font-semibold text-sm ${
              SpecieButton === "human" && "bg-primary100 text-primary600"
            }`}
            onClick={() => handleSpecieFilter("human")}
          >
            Human
          </button>
          <button
            className={` h-10 w-20 border border-gray-200 rounded-lg font-semibold text-sm ${
              SpecieButton === "alien" && "bg-primary100 text-primary600"
            }`}
            onClick={() => handleSpecieFilter("alien")}
            value={CharacterButton}
          >
            Alien
          </button>
        </div>
      </div>

      {/* criterio propio */}
      <div className="mb-5">
        <div className="text-left">
          <span className=" font-medium text-sm text-ColorCharactersSpecie ">
            Sort
          </span>
        </div>
        <div className="w-full flex justify-between mt-2">
          <button
            className={` active:bg-primary100 active:text-primary600 h-10 w-20 border border-gray-200 rounded-lg font-semibold text-sm `}
            onClick={() => {
              dispatch({ type: types.SortAZ, payload: "a-z" });
              props.setHidden(!props.hidden);
              props.setFilterActive(false);
            }}
          >
            A - Z
          </button>
          <button
            className={`active:bg-primary100 active:text-primary600  h-10 w-20 border border-gray-200 rounded-lg font-semibold text-sm `}
            onClick={() => {
              dispatch({ type: types.SortAZ, payload: "z-a" });
              props.setHidden(!props.hidden);
              props.setFilterActive(false);
            }}
          >
            Z - A
          </button>
          <button
            className={` active:bg-primary100 active:text-primary600 h-10 w-20 border border-gray-200 rounded-lg font-semibold text-sm `}
            onClick={() => {
              getCharacters(dispatch);
              props.setHidden(!props.hidden);
              props.setFilterActive(false);
            }}
          >
            RESET
          </button>
        </div>
      </div>

      <div className="w-full h-10 bottom-10 absolute p-4 left-0 md:relative md:p-0 md:bottom-0">
        <button
          className="bg-graySearchBar text-ColorCharactersSpecie w-full h-10 bottom-0 rounded-lg active:bg-primary600 active:text-white"
          onClick={() => {
            handleFilters();
            props.setHidden(!props.hidden);
            props.setFilterActive(true);
          }}
        >
          Filter
        </button>
      </div>
    </div>
  );
}
