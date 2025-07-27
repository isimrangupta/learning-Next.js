"use client"
import { use } from "react";

const SingleProfilePost = (props) =>{
  console.log(props)
  const user = use(props.params);
  console.log(user)
  return(
  <>
    <h1>Name: {user.username}</h1>
    <span>Post Id: {user.postid}</span>
  </>
  )
}
export default SingleProfilePost;