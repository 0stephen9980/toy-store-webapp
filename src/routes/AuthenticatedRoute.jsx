import { Outlet, useLocation } from "react-router-dom";
import { FooterInfo } from "../pages/NavigationPages/FooterInfo";
import { TopNavBar } from "../pages/NavigationPages/TopNavBar";
import ScrollToTopButton from "../components/ScrollToTopButton";

export const AuthenticatedRoute = () => {
  const location = useLocation();
  console.log(location);
  const RenderChild = () => (
    <div className="w-full min-h-[100vh]">
      <TopNavBar />
      <div className="min-h-[60rem]">
        <Outlet />
      </div>
      <ScrollToTopButton />
      <FooterInfo />
    </div>
  );

  return <RenderChild />;
};
