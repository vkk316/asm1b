import * as React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"

const Profile = (props) => {

 return (<div className="card" style={{width: '18rem'}}>
      <div className="card-body">
        <h5 className="card-title">{props.data.first_name} {props.data.last_name}</h5>
        <Link  className="btn btn-primary">
          Detail
          </Link>
      </div>
    </div>)
}

export default Profile
