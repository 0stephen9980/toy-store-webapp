import { useEffect, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import Loading from "../../components/Loading";
import { CartState } from "../../hooks/Context";

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
    <div className="responsive mt-4 min-w-[50rem]">
      {loading ? (
        <Loading />
      ) : (
        <div>
          <img src={productData?.image} alt="product" />
        </div>
      )}
    </div>
  );
};

export default ProductDetails;
