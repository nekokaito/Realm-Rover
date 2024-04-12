/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from "react";
import Card from "../../components/cards/Card";

export default function Estate() {

    const [allData, setData] = useState([]);

    useEffect(() => {
        fetch('data.json')
        .then(res => res.json())
        .then(data => setData(data))
    }, [])

  return (
    <div>
       <div>
        <h1 className="text-3xl">Estate</h1>
       </div>

      <div className="grid-cols-2 inline-grid gap-8">
      {
        allData.map(data => <Card key={data.id} data={data}></Card>)
      }
      </div>
      
    </div>
  )
}
