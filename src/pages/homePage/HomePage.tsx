import { Link, Outlet, useParams } from "react-router-dom";
import Search from "../../components/search/Search";
import List from "../../components/List/List";
import { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../store/StoreProvider";
import { getCharacters } from "../../services/getCharacters";
import Filters from "../../components/filters/Filters";
import ArrowBack from "../../icons/arrowBack";

export default function HomePage() {
  //@ts-ignore
  const [filterActive, setFilterActive] = useState(false);
  const [state, dispatch] = useContext(StoreContext);
  const [hidden, setHidden] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    getCharacters(dispatch);
  }, []);

  return (
    <div className="flex">
      <div
        className={`w-full  bg-gray-50 overflow-hidden md:p-4 flex flex-col border-r-black h-full lg:min-w-60 md:max-w-80 ${
          hidden && "p-4"
        }`}
      >
        {!hidden && (
          <div className=" h-screen  w-full z-50 fixed md:absolute md:h-10 lg:w-11/12 lg:max-w-72 lg:top-40 lg:shadow-md lg:rounded-lg">
            <Filters
              setHidden={setHidden}
              hidden={hidden}
              setFilterActive={setFilterActive}
              filterActive={filterActive}
            />
          </div>
        )}
        <div className="pt-4 h-20">
          <p className="text-start text-black font-bold text-2xl">
            Rick and Morty list
          </p>
        </div>
        <div>
          <Search hidden={hidden} setHidden={setHidden} />
        </div>
        <div className="h-full  bg-gray-50">
          {filterActive ? (
            <List
              filterActive={filterActive}
              setFilterActive={setFilterActive}
              title="Results"
              characters={state?.charactersFilters}
            />
          ) : (
            state.favorites.length > 0 && (
              <List title="STARRED CHARACTERS" characters={state?.favorites} />
            )
          )}
          <List title="CHARACTERS" characters={state?.characters} />
        </div>
      </div>
      <div
        id="detail"
        className={`w-full h-screen bg-white px-10 py-10  md:flex md:relative md:p-0 ${
          id === undefined ? "hidden" : "absolute"
        }`}
      >
        <div className="md:hidden mb-6">
          <div className="md:hidden flex items-center justify-between ">
            <Link to="/">
              <ArrowBack />
            </Link>
            <div></div>
          </div>
        </div>{" "}
        <Outlet />
      </div>
    </div>
  );
}
