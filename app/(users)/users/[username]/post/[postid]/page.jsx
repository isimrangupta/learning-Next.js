"use client"
import { useParams } from "next/navigation";


const SingleProfilePost = () =>{
  const params = useParams();
  console.log(params)
  return(
  <>
    <h1>Name: {params.username}</h1>
    <span>Post Id: {params.postid}</span>
  </>
  )
}
export default SingleProfilePost;