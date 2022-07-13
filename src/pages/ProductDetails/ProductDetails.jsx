import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { CartState } from "../../hooks/Context";
import ProductImage from "../../components/ProductComponents/ProductImage";
import ProductInfo from "../../components/ProductComponents/ProductInfo";
import Reviews from "../../components/ProductComponents/Reviews";

const ProductDetails = () => {
  const { state } = CartState();
  const [productData, setProductData] = useState(null);
  const [loading, setLoading] = useState(true);
  const params = useParams();

  useEffect(() => {
    state.fakeData.filter((item) => {
      if (item.id === params.id) {
        setTimeout(() => {
          setProductData(item);
          setLoading(false);
        }, 2000);
      }
    });
  }, []);

  return (
    <div className="responsive mt-14">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:gap-2">
            <div>
              {productData ? <ProductImage data={productData} /> : null}
            </div>
            <div className="w-full h-full">
              {productData ? <ProductInfo data={productData} /> : null}
            </div>
          </div>
          <div className="mt-4">
            <Reviews />
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
