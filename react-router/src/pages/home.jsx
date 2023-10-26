import { Fragment } from "react"
import { Link } from "react-router-dom"
import MainNavigationBar from "../layouts/MainNavigationBar"

const HomePage = () => {
  return (
    <Fragment>
        <MainNavigationBar/>
        <h1>My Home Page</h1>

        <Link to="/products" >Go To Products Page </Link>
    </Fragment>
  )
}

export default HomePage