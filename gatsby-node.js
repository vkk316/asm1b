const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const mem = await graphql(`
    query {
      directus {
        Member {
          student_id
          first_name
          last_name
          enrollment {
            Section_id {
              number
              subject {
                id
                title
              }
              periods {
                day
                start
                end
              }
            }
          }
        }
      }
    }
  `).then(res => res.data)

  mem.directus.Member.forEach(member => {
    actions.createPage({
      path: "/member/" + member.student_id,
      component: path.resolve("./src/components/member.js"),
      context: { member: member },
    })
  })

  const g = await graphql(`
    query {
      directus {
        Subject{
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
  `).then(res => res.data)

  g.directus.Subject.forEach(subject => {
    actions.createPage({
      path: "/subject/" + subject.id,
      component: path.resolve("./src/components/subject-detail.js"),
      context: { subject: subject },
    })
  })
}
