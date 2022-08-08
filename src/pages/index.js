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
      Member{
        first_name,
        last_name
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
        {data.directus.Member.map((x) => <Profile data={x} key={x.first_name}></Profile>)}
        </div>
      </div>
    </section>
  </Layout>
  )
}

export default IndexPage
