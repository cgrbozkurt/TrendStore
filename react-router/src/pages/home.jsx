import { Fragment } from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <Fragment>
      <h1>My Home Page</h1>
      {/* <a href="/products">Go to Producs Page</a> */}
      <Link to="/products">Go to Producs Page</Link>
    </Fragment>
  );
};

export default HomePage;
