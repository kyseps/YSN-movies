import { Carousel } from "antd";
import "./MySlider.css";

const contentStyle = {
  height: "100vh",
  width: "100%",
  objectFit: "cover",
  color: "#fff",
  zIndex: "1000",
};

export default function MySlider() {
  const movieImg = [
    {
      img: "../public/inception.jpg",
      ptag: "filme khafan",
    },
    {
      img: "../public/shutter-island.jpg",
      ptag: "filme nakhafan",
    },
    {
      img: "../public/The_Dark_Knight_Rises.jpg",
      ptag: "filme hfhfh",
    },
    {
      img: "../public/the-shape-of-water.jpg",
      ptag: "filme dsdsd",
    },
  ];

  return (
    <div className="sliderDiv">
      <Carousel style={{ background: "linear-gradient(red , green , blue )"}} autoplay>
        {movieImg.map((item) => (
          <div style={{ background: "linear-gradient(red , green , blue )"}}>
            <img src={item.img} style={contentStyle} />
            <p style={{ position: "absolute" }}>{item.ptag}</p>
          </div>
        ))}
      </Carousel>
    </div>
  );
}
