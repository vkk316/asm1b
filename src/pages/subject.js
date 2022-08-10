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

  const subjects = data.directus.Subject //เข้าถึงข้อมูลของรายวิชาที่มีอยู่ในระบบผ่าน ตัวแปร subject (เป็นตัวแปร array นะครับ)

  return (
    <Layout>
      {
        // Write your code here.
      }
    </Layout>
  )
}
