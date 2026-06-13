import {useState } from "react";

function App(){
    const[data,setData]= useState([]);

  function handleButton() {
    fetch("/api/jokes", {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
    return (
      <div>
        <button className="btn btn-info ms-2 mt-2" onClick={handleButton}>
          Get Jokes
        </button>
        <p>Jokes : {data.length}</p>
        {data === null ? (
          <p className="text-danger">No Jokes Found</p>
        ) : data.length > 0 ? (
          data.map((joke) => (
            <div className="m-3" key={joke.id}>
                <h5>{joke.id}</h5>
              <h3>{joke.title}</h3>
              <p>{joke.content}</p>
            </div>
          ))
        ) : (
          <p>No jokes available</p>
        )}
      </div>
    );
}
export default App;