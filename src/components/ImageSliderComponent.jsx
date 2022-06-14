import { SlideImageData } from "../localData/ImageData";
import Slider from "react-animated-slider";
import "react-animated-slider/build/horizontal.css";
import { Button } from "@chakra-ui/react";
import { MdArrowForwardIos } from "react-icons/md";

export const ImageSliderComponent = () => {
  return (
    <div>
      <Slider autoplay={2000}>
        {SlideImageData.map((item, index) => (
          <div key={index}>
            {/* <div
              style={{
                background: `url('${item.image}') no-repeat center center`,
                opacity: 0.5,
              }}
            ></div> */}
            <img className="opacity-[0.5]" src={item.image} alt="slider" />
            <div className="top-[10%] responsive w-full absolute md:top-[40%] text-black">
              <div className="mx-10">
                <h1 className="text-2xl lg:text-3xl font-extrabold uppercase">
                  {item.title}
                </h1>
                <p className="text-md lg:w-3/4 lg:text-xl font-semibold">
                  {item.description}
                </p>
                <Button
                  className={`rounded-full mt-4 ${
                    index !== 0 ? `w-60` : `w-40`
                  }`}
                  colorScheme="green"
                  size="lg"
                  variant="solid"
                  type="button"
                  rightIcon={<MdArrowForwardIos size={15} />}
                >
                  {item.buttonText}
                </Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};
