const Blog = async ({params}) => {
const {slug} = params;
console.log(slug)
  return (
    <div>
      <h1>Blog Page :-</h1>
      <p>Slug: {slug?.join("/")}</p>
    </div>
  )
}

export default Blog;
