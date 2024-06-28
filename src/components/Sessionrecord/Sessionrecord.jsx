import { useEffect, useState } from "react";

function Sessionrecord() {

    const [sessionData,setSessionData] = useState([]);
  useEffect(() => {
    async function getSession() {
      const response = await fetch(`http://localhost:3001/sessions`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setSessionData(data);
    }
    getSession();
  },[]);

  return <div>
    {sessionData.map((item) => (
        <div key={item.id}>
            <p>Date: {item.date}</p>
            <p>Exercise: {item.name}</p>
            <p>Weight: {item.weight}</p>
            <p>Reps: {item.reps}</p>
            <p>Sets: {item.sets}</p>
            </div>
      ))}
  </div>;
}

export default Sessionrecord;
