import * as React from "react"
import Layout from "../components/layout"
import { useStaticQuery, graphql } from "gatsby"

export default function SubjectDetailPage(props) {
  const subject_id = props.pageContext.subject_id
  // const data = useStaticQuery(graphql`
  //   query {
  //     Subject {
  //       id
  //       title
  //       sections {
  //         periods {
  //           day
  //           start
  //           end
  //         }
  //         number
  //         student {
  //           Member_id {
  //             student_id
  //             first_name
  //             last_name
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  return <Layout>{console.log(subject_id)}</Layout>
}

// export const query = (context) => graphql`
//   query {
//     Subject {
//       id
//       title
//       sections {
//         periods {
//           day
//           start
//           end
//         }
//         number
//         student {
//           Member_id {
//             student_id
//             first_name
//             last_name
//           }
//         }
//       }
//     }
//   }
// `;