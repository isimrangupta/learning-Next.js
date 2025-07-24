"use client"

import { useRouter } from "next/navigation";

const About = () => {
  const router = useRouter();
  return (
    <>
      <h3>You are on the About page</h3>
      <button
        onClick={() => router.push('/')}>
        Home Page
      </button>
    </>

  )
}

export default About;