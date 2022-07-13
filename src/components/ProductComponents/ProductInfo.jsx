import ProductDetail from "./ProductDetail";
import ProductMarketingInfo from "./ProductMarketingInfo";
import ProductPricingInfo from "./ProductPricingInfo";
import SellerInfo from "./SellerInfo";

function ProductInfo({ data }) {
  return (
    <div>
      <ProductPricingInfo data={data} />
      <div>
        <ProductDetail name={data.name} toyType="wooden" madeBy="India" />
      </div>
      <div>
        <SellerInfo />
      </div>
      <div>
        <ProductMarketingInfo />
      </div>
    </div>
  );
}

export default ProductInfo;
