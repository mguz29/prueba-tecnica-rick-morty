import { useContext, useEffect } from "react";
import { getCharacterDetail } from "../../services/getDetailCharacter";
import { StoreContext } from "../../store/StoreProvider";
import { useParams } from "react-router-dom";
import { charactersProps } from "../../store/StoreReducer";
import FavoriteIcon from "../../icons/favoriteIcon";
import useFavorites from "../../services/useFavorites";

export default function Detail() {
  const { id } = useParams();
  //@ts-ignore
  const [state, dispatch] = useContext(StoreContext);
  const { name, image, species, status } = state.detailCharacter;

  useEffect(() => {
    getCharacterDetail(dispatch, id);
  }, [id]);

  useEffect(() => {}, [state.favorites.length]);

  const dataStateLocal = state.favorites.filter(
    (character: charactersProps) => character.name === name
  );
  const { handleFavorite } = useFavorites(dispatch, dataStateLocal[0]);

  return (
    <div className=" md:flex md:p-10 md:px-20 justify-start text-left  w-full">
      {state.detailCharacter && (
        <div className="w-full">
          <div className="mb-8">
            <div className="w-20 h-20 flex justify-end items-end">
              <button
                className="bg-white h-7  flex absolute items-center w-6 justify-center rounded-full"
                onClick={() =>
                  handleFavorite({
                    id: id,
                    name: name,
                    image: image,
                    species: species,
                    favorite: !dataStateLocal[0]?.favorite,
                  })
                }
              >
                <FavoriteIcon
                  color={dataStateLocal[0]?.favorite ? "#53C629" : "none"}
                  stroke={dataStateLocal[0]?.favorite ? "0" : "2"}
                />
              </button>
              <img src={image} className="h-20 w-20 rounded-full" />
            </div>
            <div className="mt-2">
              <p className="font-bold text-2xl">{name}</p>
            </div>
          </div>

          <div className="w-full">
            <p className="font-semibold text-base">Specie</p>
            <p className="font-normal text-base text-ColorCharactersSpecie">
              {species}
            </p>
          </div>
          <div className="border-y my-4 py-4 w-full">
            <p className="font-semibold text-base">Status</p>
            <p className="font-normal text-base text-ColorCharactersSpecie">
              {status}
            </p>
          </div>

          <div>
            <p className="font-semibold text-base">Occupation</p>
            <p className="font-normal text-base text-ColorCharactersSpecie">
              {status}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
