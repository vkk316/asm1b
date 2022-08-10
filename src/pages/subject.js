// ส่วนที่ 3

import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql, Link } from "gatsby"

export default function MemberInfoPage() {
  const data = useStaticQuery(graphql`
    query {
      directus {
        Subject {
          id
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
        <section className="py-5 container">
          {subjects.map(subject => (
            <MinSubjectCard subject={subject} key={subject.id}></MinSubjectCard>
          ))}
          <div></div>
        </section>
      }
    </Layout>
  )
}

export function MinSubjectCard(props) {
  return (
    <div class="card my-2">
      <div class="card-body">
        <div class="row no-gutters">
          <div class="col-12 col-sm-6 col-md-8">
            <b>{props.subject.id}</b> {props.subject.title}{" "}
          </div>
          <div class="col-6 col-md-4 text-right">
            <Link
              to={`${props.subject.id}`}
              className="btn btn-primary"
            >
              Detail
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
