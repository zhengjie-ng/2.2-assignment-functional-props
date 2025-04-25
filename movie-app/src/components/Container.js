import Header from "./Header";
import Genre from "./Genre";
import "./Container.css";

function Container() {
  return (
    <div className="App">
      <Header />
      <Genre
        movieTitle="Little Man"
        year="2006"
        imgUrl="https://i.postimg.cc/mkcYS65n/Little-Man.png"
        genreName="Comedy"
        genreDesc="Funny"
        direction="row-reverse"
      />
      <Genre
        movieTitle="Megamind"
        year="2010"
        imgUrl="https://i.postimg.cc/XJYcrvc4/Megamind.png"
        genreName="Comedy"
        genreDesc="For Family"
        bgColor="rgb(243, 180, 4)"
      />
      <Genre
        movieTitle="Lala Land"
        year="2016"
        imgUrl="https://i.postimg.cc/Hxv0XCB5/LalaLand.png"
        genreName="Romance"
        genreDesc="Musical"
        bgColor="rgb(117, 53, 225)"
        direction="row-reverse"
      />
      <Genre
        movieTitle="A Romance of the Little-Forest"
        year="2022"
        imgUrl="https://i.postimg.cc/FKZVFSST/A-Romance-of-the-Little-Forest.png"
        genreName="Romance"
        genreDesc="Heartwarming"
        bgColor="rgb(243, 247, 239)"
      />
    </div>
  );
}

export default Container;

//https://i.postimg.cc/mkcYS65n/Little-Man.png
//https://i.postimg.cc/XJYcrvc4/Megamind.png
//https://i.postimg.cc/Hxv0XCB5/LalaLand.png
//https://i.postimg.cc/FKZVFSST/A-Romance-of-the-Little-Forest.png
