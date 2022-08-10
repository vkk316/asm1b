//ส่วนที่ 4

import * as React from "react"
import Layout from "../components/layout"
import {graphql } from "gatsby"

export default function SubjectDetailPage({ data }) {

  const subject = data.directus.Subject[0] //เข้าถึงข้อมูลของสมาชิกผ่านตัวแปร subject

  return <Layout>
    {
      // Write your code here
    }
  </Layout>
}

export const query = graphql`
  query CatQuery($subject_id: String){
    directus {
      Subject(filter: { id: { _eq: $subject_id } }){
        id
        title
        sections {
          periods {
            day
            start
            end
          }
          number
          student {
            Member_id {
              student_id
              first_name
              last_name
            }
          }
        }
      }
    }
  }
`
