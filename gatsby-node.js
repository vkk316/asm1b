const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const mem = await graphql(`
    query {
      directus {
        Member {
          student_id
        }
      }
    }
  `).then(res => res.data)

  mem.directus.Member.forEach(member => {
    actions.createPage({
      path: "/member/" + member.student_id,
      component: path.resolve("./src/pages/member.js"),
      context: { std_id: member.student_id },
    })
  })

  const g = await graphql(`
    query {
      directus {
        Subject {
          id
        }
      }
    }
  `).then(res => res.data)

  g.directus.Subject.forEach(subject => {
    actions.createPage({
      path: "/subject/" + subject.id,
      component: path.resolve("./src/pages/subject-detail.js"),
      context: { subject_id: subject.id },
    })
  })
}
