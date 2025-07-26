const ServerComp = async () => {
  const URL = "https://jsonplaceholder.typicode.com/posts";
  const res = await fetch(URL);
  const data = await res.json();
  console.log(data);

  return (
    <>
      <h1>Server component</h1>

      <ul className="grid grid-cols-3 gap-5 mt-3 p-1">
        {data.map((curElem, index) => {
          return (
            <li className="border border-blue-300 p-1 rounded-2xl" key={index}>{curElem.body}</li>
          )
        })}
      </ul>

    </>
  )
}

export default ServerComp;
