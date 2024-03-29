import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";

const boolean=false;

const images = [
  {
    original: "/office.jpg",
  },
  {
    original: "/building.jpg",
  },
  {
    original: "/factory.jpg",
  },
];

const Slideshow = () => {
  return (
    <div className="">
      <ImageGallery 
      items={images} 
      showPlayButton={false} 
      showFullscreenButton={false}
      autoPlay={true}
      slideInterval={5000} />
    </div>
  )
}

export default Slideshow;