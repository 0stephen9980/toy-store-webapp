import { Link } from "react-router-dom";

const NavMiddleComponent = () => {

  const scrollTop = () => {
    window.scrollTo(0, 0);
  };

  return (
    <div className="hidden lg:flex flex-row justify-start text-lg font-semibold text-white">
      <div className="px-4">
        <Link to="/" onClick={() => scrollTop()}>
          Home
        </Link>
      </div>
      <div className="px-4">
        <Link to="/products" onClick={() => scrollTop()}>
          Products
        </Link>
      </div>
      <div className="px-4">
        <Link to="/" onClick={() => scrollTop()}>
          Categories
        </Link>
      </div>
      <div className="px-4">
        <Link to="/" onClick={() => scrollTop()}>
          AboutUs
        </Link>
      </div>
    </div>
  );
};

export default NavMiddleComponent;
