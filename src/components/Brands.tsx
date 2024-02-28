import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const images = ["/logos/dettol.png", "logos/jif.png", "/logos/tide.png",
  "/logos/omo.png", "/logos/ariel.png", "/logos/fairy.png", "/logos/lux.png"];

const Brands = () => {
  return (
    <div className="flex flex-col ">
      <span className=" items-center ">
        <h3 className="py-4 text-center text-2xl text-red-700">What we provide</h3>
        <h1 className='text-center font-bold py-10 p-0 text-7xl'>Our Brands</h1>
      </span>

      <Carousel
        className=""
        centerMode={true}
        additionalTransfrom={0}
        arrows
        autoPlay
        autoPlaySpeed={2000}
        containerClass="container-with-dots"
        dotListClass=""
        draggable
        focusOnSelect={false}
        infinite
        itemClass=""
        keyBoardControl
        minimumTouchDrag={80}
        pauseOnHover
        renderArrowsWhenDisabled={false}
        renderButtonGroupOutside={false}
        renderDotsOutside={false}
        responsive={{
          desktop: {
            breakpoint: {
              max: 3000,
              min: 1024
            },
            items: 5,
            partialVisibilityGutter: 0
          },
          mobile: {
            breakpoint: {
              max: 464,
              min: 0
            },
            items: 3,
            partialVisibilityGutter: 30
          },
          tablet: {
            breakpoint: {
              max: 1024,
              min: 464
            },
            items: 1,
            partialVisibilityGutter: 30
          }
        }}
        rewind={false}
        rewindWithAnimation={false}
        rtl={false}
        shouldResetAutoplay
        showDots={false}
        sliderClass=""
        slidesToSlide={1}
        swipeable
      >
        {images.map((name) =>
          <div className="">
            <img src={name} className="" />
        </div>      
        )}

      </Carousel>
    </div>
    
  );
};

export default Brands
