import { Link } from "react-router-dom";

function SideBar() {
  return (
    <div className="lg:hidden w-[70%] bg-white h-[100vh] fix">
      <div className="flex flex-col justify-start text-lg font-semibold text-black bg-slate-100">
        <div className="px-4 my-1 py-1 w-full flex">
          <span className="w-full flex items-center cursor-pointer hover:bg-green-100 hover:rounded-md active:bg-gray-100 h-12">
            <Link className="ml-4" to="/">
              Home
            </Link>
          </span>
        </div>
        <div className="px-4 my-1 py-1 w-full flex">
          <span className="w-full flex items-center cursor-pointer hover:bg-green-100 hover:rounded-md active:bg-gray-100 h-12">
            <Link className="ml-4" to="/products">
              Products
            </Link>
          </span>
        </div>
        <div className="px-4 my-1 py-1 w-full flex">
          <span className="w-full flex items-center cursor-pointer hover:bg-green-100 hover:rounded-md active:bg-gray-100 h-12">
            <Link className="ml-4" to="/">
              Categories
            </Link>
          </span>
        </div>
        <div className="px-4 my-1 py-1 w-full flex">
          <span className="w-full flex items-center cursor-pointer hover:bg-green-100 hover:rounded-md active:bg-gray-100 h-12">
            <Link className="ml-4" to="/">
              AboutUs
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}

export default SideBar;
