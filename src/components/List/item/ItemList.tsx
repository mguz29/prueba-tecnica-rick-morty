import FavoriteIcon from "../../../icons/favoriteIcon";
import { useContext } from "react";
import { StoreContext } from "../../../store/StoreProvider";
import { Link, useParams } from "react-router-dom";
import useFavorites from "../../../services/useFavorites";

interface charactersProps {
  id: number;
  image: string;
  name: string;
  species: string;
  favorite: boolean;
  gender: string;
  status: string;
}
export default function ItemList({
  id,
  image,
  name,
  species,
  favorite,
  gender,
  status,
}: charactersProps) {
  //@ts-ignore
  const [state, dispatch] = useContext(StoreContext);

  const { handleFavorite } = useFavorites(dispatch, {
    id,
    image,
    name,
    species,
    favorite,
    gender,
    status,
  });

  const { id: paramID } = useParams();
  return (
    <div
      className={`h-20 flex items-center pl-5 justify-between border-t pr-4 ${
        paramID !== undefined && paramID == id.toString()
          ? "bg-primary100 rounded-lg "
          : ""
      }`}
    >
      <Link to={`/character/${id}`}>
        <div className="flex items-center">
          <img src={image} className="rounded-full h-9" />
          <div className="flex flex-col text-left mx-4">
            <span className="text-base leading-5 font-semibold">{name}</span>
            <span className="text-base leading-5 text-ColorCharactersSpecie">
              {species}
            </span>
          </div>
        </div>
      </Link>
      <button
        className="bg-white h-7 flex items-center w-7 justify-center rounded-full"
        onClick={() => {
          handleFavorite({
            id: id,
            name: name,
            image: image,
            species: species,
            favorite: !favorite,
            gender: gender,
            status: status,
          });
        }}
      >
        <FavoriteIcon
          color={favorite ? "#53C629" : "none"}
          stroke={favorite ? "0" : "2"}
        />
      </button>
    </div>
  );
}
