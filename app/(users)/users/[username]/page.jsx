const SingleProfile = async (props) =>{
  console.log(props)
  const user = await props.params;
  console.log(user)
  return(
    <h1>User = {user.username}</h1>
  )
}
export default SingleProfile;