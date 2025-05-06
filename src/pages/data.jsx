import image1 from "./image/1.jpg";
import image2 from "./image/2.jpg";
import image3 from "./image/3.jpg";
import image4 from "./image/4.jpg";
import image5 from "./image/5.jpg";
import image6 from "./image/6.jpg";
import image7 from "./image/7.jpg";
import image8 from "./image/8.jpg";
import image9 from "./image/9.jpg";
import image10 from "./image/10.jpg";
import image11 from "./image/11.jpg";
import image12 from "./image/12.jpg";
import image13 from "./image/13.jpg";
import cashew from "./image/fruits/Cashew.png";
import ajwa from "./image/fruits/Ajwa-Dates.png";
import almond from "./image/fruits/Almond.png";
import walnuts from "./image/fruits/Walnuts.png";

const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11, image12, image13];

const CarouselData = [
  {
    name: "Cashew",
    desc: "We Provide the Best Cashew",
    bgImage: image2,
    frontImage: cashew,
  },
  {
    name: "Almond",
    desc: "We Provide the Best Almond",
    bgImage: image1,
    frontImage: almond,
  },
  {
    name: "Dates",
    desc: "We Provide the Best Dates",
    bgImage: image3,
    frontImage: ajwa,
  },
  {
    name: "Walnuts",
    desc: "We Provide the Best Walnuts",
    bgImage: image4,
    frontImage: walnuts,
  },
];

export { images, CarouselData };
