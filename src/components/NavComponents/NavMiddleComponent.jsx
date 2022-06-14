import { Link } from "react-router-dom";

const NavMiddleComponent = () => {
  return (
    <div className="hidden lg:flex flex-row justify-start text-lg font-semibold text-white">
      <div className="px-4">
        <Link to="/">Home</Link>
      </div>
      <div className="px-4">
        <Link to="/products">Products</Link>
      </div>
      <div className="px-4">
        <Link to="/">Categories</Link>
      </div>
      <div className="px-4">
        <Link to="/">AboutUs</Link>
      </div>
    </div>
  );
};

export default NavMiddleComponent;
