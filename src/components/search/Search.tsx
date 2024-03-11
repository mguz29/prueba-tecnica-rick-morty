import { useContext, useState } from "react";
import FilterIcon from "../../icons/filterIcon";
import SearchICon from "../../icons/searchIcon";
import { StoreContext } from "../../store/StoreProvider";
import { types } from "../../store/StoreReducer";

interface propsComponent {
  setHidden: React.Dispatch<React.SetStateAction<boolean>>;
  hidden: boolean;
}

export default function Search(props: propsComponent) {
  //@ts-ignore
  const [state, dispatch] = useContext(StoreContext);
  const [input, setInput] = useState("");

  const onSearch = (input: string) => {
    dispatch({ type: types.search, payload: input });
  };

  const handleSearch = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(input);
  };

  const handleInputChnage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
  };
  return (
    <div className="bg-graySearchBar h-14 rounded-lg flex content-between w-full">
      <div className="flex h-full justify-between items-center w-full">
        <form
          className="flex"
          onSubmit={(e) => {
            handleSearch(e);
          }}
        >
          <button className="m-4" type="submit">
            <SearchICon />
          </button>
          <input
            placeholder="Search or filter results"
            name="search"
            className="bg-transparent outline-0"
            type="text"
            value={input}
            onChange={handleInputChnage}
          />
        </form>
        <button
          className="m-4 flex "
          onClick={() => {
            props.setHidden(!props.hidden);
          }}
        >
          <FilterIcon />
        </button>
      </div>
    </div>
  );
}
