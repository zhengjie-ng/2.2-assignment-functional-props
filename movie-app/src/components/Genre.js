import Movie from "./Movie";
import Img from "./Img";
import "./Genre.css";

function Genre({
  genreName,
  genreDesc,
  movieTitle,
  imgUrl,
  year,
  bgColor = "white",
  direction = "row",
}) {
  return (
    <div
      className="infoAndImg"
      style={{ backgroundColor: bgColor, flexDirection: direction }}
    >
      <div className="movieInfo">
        <Movie title={movieTitle} year={year} />
        <p>Genre: {genreName}</p>
        <p>Genre Description: {genreDesc}</p>
      </div>
      <Img imgUrl={imgUrl} />
    </div>
  );
}

export default Genre;
