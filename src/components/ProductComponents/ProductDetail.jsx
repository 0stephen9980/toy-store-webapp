function ProductDetail({ name, toyType, madeBy }) {
  return (
    <div className="border-[1px] border-gray-200 p-4 rounded-md mt-6 shadow-lg">
      <span className="text-lg font-bold">Product Details</span>
      <div>
        <div className="flex flex-row text-gray-400 p-1">
          <span>Name : </span>
          <span className="ml-2">{name}</span>
        </div>
        <div className="flex flex-row text-gray-400 p-1">
          <span>Toy Type : </span>
          <span className="ml-2">{toyType}</span>
        </div>
        <div className="flex flex-row text-gray-400 p-1">
          <span>Made In : </span>
          <span className="ml-2">{madeBy}</span>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
