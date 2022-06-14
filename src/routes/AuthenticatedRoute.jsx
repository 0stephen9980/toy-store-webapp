import { Outlet } from "react-router-dom";
import { FooterInfo } from "../pages/NavigationPages/FooterInfo";
import { TopNavBar } from "../pages/NavigationPages/TopNavBar";

export const AuthenticatedRoute = () => {
  const RenderChild = () => (
    <div className="w-full min-h-[100vh]">
      <TopNavBar />
      <Outlet />
      <FooterInfo />
    </div>
  );

  return <RenderChild />;
};
