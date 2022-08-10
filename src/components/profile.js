//ส่วนที่ 1

import * as React from "react"
import { Link} from "gatsby"
import { GatsbyImage, getImage,getSrc, StaticImage } from "gatsby-plugin-image"

const Profile = ({data}) => {

  const img = `http://localhost:8055/assets/${data.profile_img.id}`
  const image = getSrc(img)

 return (<div className="card" style={{width: '18rem', marginInline: 12}}>
      <div className="card-body">
      <GatsbyImage image={image} alt={data.student_id}/>
        <h5 className="card-title">{data.first_name} {data.last_name}</h5>
        <Link to="/member/{}" className="btn btn-primary">
          Detail
        </Link>
      </div>  
    </div>)
}

export default Profile
