// ส่วนที่ 3

import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default function MemberInfoPage() {
  const data = useStaticQuery(graphql`
    query {
      directus {
        Subject {
          title
          sections {
            number
          }
        }
      }
    }
  `)

  return (
    <Layout>
      { //ตัวอย่างการเข้าถึงเข้าถึงข้อมูล
      /* {data.directus.Subject.map(subject => (
        <div>
          <h1>{subject.title} | {subject.sections.map((section) => <span>{section.number}</span>)}</h1>
        </div>
      ))} */}

      {/* วางข้อมูลของคุณที่นี่ */}
    </Layout>
  )
}
