import { useAuth0 } from "@auth0/auth0-react";
import Image from "next/image";
const Profile = () => {
  const { user, logout } = useAuth0();
  return (
    <>
      {" "}
      <div>
        <Image src={user.picture} alt={user.name}  />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
      <button
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log Out
      </button>
    </>
  );
};

export default Profile;
