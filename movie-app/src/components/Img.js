import "./Img.css";

function Img({ imgUrl }) {
  return (
    <div>
      <img src={imgUrl} alt="" />
    </div>
  );
}

export default Img;
