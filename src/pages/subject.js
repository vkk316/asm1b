import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const Subject = () => (
  <Layout>
    <div className="container text-center my-5">
      <h1>Hi from the second page</h1>
      <p>Welcome to page 2</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default Subject
