"use client"

const Home = () => {
  const handleClick = () =>{
    alert("Hii,🖐")
  }
  return (
    <>
     <h2 className="font-work">Welcome, to Next.js Course !</h2>
     <button className="p-1 rounded-2xl bg-amber-600 text-white mt-5  cursor-pointer" onClick={handleClick}>Click me</button>
    </>
  )
}

export default Home;