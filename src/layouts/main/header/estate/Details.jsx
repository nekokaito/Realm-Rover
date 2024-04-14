import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
    const data = useLoaderData();
    const {id} = useParams();
    console.log(data)
  
    const estate = data.find(i => i.id == id);
   
    console.log(estate)
    const {estate_title, description, price, status, image, facilities, area, location, segment_name} = estate;
    useEffect(() => {
        document.title = `${estate_title} | Realm Rover`;
      });

    return (
        <div>
            {id}
            {estate_title}
        </div>
    );
};

export default Details;