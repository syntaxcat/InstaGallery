import classes from "../UI/Image.module.css"

const Image = (props) => {
  return <img src={props.userImage} className={classes.profileImg} alt="" />
}

export default Image
