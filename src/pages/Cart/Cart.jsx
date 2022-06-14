import { VisuallyHidden } from "@chakra-ui/react";
import { useState } from "react";
import UserAuthenticateComponent from "../../components/UserAuthenticateComponent";

const Cart = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  return (
    <div>
      {!isLoggedIn ? (
        <VisuallyHidden>
          <UserAuthenticateComponent />
        </VisuallyHidden>
      ) : (
        <div>Cart</div>
      )}
    </div>
  );
};

export default Cart;
