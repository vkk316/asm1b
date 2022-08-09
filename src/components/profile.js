import * as React from "react"
import { Link, useStaticQuery, graphql} from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Profile = (props) => {

 return (<div className="card" style={{width: '18rem'}}>
      <div className="card-body">
      <StaticImage src="http://localhost:8055/assets/5bf4c50a-0835-4110-92cf-6827d8491771"/> {/* GET IMG FROM DIRECTUS */}
        <h5 className="card-title">{props.data.first_name} {props.data.last_name}</h5>
        <Link to="/member/{}" className="btn btn-primary">
          Detail
        </Link>
      </div>  
    </div>)
}

export default Profile
