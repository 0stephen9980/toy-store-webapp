import { VisuallyHidden } from "@chakra-ui/react";
import { useState } from "react";
import UserAuthenticateComponent from "../../components/UserAuthenticateComponent";

const Profile = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  return (
    <div>
      {!isLoggedIn ? (
        <VisuallyHidden>
          <UserAuthenticateComponent />
        </VisuallyHidden>
      ) : (
        <div>My Profile</div>
      )}
    </div>
  );
};

export default Profile;
