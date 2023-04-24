import { withAuthenticationRequired } from "@auth0/auth0-react";
import PropagateLoader from "react-spinners/PropagateLoader";

const ProtectedRoute = (component) => {
  return withAuthenticationRequired(component, {
    onRedirecting: () => (
      <div className="flex flex-col justify-between items-center pt-40 mx-auto">
        <h1 className="text-3xl mb-4">Redirecting you to the login page...</h1>
        <PropagateLoader
          className=""
          color="#36d7b7"
          cssOverride={{
            margin: "1rem auto",
            display: "inline-block",
            width: "100%",
            height: "100%",
            textAlign: "center",
          }}
        />
      </div>
    ),
  });
};

export default ProtectedRoute;
