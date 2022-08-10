// ส่วนที่ 1

import * as React from "react"
import Layout from "../components/layout"
import Profile from "../components/profile"

import { useStaticQuery, graphql } from "gatsby"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    query {
      directus {
        Member {
          student_id
          first_name
          last_name
          profile_img {
            id
            width
            height
            imageFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <section className="py-5 text-center container">
        <div className="row py-lg-5">
          {data.directus.Member.map(x => (
            <Profile data={x} key={x.student_id}></Profile>
          ))}
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
