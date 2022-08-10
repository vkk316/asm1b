// ส่วนที่ 2

import * as React from "react"
import Layout from "../components/layout"
import { graphql } from "gatsby"

export default function MemberInfoPage({ data }) {
  const member = data.directus.Member[0] //เข้าถึงข้อมูลของสมาชิกผ่านตัวแปร member

  return (
    <Layout>
      {
        console.log(member)
      }
    </Layout>
  )
}

export const query = graphql`
  query MyQuery($std_id: String) {
    directus {
      Member(filter: { student_id: { _eq: $std_id } }) {
        student_id
        first_name
        last_name
        enrollment {
          Section_id {
            number
            subject {
              title
            }
          }
        }
      }
    }
  }
`
