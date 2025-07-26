import { useState } from "react";

const Counter = () => {
  const [Increment, setIncrement] = useState(0)
  return (
    <>
      <button
      className="border cursor-pointer mr-6 p-1 rounded-sm bg-gray-500 ml-1"
        onClick={() => setIncrement((prev) => prev + 1)}
      >Add : {Increment}
      </button>
    </>
  )
}

export default Counter;  
