import { useAuth0 } from "@auth0/auth0-react";

const LoginPage = () => {
  const { loginWithRedirect, logout, isAuthenticated } = useAuth0();
  console.log(isAuthenticated);
  console.log(loginWithRedirect);
  return (
    <div className="mx-auto pt-28">
      {(!isAuthenticated && (
        <button onClick={() => loginWithRedirect()}>Log In</button>
      )) ||
        (isAuthenticated && (
          <button
            onClick={() =>
              logout({ logoutParams: { returnTo: window.location.origin } })
            }
          >
            Log Out
          </button>
        ))}
    </div>
  );
};

export default LoginPage;
