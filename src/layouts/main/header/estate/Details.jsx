import { useEffect } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { CiLocationOn} from "react-icons/ci";
import { IoPricetagOutline } from "react-icons/io5";
import { IoResizeOutline } from "react-icons/io5";
import { CiCircleList } from "react-icons/ci";


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
            

            <div className="mockup-window border bg-base-300 my-10">
              <div className="flex justify-around gap-8 flex-col lg:flex-row">
                <div className="p-10"><img className="rounded-3xl lg:w-[700px]" src={image} alt={estate_title} /></div>
                <div className="flex justify-center flex-col">
                 
                 <div className="flex justify-center lg:justify-start items-center gap-4">
                    <h1 className="text-3xl font-bold">{estate_title} </h1>  <div className={status === 'sale'? `badge badge-accent badge-outline`: `badge badge-secondary badge-outline`}>{status}</div>

                 </div>

                 <div className="grid justify-center items-center grid-cols-2 p-5">
                 <div className="flex items-center gap-2"> <CiCircleList /> <span className=" font-semibold">Segment :</span>  {segment_name}</div>
    <div className="flex items-center gap-2"><span className=" font-semibold">Location :</span>  <CiLocationOn /> {location}</div>
   <div className="flex items-center gap-2"> <IoResizeOutline /> <span className=" font-semibold">Area :</span>  {area}</div>
   <div className="flex items-center gap-2"><span className=" font-semibold">Price :</span>  <IoPricetagOutline />{price}$</div>
                 </div>
               <div className="text-center">
                <p> <span className=" font-semibold">Description:</span> {description}</p>
               </div>
               <h3 className="font-semibold mt-2 text-center mr-10">Facilities</h3>
               <div className="p-5 grid grid-cols-2">
                 {
                    facilities.map(i => <li key={id}>{i}</li>)
                 }
               </div>
               
            </div>
            
              </div>
</div>
        </div>
    );
};

export default Details;