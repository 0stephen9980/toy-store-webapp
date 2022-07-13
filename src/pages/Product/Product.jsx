import Rating from "../../components/Rating";
import { CartState } from "../../hooks/Context";
import { useNavigate } from "react-router-dom";

const Product = () => {
  const { state } = CartState();
  const history = useNavigate();

  const ViewProduct = (item) => {
    history(`/product/${item.id}`);
  };

  const myChanges = () => (
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

  return (
    <div className="responsive mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {state &&
        state.fakeData.map((item) => (
          <div key={item.id} className="group relative">
            <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:h-80 lg:aspect-none">
              <img
                src={item.image[0]}
                alt="image"
                className="w-full h-full object-center object-cover lg:w-full lg:h-full"
              />
            </div>
            <div className="mt-4 flex justify-between">
              <div>
                <div>
                  <h3 className="text-sm text-gray-700">
                    {/* <a href="#"> */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-0 cursor-pointer"
                      onClick={() => ViewProduct(item)}
                    />
                    {item.name}
                    {/* </a> */}
                  </h3>
                  {/* <p className="mt-1 text-sm text-gray-500">{product.color}</p> */}
                </div>
                <div className="flex">
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
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900 line-through">
                  ₹{Number(item.price) + 400}
                </p>
                <p className="text-sm font-medium text-gray-900">
                  ₹{Number(item.price)}
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Product;
