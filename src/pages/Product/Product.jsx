import Rating from "../../components/Rating";
import { CartState } from "../../hooks/Context";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { state } = CartState();
  const history = useNavigate();

  const ViewProduct = (item) => {
    console.log(item);
    // history(`/product/${item.id}`);
  };

  return (
    <div className="responsive grid grid-cols-2 lg:grid-cols-4 gap-6 mt-4">
      {state &&
        state.fakeData.map((item) => (
          <div key={item.id}>
            <div
              className="shadow-xl hover:translate-y-1 hover:scale-105 w-[20rem] h-[25rem] rounded-lg cursor-pointer"
              onClick={() => ViewProduct(item)}
            >
              <img
                src={item.image}
                alt="product"
                className="w-[25rem] h-[20rem] rounded-t-md"
              />
              <div className="w-full flex flex-col px-2">
                <span className="text-md font-semibold capitalize">
                  {item.name}
                </span>
                <div className="w-full flex">
                  <Rating
                    className="flex"
                    name="Rating"
                    value={item.ratings}
                    IsEditMode={false}
                  />
                  <span className="pl-2 text-md text-gray-400 bottom-[1px] relative font-semibold">
                    {item.comments}
                  </span>
                </div>
                <div>
                  <div className="flex">
                    <p>₹</p>
                    <span className="text-xl">{item.price}</span>
                    <span className="line-through flex items-end ml-1">
                      ₹{Number(item.price) + 400}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
