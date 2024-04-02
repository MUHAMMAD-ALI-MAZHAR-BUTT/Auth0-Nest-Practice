import { useAuth0 } from "@auth0/auth0-react";
export default function Home() {
  const { loginWithRedirect } = useAuth0();

  return (
    <>
      <h1 className="text-[125px] text-bold">
        Welcome to Auth0 Practice Project
      </h1>
      <button onClick={() => loginWithRedirect()}>Log In</button>
    </>
  );
}
