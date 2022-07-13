import { Divider } from "@chakra-ui/react";
function ProductMarketingInfo() {
  return (
    <div className="grid grid-cols-3 bg-green-300 shadow-lg rounded-md mt-4 p-4 cursor-default font-bold">
      <div className="flex flex-row py-2 justify-center items-center">
        <img src={require("../../assets/sales (1).png")} alt="sales" />
        <span className="ml-2 lg:ml-0">Lowest Price</span>
        <Divider
          size="lg"
          orientation="vertical"
          className="border-white sm:ml-5"
        />
      </div>
      <div className="flex flex-row py-2 justify-center items-center">
        <img src={require("../../assets/sales (1).png")} alt="sales" />
        <span className="ml-2 lg:ml-0">Cash on delivery</span>
        <Divider
          size="lg"
          orientation="vertical"
          className="border-white sm:ml-5"
        />
      </div>
      <div className="flex flex-row py-2 justify-center items-center">
        <img src={require("../../assets/sales (1).png")} alt="sales" />
        <span className="ml-2 lg:ml-0">7-day Returns</span>
      </div>
    </div>
  );
}

export default ProductMarketingInfo;
