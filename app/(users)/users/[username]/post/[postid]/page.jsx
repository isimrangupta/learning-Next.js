const SingleProfilePost = async (props) =>{
  console.log(props)
  const user = await props.params;
  console.log(user)
  return(
  <>
    <h1>Name: {user.username}</h1>
    <span>Post Id: {user.postid}</span>
  </>
  )
}
export default SingleProfilePost;