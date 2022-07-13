import { useState } from "react";
import { Divider } from "@chakra-ui/react";
const ProductImage = ({ data }) => {
  const [currentVal, setCurrentVal] = useState(0);
  const [zoomInage, setZoomImage] = useState(data.image[0]);

  const handleClick = (i) => {
    setCurrentVal(i);
    setZoomImage(data.image[i]);
  };

  return (
    <div className="grid justify-center items-center">
      <img
        className="rounded-lg grid object-cover"
        src={zoomInage}
        alt="image"
      />
      <div className="grid grid-cols-4 gap-x-4 gap-y-4 md:ml-8 lg:ml-1 xl:ml-3 overflow-hidden">
        {data?.image.map((image, index) => (
          <div
            key={index}
            className={`w-[12vh] mt-4 sm:w-[15vh] lg:w-[12vh] xl:w-[15vh] cursor-pointer ${
              currentVal == index ? `border-4 border-green-400` : null
            }`}
            onClick={() => handleClick(index)}
          >
            <img
              src={image}
              alt="Image"
              className={currentVal != index ? "rounded-xl" : null}
            />
          </div>
        ))}
      </div>
      <div className="lg:hidden mt-5">
        <Divider size="lg" className="border-gray-400" />
      </div>
    </div>
  );
};

export default ProductImage;
