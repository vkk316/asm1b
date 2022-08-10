//ส่วนที่ 4

import * as React from "react"
import Layout from "./layout"

export default function SubjectDetailPage(props) {
  const subject = props.pageContext.subject

  return (
    <Layout>
      {
        <section className="py-5 container">
          <div>
            <h2>{subject.id}</h2> <h2>{subject.title}</h2>
          </div>
          <hr />
          {subject.sections.map(sec => (
            <SectionCard data={sec} key={sec.number}></SectionCard>
          ))}
        </section>
      }
    </Layout>
  )
}

function SectionCard(props) {
  const sec = props.data
  return (
    <div class="card w-100 mt-4">
      <div class="card-body">
        <h5 class="card-title">Section {sec.number}</h5>
        {sec.periods.map(p => (
          <h6>
            {p.day} {p.start} - {p.end}
          </h6>
        ))}
        <hr />
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Student ID</th>
              <th scope="col">First Name</th>
              <th scope="col">Last Name</th>
            </tr>
          </thead>
          <tbody>
            {sec.student.map(std => (
              <tr>
                <th scope="row">{std.Member_id.student_id}</th>
                <td>{std.Member_id.first_name}</td>
                <td>{std.Member_id.last_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}
