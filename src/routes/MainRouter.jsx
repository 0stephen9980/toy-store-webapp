import { BrowserRouter, Route, Routes } from "react-router-dom";
import UserAuthenticateComponent from "../components/UserAuthenticateComponent";
import Cart from "../pages/Cart/Cart";
import { Home } from "../pages/HomePage/Home";
import Profile from "../pages/MyProfile/Profile";
import Product from "../pages/Product/Product";
import ProductDetails from "../pages/ProductDetails/ProductDetails";
import { AuthenticatedRoute } from "./AuthenticatedRoute";

export const MainRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthenticatedRoute />}>
          <Route index path="/" element={<Home />} />
          <Route index path="/products" element={<Product />} />
          <Route index path="/product/:id" element={<ProductDetails />} />
          <Route index path="/cart" element={<Cart />} />
          <Route
            index
            path="/userauth"
            element={<UserAuthenticateComponent />}
          />
          <Route index path="/me" element={<Profile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};
