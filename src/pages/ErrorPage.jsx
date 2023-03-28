import { Link, useRouteError } from "react-router-dom";
import Nav from "../components/Nav";
import classes from "./ErrorPage.module.css";
const ErrorPage = () => {
  const error = useRouteError();
  let title = "An error ocurred!";
  let message = "Something went wrong!";

  if (error.status === 404) {
    title = "Look like you're lost";
    message = "The page you are looking for not available!";
  }
  return (
    <>
      <Nav />
      <main className="pt-16">
        <section className={classes.page_404}>
          <div className="flex justify-center my-4 ">
            <div className="w-full text-center">
              <div className={`${classes.four_zero_four_bg} mb-20`}>
                <h1>404</h1>
              </div>

              <div className={classes.content_box_404}>
                <h3>{title}</h3>
                <p>{message}</p>
                <button className="mt-6 icon">
                  <Link to="/" className={` text-white`}>
                    Go to Home
                  </Link>
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default ErrorPage;
