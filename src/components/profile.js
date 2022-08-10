//ส่วนที่ 1

import * as React from "react"
import { Link} from "gatsby"
import { GatsbyImage, getImage,getSrc, StaticImage } from "gatsby-plugin-image"

const Profile = ({data}) => {

  const img = `http://localhost:8055/assets/${data.profile_img.id}?fit=cover&width=200&height=200`

 return (<div className="card" style={{width: '18rem', margin: 12}}>
      <div className="card-body">
      <img src={img} alt={data.student_id}/>
        <h5 className="card-title">{data.first_name} {data.last_name}</h5>
        <h6 className="card-text">{data.student_id}</h6>
        <Link to={`member/${data.student_id}`} className="btn btn-primary my-3">
          Detail
        </Link>
      </div>  
    </div>)
}

export default Profile
