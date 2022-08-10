// ส่วนที่ 2

import * as React from "react"
import Layout from "./layout"
import { graphql } from "gatsby"

export default function MemberInfoPage(props) {
  const member = props.pageContext.member
  const sch = member.enrollment

  return (
    <Layout>
      <section className="py-5 container">
        <div>
          <h2>{member.student_id}</h2>{" "}
          <h3>
            {member.first_name} {member.last_name}
          </h3>
        </div>
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Subject ID</th>
              <th scope="col">Subject Name</th>
              <th scope="col">Section</th>
              <th scope="col">Class</th>
            </tr>
          </thead>
          <tbody>
            {sch.map(c => (
              <tr>
                <th scope="row">{c.Section_id.subject.id}</th>
                <td>{c.Section_id.subject.title}</td>
                <td>{c.Section_id.number}</td>
                <td>
                  {c.Section_id.periods.map((p) => (<p>{p.day} {p.start} - {p.end}</p>))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </Layout>
  )
}
