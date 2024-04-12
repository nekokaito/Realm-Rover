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
       <div className="my-10">
        <h1 className="text-4xl text-center font-bold">Estate</h1>
       </div>

      <div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid gap-8">
      {
        allData.map(data => <Card key={data.id} data={data}></Card>)
      }
      </div>
      
    </div>
  )
}
