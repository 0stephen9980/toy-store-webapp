import { SocialMediaButtons } from "../../components/SocialMediaButtons";
import { TiPlus, TiMinus } from "react-icons/ti";
import { Collapse, Divider } from "@chakra-ui/react";
import { useState } from "react";

const info = [
  {
    ServiceName: "Our Offerings",
    Services: ["Electronic Toys", "Wooden Toys", "Super Hero Toys"],
    show: false,
  },
  {
    ServiceName: "Support",
    Services: ["Locate us", "FAQ", "Track order", "Contact us"],
    show: false,
  },
  { ServiceName: "Our Company", Services: ["Fun And Joy"], show: false },
  {
    ServiceName: "Useful links",
    Services: ["Categories", "Best Selling Toys", "Super Hero Toys"],
    show: false,
  },
];

export const FooterInfo = () => {
  const [OpenedIndex, setOpenedIndex] = useState(null);
  const handleOpenClick = (value) => {
    if (OpenedIndex === value) setOpenedIndex(null);
    else setOpenedIndex(value);
  };
  return (
    <div className="responsive w-full min-h-[10rem] py-8 bg-slate-100 lg:bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-5 bg-white rounded-md px-4 lg:px-0">
        {info &&
          info.map((item, index) => {
            return (
              <div key={index} className="px-2 ">
                <h1 className="hidden lg:flex pl-2 text-xl font-semibold py-4">
                  {item.ServiceName}
                </h1>
                <div
                  className="flex flex-col w-full lg:hidden"
                  onClick={() => handleOpenClick(index)}
                >
                  <div
                    className="flex justify-between cursor-pointer items-center"
                    index={index}
                  >
                    <h1
                      className="pl-2 cursor-pointer font-semibold py-4"
                      index={index}
                    >
                      {item.ServiceName}
                    </h1>
                    {OpenedIndex === index ? (
                      <TiMinus index={index} />
                    ) : (
                      <TiPlus index={index} />
                    )}
                  </div>
                  <Collapse
                    className={`${
                      OpenedIndex === index ? `flex flex-col` : `hidden`
                    }`}
                    in={OpenedIndex === index}
                    animateOpacity
                  >
                    {item.Services &&
                      item.Services.map((service, index) => (
                        <p
                          key={index}
                          className="pl-2 my-1 py-1 w-full cursor-pointer"
                        >
                          {service}
                        </p>
                      ))}
                  </Collapse>
                  <Divider size="lg" />
                </div>
                <div className="hidden lg:flex flex-col justify-center items-center">
                  {item.Services &&
                    item.Services.map((service, index) => (
                      <p
                        key={index}
                        className="pl-2 my-1 py-1 w-full hover:bg-gray-300 hover:rounded-md cursor-pointer"
                      >
                        {service}
                      </p>
                    ))}
                </div>
              </div>
            );
          })}
        <SocialMediaButtons />
      </div>
    </div>
  );
};
