import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import Profile from "../components/profile"

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {

  const data = useStaticQuery(graphql`
  query{
    directus{
      Team{
        name
      }
    }
  }
  `)

  return (
    <Layout>
    <Seo title="Home" />
    <section className="py-5 text-center container">
      <div className="row py-lg-5">
        <div className="col-lg-6 col-md-8 mx-auto">
          <h1 className="fw-light">Hello world ! </h1>
          <p className="lead text-muted"> {data.directus.Team[0].name} </p>
          <StaticImage
            src="../images/gatsby-astronaut.png"
            width={300}
            quality={95}
            formats={["AUTO", "WEBP"]}
            alt="A Gatsby astronaut"
            className="img-fluid"
          />

        </div>
      </div>
      <div className="row">
        <Link to="/about/" className="btn btn-primary my-2">Team</Link>
        <Link to="/page-2/" className="btn btn-secondary my-2">Subject</Link>
      </div>
    </section>
  </Layout>
  )
}

export default IndexPage
