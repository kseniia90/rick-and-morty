import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AiOutlineArrowLeft } from "react-icons/ai";

function CharacterDetails() {
  const { id } = useParams();
  let api = `https://rickandmortyapi.com/api/character/${id}`;
  let [fetchedData, setFetchedData] = useState([]);
  let { name, image, gender, status, species, origin, type } = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      setFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="details">
      <Link to="/">
        {" "}
        <p className="details__link">
          {" "}
          <AiOutlineArrowLeft className="icon-arrow" />
          <span className="details__link_text">go back</span>{" "}
        </p>
      </Link>
      <div className="details__card">
        <img className="details__img" src={image} alt="CharacterAvatar" />
        <p className="details__name">{name}</p>
        <p className="details__info">Informations</p>
        <ul className="details__list">
          <li className="details__param">
            Gender{" "}
            <p className="details__param_value">
              {gender === "" ? "Unknown" : gender}
            </p>
          </li>
          <li className="details__param">
            Status{" "}
            <p className="details__param_value">
              {status === "" ? "Unknown" : status}
            </p>
          </li>
          <li className="details__param">
            Specie{" "}
            <p className="details__param_value">
              {species === "" ? "Unknown" : species}
            </p>
          </li>
          <li className="details__param">
            Origin <p className="details__param_value">{origin?.name}</p>
          </li>
          <li className="details__param">
            Type{" "}
            <p className="details__param_value">
              {type === "" ? "Unknown" : type}
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default CharacterDetails;
