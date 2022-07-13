import { IconButton, Button } from "@chakra-ui/react";
import { FaShopify } from "react-icons/fa";

function SellerInfo() {
  return (
    <div className="border-[1px] border-gray-200 p-4 rounded-md mt-4 w-full shadow-lg">
      <span className="font-bold m-4">Sold By</span>
      <div className="mt-4 ml-4 flex items-center">
        <IconButton
          size="lg"
          className="text-green-500"
          isRound={true}
          icon={<FaShopify size={25} />}
        />
        <div className="w-full px-4">
          <div className="w-full flex flex-row justify-between">
            <span className="font-bold text-lg relative top-1">NEW GEN</span>
            <Button className="border-2 border-green-400" variant="outline">
              Visit Shop
            </Button>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default SellerInfo;
