import { charactersProps } from "../../store/StoreReducer";
import ItemList from "./item/ItemList";
interface props {
  title: string;
  characters: charactersProps[];
  setFilterActive?: React.Dispatch<React.SetStateAction<boolean>>;
  filterActive?: boolean;
}

export default function List({ title, characters, filterActive }: props) {
  return (
    <div className="mt-8">
      <div className="text-left mb-4">
        {filterActive ? (
          <div className="flex justify-between">
            <span className="pl-5 text-base font-semibold text-blue-400">
              {characters.length} {title}
            </span>
            <span>
              <div>
                <span className="mx-3 text-sm font-semibold text-secondary700 bg-secondary600 rounded-xl w-10 px-2 bg-opacity-20">
                  1 Filter
                </span>
              </div>
            </span>
          </div>
        ) : (
          <span className="pl-5 text-xs font-semibold text-ColorCharactersSpecie">
            {title} ({characters.length})
          </span>
        )}
      </div>
      <div>
        {characters &&
          characters.map((character) => {
            return (
              <div key={character.id}>
                <ItemList
                  id={character.id}
                  image={character.image}
                  name={character.name}
                  species={character.species}
                  favorite={character.favorite}
                  gender={character.gender}
                  status={character.status}
                />
              </div>
            );
          })}
      </div>
    </div>
  );
}
