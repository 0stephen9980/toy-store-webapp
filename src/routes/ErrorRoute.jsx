import { Outlet } from "react-router-dom";

function ErrorRoute() {
  return (
    <div className="w-full h-[100vh] flex justify-center items-center">
      <Outlet />
    </div>
  );
}

export default ErrorRoute;
