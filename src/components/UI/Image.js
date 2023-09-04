import classes from "../UI/Image.module.css"

import profileImg from "../../assets/profile.JPG"

const Image = () => {
  return <img src={profileImg} className={classes.profileImg} alt="" />
}

export default Image
