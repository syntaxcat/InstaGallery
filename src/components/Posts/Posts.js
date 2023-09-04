import {Fragment} from "react"

const DUMMY_POSTS = [
  {
    id: "p1",
    description: "Chilling & killing"
  },
  {
    id: "p2",
    description: "Best day of my life"
  },
  {
    id: "p3",
    description: "love my mama <3"
  },
  {
    id: "p4",
    description: "another day another..."
  }
]

const Posts = () => {
  // const postsList = DUMMY_POSTS.map((post) => (
  //   <PostItem key={post.id} id={post.id} description={post.description} />
  // ))

  return <div>{/* <ul>{postsList}</ul> */}</div>
}

export default Posts
